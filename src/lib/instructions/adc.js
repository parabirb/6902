// adc (add memory to accumulator with carry) controller
export default function adc({state, operandAddress}) {
    // get the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // calculate the result of the addition
    let addition = state.A + operand + state.flags.get("C");
    // calculate the 8-bit constrained addition
    let result = addition & 0xff;
    // set the flags
    state.flags.set("N", result >> 7);
    state.flags.set("V", ((state.A ^ result) & (operand ^ result)) >> 7);
    state.flags.set("Z", result === 0);
    state.flags.set("C", addition !== result);
    // set the accumulator
    state.A = result;
}