'use strict'
var gImgs = [];

var gKeywords=[{txt:'happy',size:30},{txt:'man',size:20},{txt:'funny',size:14},{txt:'fashion',size:32},{txt:'style',size:16},{txt:'celebs',size:25}]
function createImgs() {
    for (let i = 0; i < 20; i++) {
        createImg(i)

    }
}

function createImg(idx) {
    var img = {
        id: idx,
        url: `img/${idx}.jpg`,
        keywords: [gKeywords[0]]
    }
    if(idx<10) img.keywords.push(gKeywords[1]); 
    else if(idx<15)  img.keywords.push(gKeywords[2]);
    else img.keywords.push(gKeywords[3]);
    if(idx%2===0)  img.keywords.push(gKeywords[4]);
    else img.keywords.push(gKeywords[5]);
   
    gImgs.push(img);
}

function getKeywords(){
    return gKeywords;
}

function getImgs(){
    return gImgs;
}

function getImgById(idX){
   return gImgs.find(img=>{
        return img.id===idX
    })
 
}
function search(txt){
    gKeywords.forEach(key=>{
        if(key.txt===txt) key.size++;
        return
    });
   var imgs= gImgs.filter(img=>{
     var key=  img.keywords.filter(key=>{
           return key.txt.includes(txt);
       });
       return(key.length)
   })
 
 return imgs
}
function loadImageFromInput(ev) {
   
    var reader = new FileReader()

    reader.onload = function (event) {

        var img = new Image();
         img.src = event.target.result
        img.onload =()=> {
           
            openMeme(img,this.width,this.height);
        }
    
    }
    reader.readAsDataURL(ev.target.files[0])
}