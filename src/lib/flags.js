// flag class for.. handling flags
export default class Flags {
    // constructor
    constructor(cpu) {
        // set the cpu
        this.cpu = cpu;
        // set the flag array
        this.flagArray = ["C", "Z", "I", "D", "-", "-", "V", "N"];
    }
    // get flag
    get(flag) {
        return (this.cpu.P >> this.flagArray.indexOf(flag)) & 1;
    }
    // set flag
    set(flag, value) {
        // in case value is a boolean
        value = +value;
        // get the bitmask of the flag
        let bitmask = 1 << this.flagArray.indexOf(flag);
        // if the flag is true
        if (value) this.cpu.P |= bitmask;
        // otherwise
        else this.cpu.P &= (0xff ^ bitmask);
    }
}