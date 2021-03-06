/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var Cc = Components.classes;
var Ci = Components.interfaces;
var Cr = Components.results;
var Cu = Components.utils;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource://gre/modules/Services.jsm");

// See: netwerk/protocol/about/nsIAboutModule.idl
const URI_SAFE_FOR_UNTRUSTED_CONTENT  = Ci.nsIAboutModule.URI_SAFE_FOR_UNTRUSTED_CONTENT;
const ALLOW_SCRIPT                    = Ci.nsIAboutModule.ALLOW_SCRIPT;
const HIDE_FROM_ABOUTABOUT            = Ci.nsIAboutModule.HIDE_FROM_ABOUTABOUT;

function AboutRedirector() {}
AboutRedirector.prototype = {
  classDescription: "Navigator about: Redirector",
  classID: Components.ID("{8cc51368-6aa0-43e8-b762-bde9b9fd828c}"),
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIAboutModule]),

  // Each entry in the map has the key as the part after the "about:" and the
  // value as a record with url and flags entries. Note that each addition here
  // should be coupled with a corresponding addition in NavigatorComponents.manifest.
  _redirMap: {
    "blocked": {
      url: "chrome://communicator/content/blockedSite.xhtml",
      flags: (ALLOW_SCRIPT | URI_SAFE_FOR_UNTRUSTED_CONTENT | HIDE_FROM_ABOUTABOUT)
    },
    "certerror": {
      url: "chrome://communicator/content/certError.xhtml",
      flags: (ALLOW_SCRIPT | URI_SAFE_FOR_UNTRUSTED_CONTENT | HIDE_FROM_ABOUTABOUT)
    },
    "feeds": {
      url: "chrome://communicator/content/feeds/subscribe.xhtml",
      flags: (ALLOW_SCRIPT | URI_SAFE_FOR_UNTRUSTED_CONTENT | HIDE_FROM_ABOUTABOUT)
    },
    "logopage": {
      url: "chrome://global/content/logopage.xhtml",
      flags: (URI_SAFE_FOR_UNTRUSTED_CONTENT | HIDE_FROM_ABOUTABOUT)
    },
    "privatebrowsing": {
      url: "chrome://communicator/content/aboutPrivateBrowsing.xul",
      flags: ALLOW_SCRIPT
    },
    "sessionrestore": {
      url: "chrome://communicator/content/feeds/subscribe.xhtml",
      flags: (ALLOW_SCRIPT | HIDE_FROM_ABOUTABOUT)
    },
    "steamedhams": {
      url: "chrome://navigator/content/aboutSH.xhtml",
      flags: (ALLOW_SCRIPT | HIDE_FROM_ABOUTABOUT)
    },
  },

  /**
   * Gets the module name from the given URI.
   */
  _getModuleName: function AboutRedirector__getModuleName(aURI) {
    // Strip out the first ? or #, and anything following it
    let name = (/[^?#]+/.exec(aURI.path))[0];
    return name.toLowerCase();
  },

  getURIFlags: function(aURI) {
    let name = this._getModuleName(aURI);
    if (!(name in this._redirMap))
      throw Cr.NS_ERROR_ILLEGAL_VALUE;
    return this._redirMap[name].flags;
  },

  newChannel: function(aURI, aLoadInfo) {
    let name = this._getModuleName(aURI);
    if (!(name in this._redirMap))
      throw Cr.NS_ERROR_ILLEGAL_VALUE;

    let newURI = Services.io.newURI(this._redirMap[name].url, null, null);
    let channel = Services.io.newChannelFromURIWithLoadInfo(newURI, aLoadInfo);
    channel.originalURI = aURI;

    if (this._redirMap[name].flags & Ci.nsIAboutModule.URI_SAFE_FOR_UNTRUSTED_CONTENT) {
      let principal = Services.scriptSecurityManager.getNoAppCodebasePrincipal(aURI);
      channel.owner = principal;
    }

    return channel;
  }
};

var NSGetFactory = XPCOMUtils.generateNSGetFactory([AboutRedirector]);
