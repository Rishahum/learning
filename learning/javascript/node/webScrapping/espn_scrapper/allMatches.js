const request=require("request");
const cheerio=require("cheerio");
const j=require("./scorecard");

function getAllMatch(url){
    request(url,cb);
}
function cb(err, res, body){
    if(err){
        console.log("error",err);
    }else{
        extractAllMatchLink(body);
    }
}
function extractAllMatchLink(html){
    let selecTool=cheerio.load(html);
    
    //span[class="ds-inline-flex ds-items-center ds-leading-none"] a[class="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"] span[class="ds-text-compact-xs ds-font-medium"]
    let scorecardElemArr=selecTool('.ds-flex.ds-flex-wrap .ds-px-4.ds-py-3>a[class=""]');
    console.log("length==",scorecardElemArr.length);
    var n=1;
    for(let i = 0 ; i<scorecardElemArr.length; i++) {
        
        let scoreLink=selecTool(scorecardElemArr[i]).attr("href");
        let fullLink="https://www.espncricinfo.com" + scoreLink;
        //console.log(n +" " + fullLink);
        n++;  
        j.infofromscorecard(fullLink); 
    }
    
   
}
module.exports={
    getAllMatch:getAllMatch,
};
