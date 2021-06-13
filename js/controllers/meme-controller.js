'use strict'
var gEmojies = ['🤢', '🤪', '😪', '🤮', '🤠', '🤡', '💩', '💀', '👽', '👾', '🤖', '👿'];
var gCanvas;
var gCtx;
var gCurrMeme;
var gCurrImg;
var posY;

function initMeme(idX, width, height, src) {

    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d');
    posY = 50;
    // if (width === 0) width = 250;
    // if (height === 0) height = 250
    gCurrImg = (idX) ? getImgById(parseInt(idX)) : { id: 0, url: src, keywords: [] };

    var elCanvas = document.querySelector('.main-meme');
    elCanvas.classList.toggle('show')
    createMeme(gCurrImg.id);
    gCurrMeme = getMeme();

    resizeCanvas(height, width);
    renderPage();

    drawImg(gCurrImg.url);
    renderFeachures();
    addListeners();
    // window.addEventListener('resize',resizeCanvas1);

}

function renderFeachures() {
    var strHtml = '';
    gEmojies.forEach(emoji => {
        strHtml += `<div class="emoji-feachure" onclick="onAddFeachure('${emoji}')">${emoji}</div>`
    })
    var elFeachure = document.querySelector('.feachure');
    elFeachure.innerHTML = strHtml;


}

function addListeners() {

    gCanvas.addEventListener('mousedown', handleMouseDown)
    gCanvas.addEventListener('mouseup', handleMouseUp)
    gCanvas.addEventListener('touchstart', handleMouseDown)
    gCanvas.addEventListener('touchend', handleMouseUp)
    gCanvas.addEventListener('mousemove', handleMouseMove);
    gCanvas.addEventListener('touchmove', handleMouseMove);
}

function goBackToGallery() {
    var elCanvas = document.querySelector('.main-meme');
    elCanvas.classList.toggle('show');
    var elGalery = document.querySelector('.galery-container');
    elGalery.style.display = 'grid';

    var elSearch = document.querySelector('.search-kind')
    elSearch.style.opacity = 1;
    elSearch.style.pointerEvents = 'unset';
}

function changeText(text) {
    gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt = text
    clearCanvas();

}

function renderPage() {
    var elTextCount = document.querySelectorAll('.text-count span');
    elTextCount[0].innerText = gCurrMeme.selectedLineIdx + 1;
    elTextCount[1].innerText = gCurrMeme.lines.length;
    var elCurrText = document.querySelector('.input-text');
    elCurrText.value = gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt;

}

function onAddLine() {
    addLine();
    clearCanvas();
}

function onChangeLine() {
    changeCurrLine();
    clearCanvas();

}

function onDeleteLine() {
    deleteLine();
    clearCanvas();
}

function onChangeAlign(direction) {
    changeAlign(direction);
    clearCanvas();
}

function onChangFontSize(idx) {
    changFontSize(idx);
    clearCanvas();
}

function onChangeFontColor(color) {
    changeFontColor(color)
    clearCanvas();
}

function onChangeStrokColor(color) {
    changeStrokColor(color);
    clearCanvas();
}

function onAddFeachure(emoji) {
    addFeachure(emoji);
    clearCanvas();

}

function onChangeFontFamily(font) {
    changeFontFamily(font);
    clearCanvas();
}

function onchangePos(pos) {
    changePos(pos);
    clearCanvas();
}

function saveMemeToStorage() {
    const data = gCanvas.toDataURL();
   
    gMemes.push(data)
    saveToStorage('memes', gMemes);

}
async function shareCanvas() {
    const canvasElement = gCanvas;
    const dataUrl = canvasElement.toDataURL();
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [
        new File(
            [blob],
            'animation.png',
            {
                type: blob.type,
                lastModified: new Date().getTime()
            }
        )
    ];
    const shareData = {
        files: filesArray,
    };
    navigator.share(shareData);
}