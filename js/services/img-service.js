'use strict'
var gImgs = [];
var gKeywords=['happy','men','funny','fation','style','selebs']
function createImgs() {
    for (let i = 0; i < 20; i++) {
        createImg(i)

    }
}

function createImg(idx) {
    var img = {
        id: idx,
        url: `img/${idx}.jpg`,
        keywords: ['happy']
    }
    if(idx<10) img.keywords.push('men'); 
    else if(idx<15)  img.keywords.push('fation');
    else img.keywords.push('style');
    if(idx%2===0)  img.keywords.push('funny');
    else img.keywords.push('selebs');
   
    gImgs.push(img);
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

   var imgs= gImgs.filter(img=>{
     var key=  img.keywords.filter(key=>{
           return key.includes(txt);
       });
       return(key.length)
   })
 return imgs
}