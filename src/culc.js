const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : "Error: Division by zero"),
};

const simpleCalculate = (a, b, operation) => operation(a, b);
