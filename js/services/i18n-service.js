'use strict'
var gTrans = {
    'nav-gallery': {
        en: 'Gallery',
        he: 'גלריה'
    },
    'nav-memes': {
        en: 'Memes',
        he: 'ממים',
    },
    'nav-about': {
        en: 'About',
        he: 'אודות',
    },
    'back-to-gallery': {
        en: '- Back to gallery ',
        he: 'בחזרה לגלריה -'
    },
    'line-text': {
        en: 'enter text',
        he: 'הכנס טקסט',
    },
    'edit-label': {
        en: 'Edit text line',
        he: 'עריכת השורה',
    },
    download: {
        en: 'Download',
        he: 'הורד',
    },
    publish: {
        en: 'share in facebook',
        he: 'שתף בפייסבוק'
    },
    share: {
        en: 'Sare',
        he: 'שתף'
    },
   search: {
        en: 'search',
        he: 'חפש'
    }, 
    save: {
        en: 'Save Meme',
        he: 'שמור מם'
    },
    'your-upload': {
        en: 'upload from your computer',
        he: 'העלה מהמחשב שלך'
    }, 
    file: {
        en: 'file not load',
        he: 'קובץ לא עלה'
    },  
    'api-share': {
        en: 'Share in Api',
        he: 'שתף עם Api'
    },
}

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    // console.log(keyTrans);

    // TODO: if key is unknown return 'UNKNOWN'
    if (!keyTrans) return 'UNKNOWN'
    // TODO: get from gTrans

    var txt = keyTrans[gCurrLang];
    // TODO: If translation not found - use english
    if (!txt) return keyTrans.en

    return txt
}

function doTrans() {
    // TODO: 
    var els = document.querySelectorAll('[data-trans]')
    // console.log(els);

    // for each el:
    //    get the data-trans and use getTrans to replace the innerText 
    els.forEach(function (el) {
        // console.dir(el)
        var txt = getTrans(el.dataset.trans)
        if (el.nodeName === 'INPUT') el.placeholder = txt;
        else el.innerText = txt
        //    ITP: support placeholder  

        // console.log('el.dataset', el.dataset.trans);       
    })
}

function setLang(lang) {
    gCurrLang = lang;
}

function getLang(){
    return gCurrLang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return (gCurrLang === 'he') ? new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num) :
        new Intl.NumberFormat(gCurrLang, { style: 'currency', currency: 'USD' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}

function kmToMiles(km) {
    return km / 1.609;
}