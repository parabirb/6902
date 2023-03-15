// deps
import fs from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { CPU, led, map, ram, rom, via } from "../lib/index.js";

// create the CPU
let cpu = new CPU({
    dataBus: map(
        ram(16384),
        via({
            PB: led({
                output: console.log
            })
        }, 0x6000),
        rom(fs.readFileSync(join(dirname(fileURLToPath(import.meta.url)), "blink.bin")), 0x8000)
    )
});

// clock
setInterval(() => cpu.clock(), 200);