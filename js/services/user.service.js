const STORAGE_KEY_USERS = 'userDB'
const url3 = 'https://jsonplaceholder.typicode.com/users'

function getUsers() {

    const users = loadFromStorage(STORAGE_KEY_USERS)
    if (users) {
        console.log('GET FROM STORAGE')
        return Promise.resolve(users)
    }

    return axios.get(url3)
        .then(res => {
            console.log('GET FROM AXIOS')
            var users = res.data

            saveToStorage(STORAGE_KEY_USERS, users)
            return users
        })

}




