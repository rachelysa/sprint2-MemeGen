
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
    if (gMeme.lines.length === 1) return
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
    gMeme.feachures.push(emoji)
}
function changeFontFamily(font){
    gMeme.lines[gMeme.selectedLineIdx].font=font;
}