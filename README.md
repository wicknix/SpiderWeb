# SpiderWeb is a semi portable browser similar in look and feel to the old SeaMonkey
* It will build and run on i386/x86_64 OSX and Linux along with PowerPC Linux

# Building SpiderWeb for PowerPC Linux
* Download UXP4PPC https://github.com/wicknix/UXP4PPC32/archive/v2.2.tar.gz (Unified XUL Platform) modified for PowerPC and extract 
  it's contents, rename it to mozilla and drop it into this directory.
* Read the build instructions within the /mozilla directory to bypass endianness issues with the icu.dat file.
* Run ./mach build
* Reread those build instructions and copy the included icu.dat before ./mach run or ./mach package

***See the WIKI tab for prebuilt binaries and extensions***

# Source for the 10.6 Snow Leopard specific build
https://drive.google.com/file/d/1QYFqLm30OdIOmp6tI05WFCw6_8-etZ5D/view?usp=sharing
# Binary for 10.6 Snow Leopard
https://drive.google.com/file/d/1TqDmki0A6TOw6JT_-Vy5N6wIvBD4S9YL/view?usp=sharing
