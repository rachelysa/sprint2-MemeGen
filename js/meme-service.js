
var gMeme;
var gSwitch = 1;
var posY=50
function createMeme(imgIdx) {
    var meme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        feachures:[],
        lines: [{ txt: '', size: 40, align: 'center', color: 'white', stroke: 'black', pos:{x:gCanvas.width/2,y:posY},font:'lato-bold' }]
    }
    posY+=50;
    gMeme = meme;
}
function getMeme() {
    return gMeme;
}

function addLine() {
    var line = { txt: '', size:40, align: 'center', color: 'white', stroke: 'black',pos:{x:gCanvas.width/2,y:posY},font:'lato-bold'  };
    posY+=50;
    gMeme.lines.push(line);
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}
function changeCurrLine() {
    if (gMeme.lines.length === 0) return
    if (gMeme.selectedLineIdx + 1 === gMeme.lines.length || gMeme.selectedLineIdx === 0) { gSwitch = gSwitch * -1 };
    gMeme.selectedLineIdx += gSwitch
}
function deleteLine() {
    if (gMeme.lines.length === 1) {
        gMeme.lines[0].txt = '';
        return
    }
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx--;
}
function changeAlign(direction) {

    gMeme.lines[gMeme.selectedLineIdx].align = direction


}
function  changFontSize(idx){
    gMeme.lines[gMeme.selectedLineIdx].size+=idx;
}
function changeFontColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color=color
}
function changeStrokColor(color){
    gMeme.lines[gMeme.selectedLineIdx].stroke=color
}
function addFeachure(emoji){
    gMeme.feachures.push({txt:emoji,pos:{x:240,y:240},size:70});
}
function changeFontFamily(font){
    gMeme.lines[gMeme.selectedLineIdx].font=font;
}
function changePos(pos){
    gMeme.lines[gMeme.selectedLineIdx].pos.y+=pos
}
function checkPos(pos){
   var isPos= gMeme.lines.some(line=>{
      return line.pos===pos;
    });
    if(!isPos){
      isPos=  gMeme.feachures.forEach(f => {
            return f.pos===pos
        });
    }
    return isPos||false;
}