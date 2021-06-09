
var gEmojies = ['🤢', '🤪', '😪', '🤮', '🤠', '🤡', '💩', '💀', '👽', '👾', '🤖','👿'];
var gCanvas;
var gCtx;
var gCurrMeme;
var gImg ;
function init() {

    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d');
   
    renderFeachures(); 
    gImg = {id: 1, url: 'img/3.jpg', keywords: ['happy']};

    createMeme(gImg.id);
    gCurrMeme=getMeme();

    renderPage();
    //TODO resize by the curr picture
    // resizeCanvas(250,450);
    drawImg(gImg.url);
}
function renderFeachures() {
    var strHtml = '';
    gEmojies.forEach(emoji => {
        strHtml += `<div class="emoji-feachure" onclick="onAddFeachure('${emoji}')">${emoji}</div>`
    })
    var elFeachure=document.querySelector('.feachure');
    elFeachure.innerHTML=strHtml

}
function toggleMenu() {
    var elBtn = document.querySelector('.card-menu-btn');
    var elClose = document.querySelector('.close-menu-btn');
    document.body.classList.toggle('menu-open');
    elBtn.classList.toggle('hide');
    elClose.classList.toggle('hide');
}
function changeText(text){
    gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt=text
    clearCanvas();
   
}

function renderPage(){
    var elTextCount=document.querySelectorAll('.text-count span');
    elTextCount[0].innerText=gCurrMeme.selectedLineIdx+1;
    elTextCount[1].innerText=gCurrMeme.lines.length;
    var elCurrText=document.querySelector('.input-text');
    elCurrText.value= gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt;
   
}
function onAddLine(){ 
    addLine(); 
    clearCanvas();
}
function onChangeLine(){
    changeCurrLine();
    clearCanvas();

}
function onDeleteLine(){
    deleteLine();
    clearCanvas();
}
function onChangeAlign(direction){
    changeAlign(direction);
    clearCanvas();
}
function onChangFontSize(idx){
    changFontSize(idx);
    clearCanvas();
}
function onChangeFontColor(color){
    changeFontColor(color)
    clearCanvas();
}
function onChangeStrokColor(color){
    changeStrokColor(color);
    clearCanvas();
}
function onAddFeachure(emoji){
    addFeachure(emoji);
    clearCanvas();

}
function onChangeFontFamily(font){
    changeFontFamily(font);
    clearCanvas();
}