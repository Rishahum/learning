
// let addbtn=document.querySelector(".add-btn");
// let modal=document.querySelector(".modal-cont");
// let modalcolor=document.querySelector(".priority-color-cont");
// let colors=modalcolor.classList[0];
// let main=document.querySelector(".main-cont");
// let ismodal=false
// addbtn.addEventListener("click",function(){
//     if(!ismodal){
//         modal.style.display="flex";
//     }else{
//         modal.style.display="none";
//     }
//     ismodal=!ismodal;
// })
// modal.addEventListener("keydown",function(e){
//     let key=e.key;
//     if(key==shift){
//         let ticket=createTicket(colors,id,textArea.value);
        
//     }
// })

// function createTicket(color,data,id){
//     let ticket=document.createAttribute("div");
//     ele.setAttribute("class","ticket-cont");
//     ele.innerHTML=
//         `<div class="${color}ticket-color"></div>
//         <div class="ticket-id">${id}</div>
//         <div class="task-area">${data}</div>
//          <div class="ticket-lock id="id">
//   <i class="fa-solid fa-lock"></i>
//     </div>-->`
//     ;
// }
// main.appendChild(ticket);
//const { stringify } = require("uuid");

var uid = new ShortUniqueId();
let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let mainCont=document.querySelector(".main-cont");
const allPriorityColors=document.querySelectorAll(".priority-color");
let colors=["lightpink", "lightgreen", "lightblue", "black" ];
let modalPriorityColor = colors[colors.length - 1];
let textAreaCont=document.querySelector(".textarea-cont");
let ticketsArr=[];
let toolBoxColors = document.querySelectorAll(".color");
let removebtn=document.querySelector(".remove-btn");
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

//let addLock="fa-lock-open";



let ismodal=false;
addbtn.addEventListener("click",function(){
    if(ismodal==false){  //!ismodal ka mtlb if condition m h ki ismodal ki value false hai
        modal.style.display="flex"; //aab add ho gya modal
        //ismodal=true
    }else{
        modal.style.display="none";
        //ismodal=false
    }
    ismodal=!ismodal; //toggling effect
})

allPriorityColors.forEach(function(colorElement){
    colorElement.addEventListener("click",function(e){

        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
          //jis p click hua h ussi ki to class milegi
          modalPriorityColor = colorElement.classList[0];

    });
});
modal.addEventListener("keydown",function(e){
    let key = e.key;
    if (key == "Shift") {
      //console.log(modalPriorityColor);
     // console.log(textAreaCont.value);
      createTicket(modalPriorityColor, textAreaCont.value);
      modal.style.display = "none";
      isModalPresent = false;
      textAreaCont.value="";
      allPriorityColors.forEach(function (colorElem) {
        colorElem.classList.remove("active");
      });
    }
})
   
