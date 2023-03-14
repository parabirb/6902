// sbc (subtract memory from accumulator with borroow) controller
export default function sbc({state, operandAddress}) {
    // get the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // calculate the result of the subtraction
    let subtraction = state.A - operand - 1 + state.flags.get("C");
    // calculate the 8-bit constrained subtraction
    let result = subtraction & 0xff;
    // set the flags
    state.flags.set("N", result >> 7);
    state.flags.set("V", ((state.A ^ result) & (operand ^ result)) >> 7);
    state.flags.set("Z", result === 0);
    state.flags.set("C", subtraction !== result);
    // set the accumulator
    state.A = result;
}