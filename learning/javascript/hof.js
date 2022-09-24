function calculator(operator,a,b){
    if(operator=="+"){
        return function add(){
            return a+b;
        };
    }
}
console.log("hello");
var fn=calculator("+",3,4);
var ans=fn();
console.log(ans);

// functional programming
const arr=[1,2,3,4]
let res=[];
function areaOfSquare(arr){
    for(let i=0;i<arr.length;i++){
        res.push(arr[i]*arr[i]);
    }
    return res;
};
console.log(areaOfSquare(arr));

function perimeterOfSquare(arr){
    for(let i=0;i<arr.length;i++){
        res.push(4*arr[i]);
    }
    return res;
}
console.log(perimeterOfSquare(arr));

function diagonalOfSquare(arr){
    for(let i=0;i<arr.length;i++){
        res.push(arr[i]*Math.sqrt(2));
    }
    return res;
}
console.log(diagonalOfSquare(arr));

//beter way
let a=[];
 function calculate(arr,logic){
    for(let i=0;i<arr.length;i++){
        a.push(logic(arr[i]));
    }
    return a;
 }
 function area(a){
    return a*a;
 }
 function perimeter(a){
    return 4*a;
 }
 function diagonal(a){
    return Math.sqrt(2)*a;
 }
 console.log(calculate(arr,diagonal));
console.log(calculate(arr,area));
console.log(calculate(arr,perimeter));

// map
 r=[2,3,4,5];
 r=r.map((a)=>{
    return a*a;
 })
 console.log(r +"map"); //4,9,16,25

//  filter
 //used to filter things
 let evenNumber=arr.filter(function cb(num){
    return !(num%2==0);
 })
 console.log(evenNumber +"filter"); // 2,4

 //reduce
 
 let sumOfArr = arr.reduce((acc, num) => {
    console.log("acc: ", acc);
    console.log("num: ", num);
    acc = acc + num;
    return acc;
  },2);
  
  console.log(sumOfArr);

  let productOfArr = arr.reduce((acc, num) => {
    console.log("acc: ", acc);
    console.log("num: ", num);
    acc = acc * num;
    return acc;
  },2);
  
  console.log(productOfArr);

  //write a code to calculate largest element in arr
const ar = [2, 5, 8, 6, 78];
let max
function largestnumber(max,currval){
    
    if(currval>max){
        currval=max
    }
    return max;
}
let result=arr.reduce(largestnumber,-Infinity); // largest number khojna hai isiliye -infinity taaki kisi bhi 
//array k liye ye code chl sake agr hum -infinty ki jagah 0 le lete to ye code negative numbers k liye nhi chl pata
console.log(result);

var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },
  ];
  
  //write a code to get fullName of all the users
  // output-> ["Mayank Singh", "Jyoti Jauhari", "Saket Bharti"]
  var b=[];
  function getFullName(obj) {
    b.push( obj.firstName + " " + obj.lastName);
    return b;
  }
  
  var answer = users.map(getFullName)
  console.log(answer);
  
  console.log(users.map((obj)=> obj.firstName+" "+obj.lastName));
  //write a code to return the number of people with a particular age
// output-> {55:1,25:1,15:1}
//yaha hum reduce use krenge kyuki mapping m condition nhi lgg skti, uske lliye humme filter use krna pdta hai but filter bhi 
//elements mai se elements ko filter krne k liye use hota aur humme yaha hr ekk element k aandr jaake changes krne hai

function peopleAge(robj, cobj) {
    let age = cobj.age;
    if (robj[age]) {
      robj[age] = robj[age] + 1;
    }
    else {
      robj[age] = 1;
    }
  
    return robj;
  
  }
  
  var obj = users.reduce(peopleAge, {}); 
  console.log(obj);

//write a code to get firstName of all the users with age less than 30
// output-> [ "Jyoti Jauhari", "Saket Bharti"]

let third=users.filter((obj)=>obj.age<30);
third=third.map(getFullName);
console.log(third);
let answers=users.filter((obj)=>
    obj.age<50).map(getFullName);
console.log(answers);


Array.prototype.myMap = function (logic) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(logic(this[i]));
    }
    return res;
  }
var narr=[4,6,8,5];
var ans=narr.myMap(area);

Array.prototype.mySize = 8; // properties
console.log(narr.mySize);







  


