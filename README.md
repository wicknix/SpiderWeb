# Building SpiderWeb
* Download UXP4PPC (Unified XUL Platform) modified for PowerPC and extract it's contents in to the
/mozilla directory.
* Read the build instructions within the /mozilla directory to bypass endianness issues with the icu.dat file.
* Move the .mozconfig from /mozilla directory to this directory and edit if needed.
* Run ./mach build
* Reread those build instructions and copy the included icu.dat before ./mach run or ./mach package

*See the WIKI tab for prebuilt binaries and extensions
