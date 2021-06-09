
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

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    renderPage();
    drawImg('img/3.jpg') 
}
function drawText() {
    gCtx.lineWidth = 1;
    gCurrMeme.lines.forEach(line=>{
        gCtx.font = line.size +'px '+line.font;
        gCtx.strokeStyle = line.stroke;
        gCtx.fillStyle = line.color;
    
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    })
 gCtx.lineWidth=0
    gCurrMeme.feachures.forEach(f=>{
       
        gCtx.font='40px'
        gCtx.fillText(f, 240, 240)
        gCtx.strokeText(f, 240, 240)
    })
   
}
function drawImg(src) {
    var img = new Image()
    img.src =src ;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
}