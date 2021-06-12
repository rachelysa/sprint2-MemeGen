'use strict'
const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];
var gLineToDrop;
var gStartPos;

function resizeCanvas(height, width) {

    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = width
    gCanvas.height = height
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()

    elLink.href = data
    elLink.download = 'meme'
}

function clearCanvas() {
 
    renderPage();
    drawImg(gCurrImg.url)
    doTrans();
}

function drawText() {
    gCtx.lineWidth = 2;
    gCurrMeme.lines.forEach(line => {
        gCtx.font = line.size + 'px ' + line.font;
        gCtx.strokeStyle = line.stroke;
        gCtx.fillStyle = line.color;

        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    })
    gCtx.lineWidth = 0
    gCurrMeme.feachures.forEach(f => {

        gCtx.font = f.size+'px'
        gCtx.fillText(f.txt, f.pos.x, f.pos.y)

    })

}

function drawImg(src) {
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText();
        var line = gMeme.lines[gMeme.selectedLineIdx];
        drawRect(15, line.pos.y - 40, gCanvas.width - 30, line.size + 20)
    }
}

function drawRect(x, y, sizeX, sizeY) {
    gCtx.beginPath()
    gCtx.rect(x, y, sizeX, sizeY);

    gCtx.fillStyle = 'orange'

    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

function handleMouseDown(e) {
    e.preventDefault();
    gStartPos={x:parseInt(e.offsetX),y:parseInt(e.offsetY)}


    // Put your mousedown stuff here
    gMeme.lines.forEach(line => {

        if (textHittest(gStartPos.x, gStartPos.y, line)) {
            gLineToDrop = line;
            return;
        }
    })
    gMeme.feachures.forEach(f => {

        if (textHittest(gStartPos.x, gStartPos.y, f)) {
            gLineToDrop = f;
            return;
        }
    })

}

function textHittest(x, y, line) {

    return (x >= line.pos.x - gCtx.measureText(line.txt).width &&
        x <= line.pos.x + gCtx.measureText(line.txt).width &&
        y <= line.pos.y && y > line.pos.y - line.size);
}

function handleMouseMove(e) {
    if (!gLineToDrop) { return; }
    e.preventDefault();
    var mouseX = parseInt(e.offsetX);
    var mouseY = parseInt(e.offsetY);

    // Put your mousemove stuff here
    var dx = mouseX - gStartPos.x;
    var dy = mouseY - gStartPos.y;
    gStartPos.x = mouseX;
    gStartPos.y = mouseY;


    gLineToDrop.pos.x += dx;
    gLineToDrop.pos.y += dy;
    clearCanvas();
}

function handleMouseUp(e) {
    e.preventDefault();
    gLineToDrop = null;
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}