const fs=require("fs");
let input=process.argv.slice(2);
console.log(input);



                             //******* push input into inputarr and optionArr******//
let inputArr=[];
let optionArr=[];
for(let i=0;i<input.length;i++){
    let firstChar=input[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(input[i]);

    }else{
    
    inputArr.push(input[i]);
}
}
console.log("files to be read are " + inputArr);
console.log("files with hyphn are" + optionArr);

                                //******check if all files are present******* // 
for(let i=0;i<inputArr.length;i++){
    let doesexist = fs.existsSync(inputArr[i]);//fs.existsSync -> Returns true if the path exists, false otherwise.
    if(!doesexist){
        console.log("file does not exist");
        break;
        //process.exit();
    }
}

                               //********read whole file************//
let content="";
for(let i=0;i<inputArr.length;i++){
    let fileContent = fs.readFileSync(inputArr[i],"utf-8");
    content = content + fileContent +" ";
}
console.log(content);

                             //*********append file*************//

let contentArr=[];
contentArr=content.split("\n");
console.table(contentArr);

/*let optionArr=[];
let FileReader=[];
for(let i=0;i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar== '-'){
        optionArr.push(inputArr[i]);
    }else{
        FileReader.push(inputArr[i]);
    }
}*/
                                   //************* -s ka kaam*********//
let isPresent = optionArr.includes("-s");
if(isPresent){
    for(let i=2;i<contentArr.length;i++){
        if(contentArr[i]=="\r" && contentArr[i-1]=="\r"){
            contentArr[i]=null;
        }
    }
}

console.table(contentArr);
let tempArr=[];
for(let i=0;i<contentArr.length;i++){  
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);
    }
    
} 
console.table("data after removing extra lines\r");
console.table(tempArr);

                                    //****************ab -n aur -b ka kaam*************//
let indexofN=optionArr.indexOf("-n");
let indexofB=optionArr.indexOf("-b");
let final;
if(indexofN!=-1 && indexofB!=-1){
  if(indexofN>indexofB){
     final=indexofB;
   }   else{
    let final=indexofI;
   } 
} else{
    if(indexofN!=-1){
        final="-n";
    }
    else if(indexofB!=-1){
        final="-b";
    }
}
function modifycontentByN(){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=((i+1) + contentArr[i]);
    }
}
let count=1;
function modifycontentByB(){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr!="\r"){
            contentArr[i]=(count + contentArr[i]);
            count++;
        }
    }
}
if(final == "-n"){
    modifycontentByN();
} else if(final == "-b"){
    modifycontentByB();
}

console.log(contentArr);
