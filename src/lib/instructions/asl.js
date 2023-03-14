// asl (arithmetic shift left) controller
export default function asl({state, operandAddress, mode}) {
    // get the operand
    let operand = mode === "A" ? state.A : state.dataBus({ read: true, address: operandAddress });
    // get the result
    let shifted = operand << 1;
    let result = shifted & 0xff;
    // set the flags
    state.flags.set("N", result >> 7);
    state.flags.set("Z", result === 0);
    state.flags.set("C", result !== shifted);
    // set the operand
    if (mode === "A") state.A = result;
    else state.dataBus({ read: false, address: operandAddress, data: result });
}