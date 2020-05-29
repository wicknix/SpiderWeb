# SpiderWeb browser 
* SpiderWeb is a semi portable browser similar in look and feel to the old SeaMonkey
* It is built upon many varients of Mozilla community code depending on platform
* It will build and run on i386/x86_64 OSX 10.6+ and Linux along with 32-bit PowerPC Linux

# Building SpiderWeb for PowerPC Linux
* Download UXP4PPC https://github.com/wicknix/UXP4PPC32/archive/v2.2.tar.gz (Unified XUL Platform) modified for PowerPC and extract 
  it's contents, rename it to mozilla and drop it into this directory.
* Read the build instructions within the /mozilla directory to bypass endianness issues with the icu.dat file.
* Run ./mach build
* Reread those build instructions and copy the included icu.dat before ./mach run or ./mach package

# OS X 10.7+ versions are built upon the unified xul platform
* https://github.com/MoonchildProductions/uxp

***See the WIKI tab for prebuilt powerpc binaries and extensions***

# Source for the 10.6 Snow Leopard specific build (based on 52.9-esr)
https://drive.google.com/file/d/1QYFqLm30OdIOmp6tI05WFCw6_8-etZ5D/view?usp=sharing
# Binaries for 10.6 & 10.7+
https://randommacstuff.blogspot.com/p/spiderweb-browser.html
