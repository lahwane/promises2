'use strict'

function onAsk() {
    console.log('Asking...')
    ask()
        .then(renderAns)
        // .then(res => renderAns(res))
        .catch(err => console.log('err:', err))

}

function renderAns(ans) {
    const elAns = document.querySelector('.answer')
    elAns.querySelector('h2').innerText = ans.answer
    elAns.querySelector('img').src = ans.image
}
