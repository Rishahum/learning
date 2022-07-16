const os=require("os");
//console.log(os);
let myCPUInfo=os.cpus();
console.log(myCPUInfo);
//Returns an array of objects containing information about each logical CPU core.
//The properties included on each object include:

let hostname = os.hostname();
console.log(hostname);
//returns the host name of the operating system as a string.


