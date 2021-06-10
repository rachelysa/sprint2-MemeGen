'use strict'

function toggleMenu() {
    var elBtn = document.querySelector('.card-menu-btn');
    var elClose = document.querySelector('.close-menu-btn');
    document.body.classList.toggle('menu-open');
    
    elBtn.classList.toggle('hide');
    elClose.classList.toggle('hide');
}
function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    
    doTrans();
}