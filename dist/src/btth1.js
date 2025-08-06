"use strict";
// khai bao kiểu dữ liệu enum
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `🔄 Moving ${direction}`;
};
const setMode = (systemMode) => {
    return `⚙️ System set to ${systemMode} mode`;
};
const processInput = (input) => {
    if (typeof input === "string") {
        console.log(`Input length: ${input.length}`);
    }
    else {
        console.log("Input: ", input);
    }
};
const validateInput = (input) => {
    if (typeof input === "number") {
        console.log(`📥 Received input (any): ${input}`);
    }
    else {
        console.log("❌ Invalid input type");
    }
};
const crash = (massage) => {
    throw new Error(massage);
};
console.log();
//gọi hàm
logMovement("left");
setMode(SystemMode.AUTO);
processInput(10);
validateInput(20);
try {
    crash("💥 SYSTEM CRASHED: Overheat detected!");
}
catch (error) {
    console.log(error);
}
