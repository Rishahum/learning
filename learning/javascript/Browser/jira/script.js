var uid = new ShortUniqueId();
let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let mainCont=document.querySelector(".main-cont");
const allPriorityColors=document.querySelectorAll(".priority-color");
let colors=["lightpink", "lightgreen", "lightblue", "black" ];
let modalPriorityColor = colors[colors.length - 1];
let textAreaCont=document.querySelector(".textarea-cont");
let ticketsArr=[];
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
      console.log(modalPriorityColor);
      console.log(textAreaCont.value);
      createTicket(modalPriorityColor, textAreaCont.value);
      modal.style.display = "none";
      isModalPresent = false;
      textAreaCont.value="";
      

    }
    function createTicket(ticketColor,data,ticketId){
        let id=ticketId || uid();
        let ticketCont=document.createElement("div");
        ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor} "></div>
        <div class="ticket-id"></div>
        <div class="task-area">${data}</div>
        
    `;

    mainCont.appendChild(ticketCont);
        

    }
   
})
if(!ticketId){
    ticketsArr.push({ticketColor,data,ticketId:id});
    localStorage.setItem("tickets",JSON.stringify(ticketsArr));
    
}
if(localStorage.getItem("tickets")){
ticketsArr.forEach(function(ticketObj){
    createTicket(ticketObj.ticketColor,ticketObj.data,ticketObj.ticketId);
})
}
