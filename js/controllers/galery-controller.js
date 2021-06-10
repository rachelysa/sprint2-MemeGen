'use strict'

function initGalery() {
    createImgs();
    renderGalery();
}
function renderGalery(imgs = getImgs()) {
    var strHtml = '';

    imgs.forEach(img => {
        strHtml += `<div data-id="${img.id}"class="img-container" onclick="openMeme(this)"><img src="${img.url}" alt="" srcset="" class="galery-img" ></div>`
    })
    var elGalery = document.querySelector('.galery-container');
    elGalery.innerHTML = strHtml;
}
function openMeme(el) {
    var id = el.dataset.id;
    console.log(el);
    var elImg = el.querySelector('img')
    var elGalery = document.querySelector('.galery-container');
    elGalery.style.opacity = 0;
    elGalery.style.pointerEvents = 'none';
    var elSearch = document.querySelector('.search-text')
    elSearch.style.opacity = 0;
    elSearch.style.pointerEvents = 'none';
    initMeme(parseInt(id), el.offsetWidth, el.offsetHeight)
}
function onSearch(txt) {
    var imgs = search(txt);
    renderGalery(imgs);
}