// cmp (compare memory with accumulator) controller
export default function cmp({state, operandAddress}) {
    // fetch the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.A < operand);
    state.flags.set("Z", state.A === operand);
    state.flags.set("C", state.A >= operand);
}