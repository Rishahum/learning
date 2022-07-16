// q1. read 3 files f1.txt,f2.txt,f3.txt parallely using promises

//2nd way to overcome callback hell is to use promise
const fs=require("fs");
let f1readPromise=fs.readFile("f1.txt");
function read1file(data){
    console.log(data +"");
    let f2readpromise=fs.promise.readFile("f2.txt");
    return f2readpromise;
}
function read2file(data){
    console.log(data + "");
    let f3readpromise=fs.promise.readFile("f3.txt");
    return f3readpromise;

}
function read3file(data){
    console.log(data +"");
    console.log("data is parallely ")
}

f1readPromise
.then(read1file)
.then(read2file)
.then(read3file)
.catch(function(err){
    console.log("error");
});

//q2 using promises
let f1p=fs.promises.readFile("f1.txt");
let f2p=fs.promises.readFile("f2.txt");
let f3p=fs.promises.readFile("f3.txt");

f1p.then(cb);
f2p.then(cb);
f3p.then(cb);
function cb(data){
    console.log(data+"");
}
