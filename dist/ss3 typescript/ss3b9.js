"use strict";
const add = (a, b) => a + b;
const subtract2 = (a, b) => a - b;
const multiply2 = (a, b) => a * b;
const divide2 = (a, b) => {
    if (b === 0)
        throw new Error("Không thể chia cho 0");
    return a / b;
};
const power = (base, exponent) => Math.pow(base, exponent);
const sqrt = (base, root) => {
    if (root === 0)
        throw new Error("Không thể lấy căn bậc 0");
    return Math.pow(base, 1 / root);
};
const factorial = (n) => {
    if (n < 0)
        throw new Error("Không tính được giai thừa số âm");
    let result = 1;
    for (let i = 2; i <= Math.floor(n); i++) {
        result *= i;
    }
    return result;
};
const handle = (op) => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultEl = document.getElementById("result");
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    const isValidNumber = (val) => !isNaN(parseFloat(val)) && isFinite(Number(val));
    try {
        let result;
        switch (op) {
            case '+':
                if (!isValidNumber(input1) || !isValidNumber(input2))
                    throw new Error("Dữ liệu không hợp lệ");
                result = add(num1, num2);
                break;
            case '-':
                if (!isValidNumber(input1) || !isValidNumber(input2))
                    throw new Error("Dữ liệu không hợp lệ");
                result = subtract2(num1, num2);
                break;
            case '*':
                if (!isValidNumber(input1) || !isValidNumber(input2))
                    throw new Error("Dữ liệu không hợp lệ");
                result = multiply2(num1, num2);
                break;
            case '/':
                if (!isValidNumber(input1) || !isValidNumber(input2))
                    throw new Error("Dữ liệu không hợp lệ");
                result = divide2(num1, num2);
                break;
            case '^':
                if (!isValidNumber(input1) || !isValidNumber(input2))
                    throw new Error("Dữ liệu không hợp lệ");
                result = power(num1, num2);
                break;
            case '√':
                if (!isValidNumber(input1) || !isValidNumber(input2))
                    throw new Error("Dữ liệu không hợp lệ");
                result = sqrt(num1, num2);
                break;
            case '!':
                if (!isValidNumber(input1))
                    throw new Error("Dữ liệu không hợp lệ");
                result = factorial(num1);
                break;
            default:
                throw new Error("Phép toán không hợp lệ");
        }
        resultEl.innerText = `Kết quả: ${result}`;
    }
    catch (error) {
        resultEl.innerText = `Lỗi: ${error.message}`;
    }
};
