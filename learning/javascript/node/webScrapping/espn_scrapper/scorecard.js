const request=require("request");
const cheerio = require("cheerio");
//const { find } = require("cheerio/lib/api/traversing");


function infofromscorecard(url){
    request(url,cb);
}
function cb(err,res,body){
    if(err){
        console.log("error");
    }else{
        info(body);
    }
    function info(html){
        let select=cheerio.load(html);
        let info=select(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
        //console.log(info.text());
        let infoexact=info.text().split(",");
        //console.log(infoexact);

        //venue
        let venue = infoexact[1];
        //console.log(venue);

        //date
        let date=infoexact[2] + infoexact[3];
        //console.log(date);

        //result
        let result=select(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title").text();
        //console.log(result);

        //team name
        let teamname=select(".ds-inline-flex.ds-items-center.ds-leading-none .ds-text-tight-l.ds-font-bold");
        console.log(teamname.text());
                                      //another method
        //div[class=""] >div[class=""]
        let teams=select(`div[class=""] >div[class=""]`);

        let team1=select(teams[1]).text(); 
 //yha select isileye use krna pda kyuki array m koi text() naam ka koi tool nhi hai
        //console.log(team1);
        let team2=select(teams[2]).text();
        //console.log(team2);

        let allBatsmenTable=select(`.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table >tbody`);
        console.log(allBatsmenTable.length +"no of tables");
        let htmlString="";
        for(let i=0;i<allBatsmenTable.length;i++){
            htmlString+=select(allBatsmenTable[i]).html();
            //console.log(htmlString);
            let allRows=select(htmlString).find("tr").hasClass(`.ds-border-b.ds-border-line.ds-text-tight-s`);
            //console.log(select(allRows).text());
            for(let i=0;i<allRows.length;i++){
                let name=select(allRows[i]).find("td").hasClass(`ds-min-w-max >span`);
                console.log(select(name).text());
               
            }
            for(let i=0;i<allRows.length;i++){
                let runs=select(allRows[i]).find("td")[0].hasClass(`.ds-min-w-max.ds-text-right`);
                console.log(select(runs).text());


            }      
           
           // let rowsweneed=select(allRows).hasClass(`.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table >tbody >tr[class="ds-border-b ds-border-line ds-text-tight-s"]`);
           // console.log(allRows.length);
           
           

            }
            //name| runs| balls|4's|6's|sr
            let name1=select(`.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table >tbody >tr[class="ds-border-b ds-border-line ds-text-tight-s"] >td[class="ds-min-w-max"] >span`);
            for(let i=0;i<name1.length;i++){
                //console.log(select(name1[i]).text());
                i=i+1;
            }
            let name2=select(`.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table >tbody >tr[class="ds-border-b ds-border-line ds-text-tight-s"] >td[class="ds-min-w-max ds-border-line-primary ci-scorecard-player-notout"]`);
            for(let i=0;i<name2.length;i++){
               // console.log(select(name2[i]).text());
            }
            
            
            
            

           
            
           /*for(let i=0;i<allRows.length;i++){
            let singlerow= select(allRows[i]);
            let firstColmn = singlerow.find("td");
            //console.log(firstColmn.length);
            if(select(firstColmn).hasClass(``)){
                count++;
               // console.log("inside" + count);
            }
           }*/
           

           
           
            /*let columnofrows=select(allRowsinhtml).find("td");
            let columnofrowsintext=select(columnofrows).text();*/
           // console.log(columnofrowsintext);

        


        } 
       
        process.exit();      
    }

module.exports={
    infofromscorecard:infofromscorecard,
};
//ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table  ds-border-b.ds-border-line.ds-text-tight-s