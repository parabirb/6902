// rol (rotate left) controller
export default function rol({state, operandAddress, mode}) {
    // get the operand
    let operand = mode === "A" ? state.A : state.dataBus({ read: true, address: operandAddress });
    // get the result
    let result = ((operand << 1) & 0xff) | state.flags.get("C");
    // set the flags
    state.flags.set("N", result >> 7);
    state.flags.set("Z", result === 0);
    state.flags.set("C", operand >> 7);
    // set the operand
    if (mode === "A") state.A = result;
    else state.dataBus({ read: false, address: operandAddress, data: result });
}