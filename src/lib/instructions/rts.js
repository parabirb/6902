// rts (return from subroutine) controller
export default function rts({state}) {
    // pull the low byte from the stack
    state.SP++;
    state.PC = state.dataBus({ read: true, address: 0x100 + state.SP });
    // pull the high byte from the stack
    state.SP++;
    state.PC |= state.dataBus({ read: true, address: 0x100 + state.SP }) << 8;
}