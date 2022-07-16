const fs=require("fs"); //fs module
const path=require("path"); //path module
let types={
    media: ["mp4", "mkv", "mp3"],
    archives: [`zip`, `7z`, `rar`, `tar`, `gz`, `ar`, `iso`, `xz`],
    documents: [`docx`,`doc`,`pdf`,`xlsx`, `xls`, `odt`, `ods`, `odg`,`odp`,`odf`, `txt`, `ps`,`tex`],
    app: [`exe`,`dmg`,`pkg`,`deb`],
    images: [`png`,`jpg`,`jpeg`]
}
let srcPath;
function organize(srcPath){
    if(srcPath == undefined){
        srcPath=process.cwd(); //The process.cwd() method returns the current working directory of the Node.js process.
        //console.log(srcpath);
    }else{
        //console.log(srcpath);
    }
}
let organizedFiles = path.join(srcPath, "organized_files")
//console.log("organized files folder is" organizedFiles);
if(fs.existsSync(organizedFiles)== false){
    //organized naam ka folder exist nhi karta to ek folder bana do warna rhne do
    fs.mkdirSync(organizedFiles);
}
else{
    console.log("folder already exist");
}
organize();

