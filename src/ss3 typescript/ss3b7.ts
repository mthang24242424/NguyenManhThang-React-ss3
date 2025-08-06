let str2: string = "banana"
let result: string = ""
for (let i = 0; i < str2.length; i++) {
    if(!result.includes(str2[i])){
        result += str2[i]
    }
}
console.log(result);
