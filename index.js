"use strict";

// Imports
const fs = require("fs");

// Variables
let output = fs.createWriteStream("patterns.regexr");
let operators = [
    "out", "psh", "pop",
    "jmp", "imp", "evl",
    "ext", "add", "sub",
    "mul", "div", "rnd",
    "lwr", "upr", "rng",
    "cls", "read", "call",
    "ret", "rep", "whl",
    "num", "tstr", "rem",
    "inc", "dec", "pause",
];
let comparators = [
    "==", "!=", ">=",
    "<=", ">", "<",
    "in", "xin"
];

// Output
output.write(new RegExp(`\\\\b(${operators.sort().join("|")})\\\\b`).toString() + "\n", () => {});
output.write(new RegExp(`(${comparators.join("|")})`).toString() + "\n", () => {});
output.write("(?<=\\\\s|^) (?=\\\\s|$)" + "\n");