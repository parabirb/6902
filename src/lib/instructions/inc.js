// inc (increment memory by one) controller
export default function inc({state, operandAddress}) {
    // get the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // get the result
    let result = (operand + 1) & 0xff;
    // set the flags
    state.flags.set("N", result >> 7);
    state.flags.set("Z", result === 0);
    // set the operand
    state.dataBus({ read: false, address: operandAddress, data: result });
}