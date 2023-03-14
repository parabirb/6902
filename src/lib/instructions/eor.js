// eor (xor memory with accumulator) controller
export default function eor({state, operandAddress}) {
    // set the accumulator
    state.A = state.A ^ state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", result >> 7);
    state.flags.set("Z", result === 0);
}