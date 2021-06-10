'use strict'
var gMemes;
function initGalery() {
    createImgs();
    renderGalery();
    renderSearch();
    doTrans()
    gMemes = loadFromStorage('memes');
    if (!gMemes) gMemes = [];


}
function initMemes() {
    var strHtml=''
    gMemes = loadFromStorage('memes');
    if (!gMemes) return
    gMemes.forEach(meme => {
        var image = new Image();
        image.src = meme;
        strHtml +=  `<div class="img-container" onclick="openMeme(this)"><img src="${meme}" alt="" srcset="" class="galery-img" ></div>`

    });
    var elGalery = document.querySelector('.galery-container');
    elGalery.innerHTML = strHtml;
}
function renderGalery(imgs = getImgs()) {
    var strHtml = '<div  ><input type="file"  class=" upload" name="image" onchange="onImgInput(event)" /><div class="upload-style"data-trans="your-upload"></div></div>';

    imgs.forEach(img => {
        strHtml += `<div data-id="${img.id}"class="img-container" onclick="openMeme(this)"><img src="${img.url}" alt="" srcset="" class="galery-img" ></div>`
    })
    var elGalery = document.querySelector('.galery-container');
    elGalery.innerHTML = strHtml;
}

function renderSearch() {
    var keywords = getKeywords();
    var strHtml = '';

    keywords.forEach(key => {
        strHtml += `<div  onclick="onSearch('${key.txt}')" style="font-size:${key.size}px" class="search-item">${key.txt}</div>`
    })
    var elGalery = document.querySelector('.search');
    elGalery.innerHTML = strHtml;
}

function openMeme(el) {

    var id = (el.dataset)?el.dataset.id:0;
    

    var elGalery = document.querySelector('.galery-container');
    elGalery.style.display = 'none';

    var elSearch = document.querySelector('.search-kind')
    elSearch.style.opacity = 0;
    elSearch.style.pointerEvents = 'none';
    
    initMeme(id, el.offsetWidth, el.offsetHeight,el.src)
}

function onSearch(txt) {
    var imgs = search(txt);
    renderGalery(imgs);
    renderSearch();
}

function onImgInput(ev) {
   loadImageFromInput(ev);

}

