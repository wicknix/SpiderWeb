# Building SpiderWeb

* Download UXP4PPC https://github.com/wicknix/UXP4PPC32 (Unified XUL Platform) modified for PowerPC and extract 
  it's contents, rename it to mozilla and drop it into this directory.
* Read the build instructions within the /mozilla directory to bypass endianness issues with the icu.dat file.
* Run ./mach build
* Reread those build instructions and copy the included icu.dat before ./mach run or ./mach package

**See the WIKI tab for prebuilt binaries and extensions