function createTicket(ticketColor, data, ticketId) {
    let id = ticketId || uid();
    let ticketCont = document.createElement("div"); //<div></div>
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor} "></div>
        <div class="ticket-id">${id}</div>
        <div class="task-area">${data}</div>
        <div class="ticket-lock id="id">
          <i class="fa-solid fa-lock"></i>
        </div>
    `;
    

    mainCont.appendChild(ticketCont);
    handleRemove(id,ticketCont);
    handleColor(ticketCont,id,ticketColor);
    handleLock(ticketCont,id);
   
    //if ticket is being created for the first time , then ticketId would be undefined
    if (!ticketId) {
        ticketsArr.push(
            {
                ticketColor,
                data,
                ticketId: id
            }
        );
        localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    }
};

//get all tickets from local Storage
if (localStorage.getItem("tickets")) {
    ticketsArr = JSON.parse(localStorage.getItem("tickets"));
    ticketsArr.forEach(function(ticketObj){
        createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);
    })
}
//filter tickets on the basis of ticketColor
for (let i = 0; i < toolBoxColors.length; i++){
    toolBoxColors[i].addEventListener("click", function () {
        let currToolBoxColor = toolBoxColors[i].classList[0];

        let filteredTickets = ticketsArr.filter(function (ticketObj) {
            if (currToolBoxColor == ticketObj.ticketColor) return ticketObj;
            // return currToolBoxColor == ticketObj.ticketColor;
        });
       

        //remove all the tickets
        let allTickets = document.querySelectorAll(".ticket-cont");
        for (let i = 0; i < allTickets.length; i++){
            allTickets[i].remove();
        }

        //display filteredTickets
        filteredTickets.forEach(function (ticketObj) {
            createTicket(
              ticketObj.ticketColor,
              ticketObj.data,
              ticketObj.ticketId
            );
        })
    })

    //to display all the tickets of all colors on double clicking
    toolBoxColors[i].addEventListener("dblclick", function () {
      
        //remove all the color specific tickets
        let allTickets = document.querySelectorAll(".ticket-cont");
      for (let i = 0; i < allTickets.length; i++) {
        allTickets[i].remove();
      }

      //display all Tickets
      ticketsArr.forEach(function (ticketObj) {
        createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);
      });
    })
}
let iscolor=false;
removebtn.addEventListener("click",function(){
    if(!iscolor){
        removebtn.style.color="red";
    }else{
        removebtn.style.color="white";
    }
    iscolor=!iscolor;
})
function handleRemove(id,ticket){
    ticket.addEventListener("click",function(){
        if(iscolor==true){
            let idx=getTicketIdx(id);
            ticketsArr.slice(idx,1);

            localStorage.setItem("tickets",JSON.stringify(ticketsArr));
            ticket.remove();
        }
       
    });
}
function getTicketIdx(id){
    let ticketid=ticketsArr.findIndex(function(ticketObj){
        return ticketObj.ticketId==id;
    })
}

function handleColor(ticket,id,ticketColor){
    let ticketcolorStrip=ticket.querySelector(".ticket-color");
    ticketcolorStrip.addEventListener("click",function(){
        let currentColorStrip=ticketcolorStrip.classList[1];

       /* function getTicketColor(currentColorStrip){
            let tc=ticketsArr.findIndex(function(ticketObj){
              return   ticketObj.ticketColor==currentColorStrip; we can't use this because ticketColor ${ticketcolor} class hai na ki sirf ticketColor
            })
        }*/
        let idx=colors.indexOf(currentColorStrip);
        let IDX=idx+1;
        IDX=IDX%colors.length;
        let newTicketColor=colors[IDX];
        ticketcolorStrip.classList.remove(currentColorStrip);
        ticketcolorStrip.classList.add(newTicketColor);

        let ticketIdx = getTicketIdx(id);
        ticketsArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem("tickets", JSON.stringify(ticketsArr));
   })
}



function handleLock(ticket,id){
    let isLockOpen=false;
   

    if(!isLockOpen){
       
        let ticketLock=ticket.querySelector(".ticket-lock");
   
    
    ticketLock.addEventListener("click",function(e){
        let ticketArea=ticket.querySelector(".task-area");
        ticketLock.remove(lockClass);
        ticketLock.append(unlockClass);
     
        ticketArea.setAttribute("contenteditable","true");
        
       // e.classList.add(ti)
        let ticketIdx = getTicketIdx(id);
       ticketsArr[ticketIdx].data = ticketArea.innerText;
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    })
}
else{
    
}
isLockOpen=!isLockOpen;

}

/*function handleLock(ticket, id) {
    //icons ko append in ticket
    
    let ticketLockEle = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockEle.children[0];
    let ticketTaskArea = ticket.querySelector(".task-area");
    // console.log(ticketLock);
  
    
    //toggle of icons and contenteditable property
    ticketLock.addEventListener("click", function () {
      let ticketIdx = getTicketIdx(id);
      if (ticketLock.classList.contains(lockClass)) {
        ticketLock.classList.remove(lockClass);
        ticketLock.classList.add(unlockClass);
        ticketTaskArea.setAttribute("contenteditable", "true");
      }
      else { //if lock is open
        ticketLock.classList.remove(unlockClass);
        ticketLock.classList.add(lockClass);
        ticketTaskArea.setAttribute("contenteditable", "false");
      }
  
      ticketsArr[ticketIdx].data = ticketTaskArea.innerText;
      localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    });
  }*/


