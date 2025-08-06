"use strict";
let str2 = "banana";
let result = "";
for (let i = 0; i < str2.length; i++) {
    if (!result.includes(str2[i])) {
        result += str2[i];
    }
}
console.log(result);
