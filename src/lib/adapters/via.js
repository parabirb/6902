// via, intended to be piped through a memory map
export default function via({ PA, PB }, starting = 0) {
    // controller function
    function controller({ read, address, data }) {
        if (address === 0) return PB({ read, data });
        else if (address === 1) return PA({ read, data });
    }
    // set controller function props for use with map
    controller.starting = starting;
    controller.size = 16;
    // return the controller
    return controller;
};