// deps
import fs from "fs";
import CPU from "../lib/cpu.js";
import map from "../lib/adapters/map.js";
import ram from "../lib/adapters/ram.js";
import rom from "../lib/adapters/rom.js";
import via from "../lib/adapters/via.js";
import led from "../lib/adapters/led.js";

// create the CPU
let cpu = new CPU({
    dataBus: map(
        ram(16384),
        via({
            PB: led({
                output: console.log
            })
        }, 0x6000),
        rom(fs.readFileSync("blink.bin"), 0x8000)
    )
});

// clock
setInterval(() => cpu.clock(), 100);