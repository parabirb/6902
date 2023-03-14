// beq (branch on result zero) controller
export default function beq({state, operandAddress}) {
    // jump if the zero flag is true
    if (state.flags.get("Z")) state.PC = operandAddress;
}