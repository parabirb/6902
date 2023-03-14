// bvc (branch on overflow clear) controller
export default function bvc({state, operandAddress}) {
    // jump if the overflow flag is false
    if (!state.flags.get("V")) state.PC = operandAddress;
}