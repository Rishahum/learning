const fs=require("fs");
let res = fs.appendFileSync("f1.txt","hello");
console.log(res);
fs.appendFileSync("f1.txt","hey guys i m risha");
console.log(res);
let data=fs.readFileSync("f1.txt","utf-8");
//console.log( data);
console.log(typeof data); // "object" print hoga kyuki buffer ekk object ki tarah save hai
console.log(data);
/*const abc=require("../scopes");  -> require method goes to the file that is needed to be required. 
execute the file and if there is something that is returned/exported we get that
console.log(abc); */  