// ram module, should be piped through a memory map
export default function ram(size = 16384, starting = 0) {
    // memory
    const memory = Buffer.alloc(size);
    // controller function
    function controller({ read, address, data }) {
        if (read) return memory[address];
        else memory[address] = data;
    }
    // set controller function props for use with map
    controller.starting = starting;
    controller.size = size;
    // return the controller
    return controller;
};