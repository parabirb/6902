# 6902
6902 is a simple, lightweight, and public domain 6502 emulator written in javascript, consisting of two components (the library and the client).

## library
the 6902 library is designed to provide a lightweight and modular interface to create a virtual cpu and step through clock cycles. on top of fully implementing the 6502 instruction set*, the 6902 library also provides multiple adapters for interfacing the CPU with VIAs**, LCDs***, RAM, and ROM. plus, it's remarkably simple to build adapters for any application you might need.

*BCD has not yet been implemented. illegal opcodes and 65c22-exclusive instructions have not been and will not be implemented. attempting to execute one will result in an error.

**VIAs have not yet been fully implemented. it is in a basic working state at the moment.

***the LCD driver has not yet been fully implemented. it is in a basic working state at the moment.

n.b.: the 6902 only takes one clock cycle per instruction, regardless of instruction or addressing mode. also, for jsr and brk, the program counter pushed to the stack is the location of the instruction that will be executed after return (either rti or rts).

example usage:
```js
// deps
import {CPU, rom} from "./src/lib/index.js";

// create a rom full of nops
let buffer = Buffer.alloc(65536);
for (let i = 0; i < 65536; i++) {
    if (i === 0xfffc || i === 0xffd) i = 0;
    else i = 0xea;
}

// create the CPU
let cpu = new CPU({
    dataBus: rom(buffer)
});

// go through one clock cycle and log the instruction executed
console.log(cpu.clock());
```

for more in-depth examples, see `src/test`.

## client
it's a work-in-progress.

## special thanks
thank you to:
* ben eater for the inspiration for this project and for [reference 6502 assembly](https://eater.net/6502)
* the writers of wikibooks for their [extensive documentation](https://en.wikibooks.org/wiki/6502_Assembly) of 6502 assembly
* philipp koehn for [his](https://www.cs.jhu.edu/~phi/csf/slides/lecture-6502-stack.pdf) [slides](https://www.cs.jhu.edu/~phi/csf/slides/lecture-6502-interrupt.pdf) on the 6502
* norbert landsteiner for his 6502 instruction set [documentation](https://www.masswerk.at/6502/6502_instruction_set.html)
* the western design center for [their](https://eater.net/datasheets/w65c02s.pdf) [datasheets](https://eater.net/datasheets/w65c22.pdf)
* emulator101 for their [documentation](http://www.emulator101.com/6502-addressing-modes.html)
* ken shirriff for his [blog post](https://www.righto.com/2012/12/the-6502-overflow-flag-explained.html) on the overflow flag

these resources were immensely helpful for writing this emulator. if you want to write your own 6502 emulator, i would highly suggest reading the aforementioned resources.