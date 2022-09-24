var str="hello pepcoding";
// h e l l o space p e p c o  d  i  n  g
// 0 1 2 3 4   5   6 7 8 9 10 11 12 13 14
// Extraction method
// slice method
console.log(str[5]);
let sliced = str.slice(2,7);
console.log(sliced);

sliced = str.slice(2);
console.log(sliced);

sliced= str.slice(2,-2);
console.log(sliced);

// substring method
// substr(start, length) -> start index se shuru hoga aur aage ke kitne character capture honge
// length ka mtlb hmme in total kitne character print krne hai
// substr ktta hua aa rha kyuki ab ye use nhi hota but phle ki files m use hua h isileye isse htaya nhi gya h
let string = str.substr(2,6);
console.log(string);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

 // concatenation method-> 2 combine 2 strings and make them one string

// let firstStr = "Believe in ";
// let secondStr = "yourself";

// let concatenatedStr = firstStr + secondStr;
// console.log(concatenatedStr);

// //concat method
// let concatStr = firstStr.concat(secondStr, " and me");
// console.log(concatStr);

// // trim method -> removes all the whitespaces of starting and ending of a string 

// let trimStr = "                                     Hello       how are you                 ";
// console.log(trimStr);
// console.log(trimStr.length);

// console.log(trimStr.trim());
// console.log(trimStr.trim().length);


var str = "Hello hello my name hello is Abhishek"
console.log(str);
// divides string on the basis of argument and puts them in an array
var a=str.split("hello");
console.log(a);


export const key = "SHA-23402340";
export var exportedObj = {
    name: "Abhishek",
    age:32
}




