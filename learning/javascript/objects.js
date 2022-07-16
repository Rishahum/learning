String="risha";
console.log(String["length"]);
let objects={};
console.log(objects);
let person={
    name:"Risha",
    age:20,
    phone:"8746XXXXXX",
    gender:"female",
    height:"150cm"

};
console.log(person["name"]);
let personal={
    name:"risha",
    class:"1st year of college",
    course:"BCA",
    age:20,
    isgirl:true,
    address : {
        state: "delhi",
        city:"delhi",
        country: "india"
    },
    sayHi: function(){   //method-> jo bhi object ke andr function bna hota hai use mthod kehte hai

        console.log(`hello my name is ${this.name}`);
    }
};
console.log(personal);
console.log(personal.sayHi());
console.log(personal.city);
for( let haathi in personal){
    console.log(haathi);
}
personal.sayHi();  //method accessing
let func=personal.sayHi();
console.log(func);
console.log(personal.address.city);
