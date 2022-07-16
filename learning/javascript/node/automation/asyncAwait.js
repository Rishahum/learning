// promises
function fp(){
    return new Promise (function(resolve, reject){
    resolve("hello");
    });     
}
let promisifyfunc= fp();
promisifyfunc.then(function(data){
    console.log(data);
});
promisifyfunc.catch(function(err){
    console.log("error");
})

// using async keyword
async function f(){
    return "hello";
}
let asyncf=f();
asyncf.then(function(data){
    console.log(data);
});
asyncf.catch(function(err){
    console.log("error");
});
//using alert keyword
async function r(){
    return "hyy";
}
let asyncf2=r();
asyncf2.then(function(data){
    console.log(data);
})
asyncf2.then(alert); //aleret will not run in vscode


// keyword await makes JavaScript wait until that promise settles and returns its result.
//The function execution “pauses” at the line 45 and resumes when the promise settles(we have an answer now whether it is rejected or resolved), with result becoming its result. So the code above shows “done!” in one second.
//await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
  }
  f();
  console.log("yolo");

  async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img'); //createElement is html tag in which a img is inserted
    img.src = githubUser.avatar_url; //avatar.url is a member of object
    img.className = "promise-avatar-example"; //img class name
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();
  
  