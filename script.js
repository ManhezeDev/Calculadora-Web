let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    if (currentInput.includes('.') && value === '.') return;
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '0';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    previousInput = result.toString();
    currentInput = '';
}

function setOperator(op) {
    if (currentInput === '') return;
    previousInput = currentInput;
    operator = op;
    currentInput = '';
}
