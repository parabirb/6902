// brk (break) controller
export default function brk({state}) {
    // push the upper byte of the program counter onto the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.PC & 0xff });
    state.SP--;
    // push the lower byte of the program counter onto the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.PC >> 8 });
    state.SP--;
    // push the processor state onto the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.P });
    state.SP--;
    // set the program counter to whatever the brk vector points to
    state.PC = (state.dataBus({read: true, address: 0xffff}) << 8) | state.dataBus({read: true, address: 0xfffe});
    // set the interrupt flag
    state.flags.set("I", 1);
}