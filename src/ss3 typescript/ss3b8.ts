const checkNum = (value: number | string): boolean =>{
    return !isNaN(Number(value));
}

const sum = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) + Number(b);
    } else {
        return "Tham số không hợp lệ";
    }
};

const subtract = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) - Number(b);
    } else {
        return "Tham số không hợp lệ";
    }
};

const multiply = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) * Number(b);
    } else {
        return "Tham số không hợp lệ";
    }
};

const divide = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        const numB = Number(b);
        if (numB === 0) return "Không thể chia cho 0";
        return Number(a) / numB;
    } else {
        return "Tham số không hợp lệ";
    }
};

console.log(sum(5, "3"));           
console.log(subtract("10", 4));     
console.log(multiply("2", "3"));    
console.log(divide("9", "0"));      
console.log(sum("abc", 5));         
