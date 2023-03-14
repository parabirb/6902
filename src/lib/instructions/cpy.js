// cpy (compare memory with y) controller
export default function cpy({state, operandAddress}) {
    // fetch the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.Y < operand);
    state.flags.set("Z", state.Y === operand);
    state.flags.set("C", state.Y >= operand);
}