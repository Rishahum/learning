const puppeteer=require("puppeteer");
let email="rishasinha07@gmail.com";
let password="JAVASCRIPT@auto";
let browserOpenPromise=puppeteer.launch({
    headless: false, //false hai to cromium khul rha hai agr true kr denge to nhi khulga
    defaultViewport : null,
    args:["----start-maximised"]
});
let {answers}=require("./codes");
let cTab;
browserOpenPromise
.then(function(browser){
    console.log("browser is open");
   // An array of all open pages inside the Browser.
    let allTabsPromise=browser.pages();
    return allTabsPromise;
})
.then(function(allTabsArr){
     cTab=allTabsArr[0];
    console.log("new tab");
    //A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.
    let visitLoginPagePromise=cTab.goto("https://www.hackerrank.com/auth/login");   
    return visitLoginPagePromise;
})
.then(function(){
    console.log("opened hackerrank login page");
    let emailwillbeTypedPromise=cTab.type("#input-1", email);
    return emailwillbeTypedPromise;
})
.then(function(){
    console.log("email is typed");
    let passwordwillbeTypedPromise=cTab.type("#input-2",password);
    return passwordwillbeTypedPromise;
})
.then(function(){
    console.log("password has been typed");
    let WillBeLoggedInPromise=cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return WillBeLoggedInPromise;
})
.then(function(){
    console.log("logged into hackerrank successfully");
    let algorithmTabWillBeOpened=waitAndClick(`.topic-card a[class="topic-link"]`);
    return algorithmTabWillBeOpened;
})
.then(function(){
    console.log("algorithm  page is opened");
    let allQuesPromise=cTab.waitForSelector(`a[class="js-track-click challenge-list-item"]`);
      return allQuesPromise;
})
.then(function(){
    function getAllQuesLink(){
        let allEleArr=document.querySelectorAll(`a[class="js-track-click challenge-list-item"]`);
        let linkArr=[];
        for(let i=0;i<allEleArr.length;i++){
            linkArr.push(allEleArr[i].getAttribute("href"));
        }
        return linkArr;
    }
     let linkArrPromise=cTab.evaluate(getAllQuesLink);
     return linkArrPromise;
     /*.evaluate()
     puppeter jo hai vo cheeje select krta hai lekin hmme yaha bhot saare selector k aandr jakar link laana hai vo 
     vo kaam puppeter nhi kar skta isleye hmm yaha .evaluate(inbuilt function of puppeter) use krte hai
     jis particular tab ya page p hmm chahte ye function chle vo waha chla k le k aayega */
})
.then(function(linkArr){
    console.log("link aa gya");
    //console.log(linkArr);
    let quesWillBeSolved=quesSolver(linkArr[0],0);
   return quesWillBeSolved;

})
.then(function(){
    console.log("question opens");
})
.catch(function(err){
    console.log("error");
});
function waitAndClick(algoBtn){
    let myPromise=new Promise(function(resolve,reject){
        let waitForSelectorPromise=cTab.waitForSelector(algoBtn); //waitForSelector is a function
        waitForSelectorPromise
        .then(function(){
            let clickPromise=cTab.click(algoBtn);
            return clickPromise;
        })
        .then(function(){
            console.log("algo button is clicked");
            
        })
        
        .catch(function(err){
            console.log("error");
        })
    });
    return myPromise;
}
function quesSolver(url, idx){
    return new Promise(function(resolve,reject){
        let fullink=`https://www.hackerrank.com${url}` 
        let gotoQuesPagePromise=cTab.goto(fullink);
        
        gotoQuesPagePromise.then(function(){
            console.log("question opened");
            //tick the custum input box
          // let waitForCheckboxClick=waitAndClick(".checkbox-input");
          // return waitForCheckboxClick
            //resolve();
        })
        .then(function(){
            //type in text area of custom
            let waitForTextboxPromise=cTab.waitForSelector(".checkbox-wrap");
            return waitForTextboxPromise;
        })
        .then(function(){
            let codeWillBeTypesPromise=cTab.type(".custominput",answers[idx]);
            return codeWillBeTypesPromise;
        })
        .then(function(){
            //control is pressed promise
            console.log("control");
            let controlPressedPromise=cTab.keyboard.press("Control");
            return controlPressedPromise;
        })
        .then(function(){
            //key a is pressed
            let aKeyPressedPromise=cTab.keyboard.press("a");
            return aKeyPressedPromise;
        })
        .then(function(){
            //
            let xKeyPressedPromise=cTab.keyboard.press("x");
            return xKeyPressedPromise;
        })
        .then(function(){
            let cursorOnEditorPromise=cTab.click(".monaco-editor.no-user-select.vs");
            return cursorOnEditorPromise;
        })
        .then(function(){
            let vKeyPressedPromise=cTab.keyboard.press("v");
            return vKeyPressedPromise;
        })
        .then(function(){
            let clicksubmit=cTab.click(".ui-btn ui-btn-normal.ui-btn-primary.pull-right");
            return clicksubmit;
            
        })
        .then(function(){
            let controlup=cTab.keyboard.up("Control");
            return controlup;
        })
        .then(function(){
            console.log("code is submitted")
            resolve();
        })
        .catch(function(){
            reject("error");
        })
    });
    
}
//www.hackerrank.com/challenges/compare-the-triplets?isFullScreen=true