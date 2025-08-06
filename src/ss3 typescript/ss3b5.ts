
let firstName: string = "john";
let lastName: string = "doe";

const upperChar =(str: string): string => {
    if (str.length === 0) return str; 
    return str[0].toUpperCase() + str.slice(1); 
}

if (firstName[0] !== firstName[0].toUpperCase()) {
    firstName = upperChar(firstName);
}

if (lastName[0] !== lastName[0].toUpperCase()) {
    lastName = upperChar(lastName);
}

let fullName: string = `${firstName} ${lastName}`;

console.log("Full name:", fullName);
