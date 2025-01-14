'use strict'

function onLoadUsers() {
    console.log('load users');
    getUsers()
        .then(renderUsers)
        .catch(err => console.log('err:', err))
}

function renderUsers(users) {
    const strHTMLs = users.map(user => `<li>${user.name}</li>`)
    document.querySelector('.user-list').innerHTML = strHTMLs.join('')
}
