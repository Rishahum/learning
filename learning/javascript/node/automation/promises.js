const fs=require(`fs`);
console.log("before");
//fs.readFile("f1.txt",cb); // if we do fs.readFileSync, then it will print syncronously
//function cb(err,data){
  //  if(err){
  //      console.log("err");
// }
    //else {
    //   console.log(data + "");}
//}
console.log("after");
let promisethatfilewillberead=fs.promises.readFile(`f1.txt`);
console.log(promisethatfilewillberead); //pending state
//we can't use if-else statement because in if-else state object will always show in pending state 

promisethatfilewillberead.then(printData);
promisethatfilewillberead.catch(printError);

 function printData(data){
    console.log("promises is fullfiled");
    console.log(data +""); // fullfill state
    //promises can be in three states :-
    //1. pending
    //2. fullfil
    //3. reject

 }
function printError(err){
    console.log(err); // if promises gets rejected or rejected state

}
//call back hell
//pyramid of doom - function ke andar funtion call kr rhe h 
