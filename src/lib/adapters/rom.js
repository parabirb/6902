// rom module, can be connected either to the databus or piped through a memory map
export default function rom(buffer, starting = 0) {
    // controller function
    function controller({ address }) {
        return buffer[address];
    }
    // set controller function props for use with map
    controller.starting = starting;
    controller.size = buffer.length;
    // return the controller
    return controller;
};