// deps
import fs from "fs";
import {fileURLToPath} from "url";
import {join, dirname} from "path";
import {CPU, lcd, map, ram, rom, via} from "../lib/index.js";

// lcd output function
function update(array) {
    console.clear();
    console.log(array.slice(0, 16).join(""));
    console.log(array.slice(16).join(""));
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
setInterval(() => cpu.clock(), 20);