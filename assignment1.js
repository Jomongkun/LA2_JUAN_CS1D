// C1-A1: Variable/Constants Declaration and String Concatenation Methods

// Student 1
let fName1 = "Jeryme";
let mName1 = "Talisic";
let lName1 = "Juan";
let birthdate1 = "January 28, 2005";
let birthplace1 = "Hospital Apyao Luna";
let address1 = "Mckinley, Galimuyod, Ilocos Sur, Philippines 2709";
let courseYear1 = "Bachelor of Science in Computer Science";
let dreamJob1 = "Software Engineer";

// Student 2
let fName2 = "Maria";
let mName2 = "Isabel";
let lName2 = "Reyes";
let birthdate2 = "February 14, 2002";
let birthplace2 = "Barangay Uno, Vigan City, Ilocos Sur, Philippines 2700";
let address2 = "Barangay Dos, Vigan City, Ilocos Sur, Philippines 2700";
let courseYear2 = "Bachelor of Science in Information Technology";
let dreamJob2 = "UX Designer";

// Print formatted sentences
console.log(`[${fName1.toUpperCase()} ${mName1.toUpperCase()} ${lName1.toUpperCase()}] was born [${birthdate1}] at [${birthplace1}], and currently living at [${address1}]. [${(fName1 + " " + mName1 + " " + lName1).toLowerCase()}] is taking up [${courseYear1.toLowerCase()}] and dreams to be [${dreamJob1}] after graduation.\n`);

console.log(`[${fName2.toUpperCase()} ${mName2.toUpperCase()} ${lName2.toUpperCase()}] was born [${birthdate2}] at [${birthplace2}], and currently living at [${address2}]. [${(fName2 + " " + mName2 + " " + lName2).toLowerCase()}] is taking up [${courseYear2.toLowerCase()}] and dreams to be [${dreamJob2}] after graduation.`);
