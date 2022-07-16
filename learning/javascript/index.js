// .......              cd =change directory            ..........
// .......              ls-> sub directories            ..........
// declaration of variable
/*var a;
a=10;  //initialization of variable
console.log(a);
console.log(typeof a);
// redeclaration of variable
a=true;
console.log(a)
console.log(typeof a)
// redeclaration of variable
 a=null;
 console.log(a);
 console.log(typeof a)
 //redeclaration of variable
  var str='a'
  console.log(typeof str)
  str="how r u"
  console.log(str)
  //redeclaration of variable
  var str;
  str='how r u doing i m fine'
  console.log(str);
  str='how r u doing\ni m fine'
  console.log(str)
  str='m thik hu m bhi thik hu'
  console.log(str)
  var num=4300
  console.log(`half of ${num} is ${num/2}`)
  var num=2020
  console.log(num)
  var num='risha'
//limitation of var
// 1. It can be redeclare
// to tackle this problem let comes into play
// let will reinitialize but not re declares
  let l=100;
  console.log(l);
//   let l='risha';
//   console.log(l);

var sr="how r u doing? I am fine";
console.log(sr);
sr1="How r u doing?";
sr2="I am fine";
console.log(sr);
var b=`hyy my name is risha 
and my mother name is sangeeta sinha`;
console.log(b);
// backstick - ``
// backslash - \
// frontslash - /
var num=200;
console.log(`half of ${num} is ${num/2}`);
for(var i=0;i<num;i++){
  if(i%2==0){
    
  }
}
console.log(i);
for(let j=0;j<num;j++){

}
//console.log(j);*/
/*function calculator(str,a,b){
  
  if(str=="add"){
    return function add(a,b){
      return a+b;
    }

  }
  else if(str=="subs"){
    console.log("when you choose substract");
    return a-b;

  }
  else if(str=="mul"){
    return a*b;

  }
}
let func= calculator("add",5,6);
console.log("return function\n"+func);
/*var number=10;
console.log(number);
var number =20;
function calculator(str,a,b){
  if(str=="add"){
    return function add
  }
}*/
/*calculator("subs",9,7);*/
let cars=[
  `BMW`,"motor Bike","MG","AUDI"
]
console.log(cars);
cars.pop();
//cars.pop(BMW); -> shows error BMW is not defined
console.log(cars);
cars.push("TATA");
console.log(cars);
let array2d =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(array2d);
console.table(array2d);
let res = array2d[1];
console.log(res[1]);
/*let bet = array2d[2];
let add = bet[] + res[]
console.log(add);*/
let arr=[
  [null, 1, 2],
  [3, 4, 5],
  [8]
]
console.table(arr);
//console.log(array[2][2]); -> undefined
// 2d mai value kaise daale
arr[1][2]=8;


