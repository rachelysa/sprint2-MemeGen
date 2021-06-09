
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
        strHtml += `<div class="emoji-feachure">${emoji}</div>`
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
function resizeCanvas(height,width) {

    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = width
    gCanvas.height = height
}
function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    console.log('DATA', data);
    elLink.href = data
    elLink.download = 'puki'
}
function renderPage(){
    var elTextCount=document.querySelectorAll('.text-count span');
    elTextCount[0].innerText=gCurrMeme.selectedLineIdx+1;
    elTextCount[1].innerText=gCurrMeme.lines.length;
    var elCurrText=document.querySelector('.input-text');
    elCurrText.value= gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt;
   
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    renderPage();
    drawImg('img/3.jpg') 
}
function drawText() {
    gCtx.lineWidth = 2

    gCtx.font = gCurrMeme.lines[gCurrMeme.selectedLineIdx].size +'px Arial'
    gCtx.strokeStyle = gCurrMeme.lines[gCurrMeme.selectedLineIdx].stroke;
    gCtx.fillStyle = gCurrMeme.lines[gCurrMeme.selectedLineIdx].color;

    gCtx.textAlign =  gCurrMeme.lines[gCurrMeme.selectedLineIdx].align;
    gCtx.fillText(gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt, gCanvas.width/2, 100)
    gCtx.strokeText(gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt, gCanvas.width/2, 100)
   
}
function changeText(text){
    gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt=text
    clearCanvas();
   
}

function drawImg(src) {
    var img = new Image()
    img.src =src ;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
}

function onAddLine(){
   
    addLine();
   
    renderPage();
    clearCanvas();
}
function onChangeLine(){
    changeCurrLine();
    renderPage();
    clearCanvas();

}
function onDeleteLine(){
    deleteLine();
    renderPage();
    clearCanvas();
}
function onChangeAlign(direction){
    changeAlign(direction);
    renderPage();
    clearCanvas();
}
function onChangFontSize(idx){
    changFontSize(idx);
    renderPage();
    clearCanvas();
}