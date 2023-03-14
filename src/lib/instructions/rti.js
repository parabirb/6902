// rti (return from interrupt) controller
export default function rti({state}) {
    // pull the flags from the stack
    state.SP++;
    state.P = state.dataBus({ read: true, address: 0x100 + state.SP });
    // pull the low byte of the program counter from the stack
    state.SP++;
    state.PC = state.dataBus({ read: true, address: 0x100 + state.SP });
    // pull the high byte of the program counter from the stack
    state.SP++;
    state.PC |= state.dataBus({ read: true, address: 0x100 + state.SP }) << 8;
}