"use strict";
const checkNum = (value) => {
    return !isNaN(Number(value));
};
const sum = (a, b) => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) + Number(b);
    }
    else {
        return "Tham số không hợp lệ";
    }
};
const subtract = (a, b) => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) - Number(b);
    }
    else {
        return "Tham số không hợp lệ";
    }
};
const multiply = (a, b) => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) * Number(b);
    }
    else {
        return "Tham số không hợp lệ";
    }
};
const divide = (a, b) => {
    if (checkNum(a) && checkNum(b)) {
        const numB = Number(b);
        if (numB === 0)
            return "Không thể chia cho 0";
        return Number(a) / numB;
    }
    else {
        return "Tham số không hợp lệ";
    }
};
console.log(sum(5, "3"));
console.log(subtract("10", 4));
console.log(multiply("2", "3"));
console.log(divide("9", "0"));
console.log(sum("abc", 5));
