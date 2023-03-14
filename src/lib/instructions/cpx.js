// cpx (compare memory with x) controller
export default function cpx({state, operandAddress}) {
    // fetch the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.X < operand);
    state.flags.set("Z", state.X === operand);
    state.flags.set("C", state.X >= operand);
}