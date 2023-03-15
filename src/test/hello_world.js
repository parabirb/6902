// deps
import fs from "fs";
import {fileURLToPath} from "url";
import {join, dirname} from "path";
import {CPU, lcd, map, ram, rom, via} from "../lib/index.js";

// character array
let array = [];
for (let i = 0; i < 32; i++) array[i] = "";

// lcd output function
function update(arr) {
    array = arr;
}

// create the CPU
let cpu = new CPU({
    dataBus: map(
        ram(16384),
        via(lcd({
            update
        }), 0x6000),
        rom(fs.readFileSync(join(dirname(fileURLToPath(import.meta.url)), "hello_world.bin")), 0x8000)
    )
});

// clock
setInterval(() => {
    console.clear();
    console.log(`${cpu.clock()}
${array.slice(0, 16).join("")}
${array.slice(16).join("")}`)
}, 100);