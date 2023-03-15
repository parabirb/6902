// deps
import fs from "fs";
import {fileURLToPath} from "url";
import {join, dirname} from "path";
import {CPU, led, map, ram, rom, via} from "../lib/index.js";

// leds
let ledState = "00000000";

// led output function
function output(state) {
    ledState = state;
}

// create the CPU
let cpu = new CPU({
    dataBus: map(
        ram(16384),
        via({
            PB: led({output})
        }, 0x6000),
        rom(fs.readFileSync(join(dirname(fileURLToPath(import.meta.url)), "blink.bin")), 0x8000)
    )
});

// clock
setInterval(() => {
    console.clear();
    console.log(`${cpu.clock()}
${ledState}`);
}, 500);