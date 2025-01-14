'use strict'

function ask(onSuccess) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            onSuccess(ans)
        }
    }
    xhr.open('GET', 'https://yesno.wtf/api', true)
    xhr.send()
}