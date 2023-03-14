// bcc (branch on carry clear) controller
export default function bcc({state, operandAddress}) {
    // jump if the carry flag is false
    if (!state.flags.get("C")) state.PC = operandAddress;
}