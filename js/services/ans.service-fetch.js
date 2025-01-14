'use strict'
const url2 = 'https://yesno.wtf/api'

function ask() {
    return fetch(url2).then(res => res.json())
}

function askVerbose() {

    const prm = fetch(url2)
    console.log('prm:', prm)
    const prmData = prm.then(res => res.json())
    console.log('prmData:', prmData)
    return prmData
}
