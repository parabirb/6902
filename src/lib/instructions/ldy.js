// ldy (load y with memory) controller
export default function ldy({state, operandAddress}) {
    // load the byte at the operand address into y
    state.Y = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.Y >> 7);
    state.flags.set("Z", state.Y === 0);
}