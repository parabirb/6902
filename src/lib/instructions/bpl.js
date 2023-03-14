// bpl (branch on result plus) controller
export default function bpl({state, operandAddress}) {
    // jump if the negative flag is false
    if (!state.flags.get("N")) state.PC = operandAddress;
}