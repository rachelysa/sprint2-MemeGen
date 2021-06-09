
var gMeme;
var gSwitch = 1;
function createMeme(imgIdx) {
    var meme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        lines: [{ txt: '', size: 40, align: 'center', color: 'white', stroke: 'black' }]
    }
    gMeme = meme;
}
function getMeme() {
    return gMeme;
}
function addLine() {
    var line = { txt: '', size:40, align: 'center', color: 'white', stroke: 'black' };
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