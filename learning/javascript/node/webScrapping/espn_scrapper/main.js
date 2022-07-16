let url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

//ds-text-tight-m ds-font-bold
//a[class="ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]
const j =require("./allMatches");
const request = require("request");

const cheerio = require("cheerio");
request(url, cb);
function cb(err,res,body){
    if(err){
        console.log("error",err);
    }else{
        handleHtml(body);
    }
}
function handleHtml(html){
    let selecTool=cheerio.load(html);
   
    let achorElem = selecTool(`a[class="ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]`
    );
    //console.log(achorElem);
    
    let relativeLink = achorElem.attr("href");
    //console.log(relativeLink);
    let fullLink="https://www.espncricinfo.com" + relativeLink;
     console.log(fullLink);
      j.getAllMatch(fullLink);
      //console.log(j);
}
// data-slug="/matches/results/men/2022">Results
