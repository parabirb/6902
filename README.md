# 6902
6902 is a simple, lightweight, and public domain 6502 emulator written in javascript, consisting of two components (the library and the client).

## library
the 6902 library is designed to provide a lightweight and modular interface to create a virtual cpu and step through clock cycles. on top of fully implementing the 6502 instruction set*, the 6902 library also provides multiple adapters for interfacing the CPU with VIAs**, LCDs***, RAM, and ROM. plus, it's remarkably simple to build adapters for any application you might need.

*BCD has not yet been implemented.

**VIAs have not yet been fully implemented.

***the LCD driver has not yet been implemented.

## client
it's a work-in-progress.