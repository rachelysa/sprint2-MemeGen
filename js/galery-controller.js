'use strict'

function initGalery() {
    createImgs();
    renderGalery();
}
function renderGalery() {
    var strHtml = '';
    var imgs = getImgs();
    imgs.forEach(img => {
        strHtml += `<div data-id="${img.id}"class="img-container" onclick="openMeme(this)"><img src="${img.url}" alt="" srcset="" class="galery-img" ></div>`
    })
    var elGalery=document.querySelector('.galery-container');
    elGalery.innerHTML=strHtml;
}
function openMeme(el){
    var id=el.dataset.id;
    console.log(el);
    var elGalery=document.querySelector('.galery-container');
    elGalery.style.opacity=0;
    elGalery.style.pointerEvents='none';
    initMeme(parseInt(id))
}