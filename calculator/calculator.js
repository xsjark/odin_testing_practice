export const calculator = (a, b) => {
    const add = () => a + b
    const subtract = () => a - b
    const multiply = () => a * b
    const divide = () => a / b
    
    return {add, subtract, multiply, divide}
}

