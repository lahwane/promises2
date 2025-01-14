'use strict'
function onInit() { }

function onAsk() {
    console.log('Asking...')
    document.querySelector('.answer').hidden = true
    ask(renderAns)
}

function renderAns(ans) {
    const elAns = document.querySelector('.answer')
    elAns.querySelector('h2').innerText = ans.answer
    elAns.querySelector('img').src = ans.image
}

function onImgReady() {
    document.querySelector('.answer').hidden = false
}

