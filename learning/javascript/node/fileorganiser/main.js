// every point of my commmand line
let helpfunc=require("./commands/help");
console.log(helpfunc.help());
let inputArr=process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch(command){
    case "tree":
        //call tree function
        console.log("tree function called and executed successfully " +path);
        break;

    case "organise":
        //call organise function
        console.log("organise function executed successfully" +path);
        break;
    
    case "help" :
        //call help function
        helpfunc.help();
        //console.log("help function called and executed successfully");
        break;
    
    default:
        //default
        console.log("command not required");
}
