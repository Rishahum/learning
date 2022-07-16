let str="hello pepcoding";
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

