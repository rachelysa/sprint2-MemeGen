const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
function resizeCanvas(height, width) {

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

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    renderPage();
    drawImg(gImg.url)
}
function drawText() {
    gCtx.lineWidth = 1;
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

var gLineToDrop;
function handleMouseDown(e) {
    e.preventDefault();
    startX = parseInt(e.offsetX);
    startY = parseInt(e.offsetY);

    // Put your mousedown stuff here
    gMeme.lines.forEach(line => {

        if (textHittest(startX, startY, line)) {
            gLineToDrop = line;
            return;
        }
    })
    gMeme.feachures.forEach(f => {

        if (textHittest(startX, startY, f)) {
            gLineToDrop = f;
            return;
        }
    })

}

// test if x,y is inside the bounding box of texts[textIndex]
function textHittest(x, y, line) {

    return (x >= line.pos.x - gCtx.measureText(line.txt).width &&
        x <= line.pos.x + gCtx.measureText(line.txt).width &&
        y <= line.pos.y && y > line.pos.y - line.size);
}
function handleMouseMove(e) {
    if (!gLineToDrop) { return; }
    e.preventDefault();
    mouseX = parseInt(e.offsetX);
    mouseY = parseInt(e.offsetY);

    // Put your mousemove stuff here
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;


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