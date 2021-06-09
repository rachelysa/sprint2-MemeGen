var gImgs = [];

function createImgs() {
    for (let i = 0; i < 26; i++) {
        createImg(i)

    }
}
function createImg(idx) {
    var img = {
        id: idx,
        url: `img/${idx}.jpg`,
        keywords: ['happy']
    }
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