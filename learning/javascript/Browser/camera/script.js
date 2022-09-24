// The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

// A Navigator object can be retrieved using the read-only window.navigator property.
// basically it is used for securitty purpose , we should know who is accessing our camera


// Navigator.mediaDevices 
// Returns a reference to a MediaDevices object which can then be used to get information 
// about available media devices (MediaDevices.enumerateDevices()), find out what constrainable
//  properties are supported for media on the user's computer and user agent (MediaDevices.getSupportedConstraints()), 
//  and to request access to media using MediaDevices.getUserMedia().


var uid = new ShortUniqueId();
let gallery1 = document.querySelector(".gallery");
gallery1.addEventListener("click", () => {
    location.assign("./gallery.html");
});
let video=document.querySelector("video");
let capturbtn=document.querySelector(".capture-btn");
let capturebtncont=document.querySelector(".capture-btn-cont");
let recordbtn=document.querySelector(".record-btn")
let gallery=document.querySelector(".material-icons");
let timer=document.querySelector(".timer");
let filterLayer = document.querySelector(".filter-layer");
let allFilters = document.querySelectorAll(".filter");
let chunks=[];
let timerId;
let videoon=false;
//let screenshare;
let transparentColor = "transparent";
constraints={
    video:true,
    audio:false,
}
navigator.mediaDevices.getUserMedia(constraints)
.then((stream)=>{
    video.srcObject=stream;
    //srcObject=hmme video ki informmation object ki form m mili h abb uss information ko hmme src link m convert krna hoga
    //stream m abb link store h 
    recorder=new MediaRecorder(stream);
    recorder.addEventListener("start",(e)=>{
        chunks=[];
        console.log("rec started");
    })   
    recorder.addEventListener("dataavilable",(e)=>{
        chunks.push(e.data);
        console.log("rec pushed into chunks");
        
    })
    recorder.addEventListener("stop",()=>{
        //stop video
        let blob=new Blob(chunks,{type:"video/mp4"});
        console.log("recording stopped");
        //download video on dekstop 
        //let videoURL=URL.createObjectURL(blob);
        //console.log(videoURL);
        if(db){
            let videoId=uid();
            let dbTransaction=db.transaction("video","readwrite");
            let videoStore=dbTransaction.objectStore("video");
            let videoEntry={
                id:`vid-${videoId}`,
                blobData:blob,
            };
            let videodetail=videoStore.add(videoEntry);
            
            videodetail.onsuccess=()=>{
                console.log("video added successfully");
            };
        }
        // let a=document.createElement("a");
        // a.href=videoURL;
        // a.download="video/mp4";
        // a.click();
    });
});
capturebtncont.addEventListener("click",()=>{
    capturbtn.classList.add("scale-capture");
    let canvas=document.createElement("canvas");
    let tool=canvas.getContext("2d");
    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;
    tool.drawImage(video,0,0,canvas.width,canvas.height);
    //drawImage(image, dx, dy, dWidth, dHeight)-> neccesary arguments

    //applying filters on photo
    tool.fillStyle=transparentColor;
    tool.fillRect(0,0,canvas.width,canvas.height);
    let imageURL=canvas.toDataURL('image/jpeg',1.0);
    
    // let image=document.createElement("img");
    // image.src=imageURL;
    // //image.filter='blur(4px)';
    // document.body.append(image);
    // we don't want to store the image now in index.html we want to store the image in gallery
    if(db){
        let imageId=uid();
        let dbTransaction=db.transaction("image","readwrite");
        let imageStore=dbTransaction.objectStore("image");
        let imageEntry={
            id:`img-${imageId}`,
            url: imageURL,
        };
        let addRequest=imageStore.add(imageEntry);
        addRequest.onsuccess=()=>{
            console.log("image added to db successfully");
        }
    }
    setTimeout(function(){
        capturbtn.classList.remove("scale-capture")
    },1000)  
    
})

recordbtn.addEventListener("click",()=>{
     videoon=!videoon
    if(videoon){
        recorder.start();
        recordbtn.classList.add("scale-record");
        //video start
        //timer stop
        startTimer();

    }else{
        recorder.stop();
        recordbtn.classList.remove("scale-record");
        //video stop
        //timer stop
        stopTimer();
    }
})
let count=0;
function startTimer(){
    // block=flex
    timer.style.display='block';
    function displayTimer(){
        let totalseconds=count;

        let hours=Number.parseInt(totalseconds/3600);
        totalseconds=totalseconds%3600;

        let minutes=Number.parseInt(totalseconds/60);
        totalseconds=totalseconds%60;

        let seconds=totalseconds;

        hours=hours<10?`0 ${hours}`: hours;
        minutes=minutes<10? `0${minutes}` : minutes;
        seconds=seconds<10?`0${seconds}` : seconds;
        timer.innerText=`${hours} : ${minutes} : ${seconds}`;
        count++;
    }
    timerId=setInterval(displayTimer,1000);
    //1sec=1000milisecond

}
function stopTimer(){
    clearInterval(timerId);
    timer.innerText=`00:00:00`;
    timer.style.display='none';
}
// allFilters.forEach((filterElem) => {
//     filterElem.addEventListener("click", () => {
//       transparentColor =
//         getComputedStyle(filterElem).getPropertyValue("background-color");
//       filterLayer.style.backgroundColor = transparentColor;
//     });
//   });
  allFilters.forEach((filterElem) => {
    filterElem.addEventListener("click", (e) => {
      let color=filterElem.classList[1];
      filterLayer.setAttribute("class",`filter-layer ${color}`);
    });
  });

