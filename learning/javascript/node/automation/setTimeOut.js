function yolo(){
    var a=10;
    function yolo1(){
        console.log("hello");
    }
    //function to be executed(callback, fun) , time(ms) after which cb to be executed.
    //1s=1000milli second
    setTimeout(yolo1,10000);
    //asynchronous function
    console.log(a);
   function a(){
    let x=1000;
    function y(){
        return x;
    }
    return y;
   }
}
yolo();
for(var i=0;i<=10;i++){
    let b=i;
    setTimeout(function(){
        
        console.log(b);
    },5000);
}
for(var i=0;i<=10;i++){
    function cb(a){
        console.log(a);
    }
    setTimeout(cb,2000*i,i);
}
let fn=a();
let ans=fn();
console.log(ans +"hyy");
