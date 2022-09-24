var arr = [];
var obj = {};
function abc() {
    console.log("you only live once");
}

console.log(arr.__proto__);
console.log(Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);

console.log(abc.__proto__);
console.log(abc.__proto__.__proto__);

console.log(obj.__proto__.__proto__);