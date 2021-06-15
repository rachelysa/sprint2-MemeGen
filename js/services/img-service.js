'use strict'
var gImgs=[];

var gKeywords = [{ txt: 'happy', size: 30 }, { txt: 'man', size: 20 }, { txt: 'funny', size: 14 }, { txt: 'fashion', size: 32 }, { txt: 'style', size: 16 }, { txt: 'celebs', size: 25 }]
function createImgs() {
    for (let i = 0; i < 20; i++) {
        createImg(i)

    }
}

function createImg(idx) {
    var img = {
        id: idx,
        url: `img/${idx}.jpg`,
        keywords: [gKeywords[0]],
        classToAdd: 'same'

    }
    if (idx < 10) img.keywords.push(gKeywords[1]);
    else if (idx < 15) img.keywords.push(gKeywords[2]);
    else img.keywords.push(gKeywords[3]);
    if (idx % 2 === 0) img.keywords.push(gKeywords[4]);
    else img.keywords.push(gKeywords[5]);

    gImgs.push(img);
}
function createImgsGrid() {
    gImgs = [
        { id: 0, url: `img/0.jpg`, keywords: [gKeywords[0],gKeywords[2],gKeywords[4]], classToAdd: 'same' },
        { id: 1, url: `img/1.jpg`, keywords: [gKeywords[1],gKeywords[2],gKeywords[3]], classToAdd: 'same' },
        { id: 2, url: `img/2.jpg`, keywords: [gKeywords[0],gKeywords[2],gKeywords[5]], classToAdd: 'same' },
        { id: 3, url: `img/3.jpg`, keywords: [gKeywords[1],gKeywords[3],gKeywords[5]], classToAdd: 'large' },
        { id: 4, url: `img/4.jpg`, keywords: [gKeywords[1],gKeywords[2],gKeywords[4]], classToAdd: 'small' },
        { id: 5, url: `img/5.jpg`, keywords: [gKeywords[0],gKeywords[2]], classToAdd: 'small' },
        { id: 6, url: `img/6.jpg`, keywords: [gKeywords[0]], classToAdd: 'same' },
        { id: 7, url: `img/7.jpg`, keywords: [gKeywords[1]], classToAdd: 'small' },
        { id: 8, url: `img/8.jpg`, keywords: [gKeywords[2]], classToAdd: 'large' },
        { id: 9, url: `img/9.jpg`, keywords: [gKeywords[0],gKeywords[2],gKeywords[4],gKeywords[5]], classToAdd: 'small' },
        { id: 10, url: `img/10.jpg`, keywords: [gKeywords[5]], classToAdd: 'large' },
        { id: 11, url: `img/11.jpg`, keywords: [gKeywords[4],gKeywords[5]], classToAdd: 'small' },
        { id: 12, url: `img/12.jpg`, keywords: [gKeywords[3]], classToAdd: 'same' },
        { id: 13, url: `img/13.jpg`, keywords: [gKeywords[0],gKeywords[1],gKeywords[2]], classToAdd: 'large' },
        { id: 14, url: `img/14.jpg`, keywords: [gKeywords[0]], classToAdd: 'small' },
        { id: 15, url: `img/15.jpg`, keywords: [gKeywords[0],gKeywords[3],gKeywords[5]], classToAdd: 'small' },
        { id: 16, url: `img/16.jpg`, keywords: [gKeywords[2]], classToAdd: 'large' },
        { id: 17, url: `img/17.jpg`, keywords: [gKeywords[4]], classToAdd: 'small' },
        { id: 18, url: `img/18.jpg`, keywords: [gKeywords[0],gKeywords[1],gKeywords[3]], classToAdd: 'same' },
        { id: 19, url: `img/19.jpg`, keywords: [gKeywords[0],gKeywords[1],gKeywords[2],gKeywords[5]], classToAdd: 'small' },
        { id: 20, url: `img/20.jpg`, keywords: [gKeywords[4]], classToAdd: 'small' },



    ]
}
function getKeywords() {
    return gKeywords;
}

function getImgs() {
    return gImgs;
}

function getImgById(idX) {
    return gImgs.find(img => {
        return img.id === idX
    })

}
function search(txt) {
    gKeywords.forEach(key => {
        if (key.txt === txt) key.size++;
        return
    });
    var imgs = gImgs.filter(img => {
        var key = img.keywords.filter(key => {
            return key.txt.includes(txt);
        });
        return (key.length)
    })

    return imgs
}
function loadImageFromInput(ev) {

    var reader = new FileReader()

    reader.onload = function (event) {

        var img = new Image();
        img.src = event.target.result
        img.onload = () => {

            openMeme(img, this.width, this.height);
        }

    }
    reader.readAsDataURL(ev.target.files[0])
}