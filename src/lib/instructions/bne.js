// bne (branch on result not zero) controller
export default function bne({state, operandAddress}) {
    // jump if the zero flag is false
    if (!state.flags.get("Z")) state.PC = operandAddress;
}