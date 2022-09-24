  let db;
let openRequest=indexedDB.open('myDatabase');
openRequest.addEventListener('success',()=>{
    console.log("db connected");
    db=openRequest.result;
})//success :- Appends an event listener for events whose type attribute value is type. 
//The callback argument sets the callback that will be invoked when the event is dispatched.
openRequest.addEventListener('upgradeneeded',()=>{
    console.log("db upgraded or initialized DB");
    db=openRequest.result;
    db.createObjectStore('video',{keypath:"id"});
    db.createObjectStore('image',{keyPath:"id"});
})

openRequest.addEventListener("error",()=>{
    console.log("db error");
})

