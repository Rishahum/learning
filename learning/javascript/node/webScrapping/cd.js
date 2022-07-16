const  cheerio  = require("cheerio");
//const  html  = require("cheerio/lib/api/manipulation");
const request = require("request");
//const  Cheerio  = require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);
//const  Cheerio  = require("cheerio");


function cb(err, res, body){
    if(err){
        console.log("error",err);
    }
    else{
        handleHtml(body);
        ris(body);    
    }
}
function handleHtml(html){
    let selecTool=cheerio.load(html);

    let coronaStartsArr=selecTool(".maincounter-number");
    

    let totalcases=selecTool(coronaStartsArr[0]).text();
    console.log("total cases->" +totalcases);

    let totaldeadth=selecTool(coronaStartsArr[1]).text();
    console.log("total deadth->" +totaldeadth);

    let totalrecovered = selecTool(coronaStartsArr[2]).text();
    console.log("total recovered->" +totalrecovered);
}
function ris(htm){
    let main=cheerio.load(htm);
    let text=main("#maincounter-wrap");
    let totalcases=main(text[0]).text();
    console.log( totalcases);
    //console.log(text);
}

