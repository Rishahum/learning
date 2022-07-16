const fs=require("fs");
//q1 read 3 files f1.txt,f2.txt and f3.txt serially by using callback 
// callback hell
fs.readFile("f1.txt", function cb1(err, res){
    if(err){
        console.log("error");
    }else{
        console.log(res +"");
        fs.readFile("f2.txt", function cb2(err, res){
            if(err){
                console.log("error");
            }else{
                console.log(res +"");
                fs.readFile("f3.txt", function(err, res){
                    if(err){
                        console.log("error");
                    }else{
                        console.log(res +"");
                        console.log("read all files ");
                    }
                })
            }
        });
    }
});


// 1st way to overcome callback function
//is to separte callback function
fs.readFile("f1.txt",cb1);
function cb1(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res + "");
        fs.readFile("f2.txt",cb2)
    }
}
function cb2(){
    if(err){
        console.log("error");
    }else{
        console.log(res +"");
        console.log("f3.txt",cb);
    }
}
function cb3(){
    if(err){
        console.log("error");
    }else{
        console.log(res+"");
        console.log("data printed");
    }
}

//q2 read 3 files f1.txt,f2.txt and f3.txt parallely using callback and it works in asynchronously. 

fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb);
fs.readFile("f3.txt",cb);

function cb(err, res){
    if(err){
        console.log("error")
    }else{
        console.log(res +"");
    }

}

//2nd way 
