// C1-A2: Mathematical and Comparison Operations, and Type Conversions

// === Variable and Constant Declaration ===
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // string value
const e = 15; // constant value

// === a. Calculate total sum (convert d to number) ===
let total = a + b + c + Number(d) + e;
console.log("Sum of a, b, c, d, and e:", total);

// === b. Relational comparisons between d and e ===
console.log("d > e:", Number(d) > e);     // true or false
console.log("d < e:", Number(d) < e);     // true or false
console.log("d >= e:", Number(d) >= e);   // true or false
console.log("d <= e:", Number(d) <= e);   // true or false
console.log("d === e:", Number(d) === e); // strict equality comparison

// === c1. Subtract all values ===
let result1 = a - b - c - Number(d) - e;
console.log("Subtraction result:", result1);

// === c2. Multiply a and c, then divide by e ===
let result2 = (a * c) / e;
console.log("Multiplication and division result:", result2);

// === c3. Exponentiation: e raised to the power of c ===
let result3 = e ** c;
console.log("Exponentiation result (e^c):", result3);

// === c4. Reassign result3 to a new variable (since e is a constant) ===
let newE = result3;
console.log("Reassigned value to newE:", newE);
