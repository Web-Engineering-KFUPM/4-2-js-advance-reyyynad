/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/

//here we create an object with no class
const person = {
   first: "Renad",
   last: "Elsafi",
   _gpa: 3.9,
   get fullName(){
      return `${this.firstName} ${this.lastName}`;
   },
   get gpa(){
      return this._gpa;
   },
   set updateGpa(newGpa){
      if(newGpa>=0 && newGpa<=4)
         this._gpa = newGpa;
   },
};

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseCodes = {ICS104: "Introduction to Programming Using Python", ICS202:"Data Structures", SWE363:"Web Development"}
for (const key in courseCodes){
   console.log(key)
}



// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/

const str = "RENAD";
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charAt(4));

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const todayDate = new Date();
console.log(todayDate.getDate());
console.log(todayDate.getMonth()); // 0 is january, i got 8 which is septemebr
console.log(todayDate.getFullYear()); // i got 2025
console.log("Full Date:", todayDate.getDate(), "-",todayDate.getMonth(), "-",todayDate.getFullYear())
// console.log(todayDate.getHours()); //it is 11:47 am, i got 11
// console.log(todayDate.getMinutes()); // it is 11:47 am i got 47

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const myNumbers = [1,2,3,4,5,6,7,8,13,12];
const min = Math.min(...myNumbers); //use ...(arrayname) which iterates over the array or just write all the numbers
const max = Math.max(...myNumbers);//use ...(arrayname)
console.log("Array =", myNumbers,"Min =", min, "Max=", max)

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

function maxElement(array){
   if(!Array.isArray(array) || array.length == 0){
      throw new Error("Array must be non-empty.");
   }
   return Math.max(...array);
}
try{
   const x = maxElement([])
   console.log("Yay no error and the maximum value is", x)
}
catch(e){
   console.log("Oops this is an error")
}
finally{
   console.log("This block always runs")
}
   


// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
