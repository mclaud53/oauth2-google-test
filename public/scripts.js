function onSignIn(googleUser) {
    getElementByIdAndAssignHTML('googleUser', formatJSON(googleUser))
    getElementByIdAndAssignValue('accessTokenField', googleUser.mc.access_token)
    getElementByIdAndAssignValue('idTokenField', googleUser.mc.id_token)
}

function validateToken(token) {
    sendRequestToValidateToken(token)
        .then(jsonResponse => {
            getElementByIdAndAssignHTML('serverResponse', formatJSON(jsonResponse))
        })
}

function sendRequestToValidateToken(token) {
    return fetch(`/validate-token?response=${token}`)
        .then((res) => {
            return res.json()
        })
}

function formatJSON(json) {
    return JSON.stringify(json, null, 2)
}

function getElementByIdAndRetrieveValue(id) {
    return document.getElementById(id).value
}

function getElementByIdAndAssignValue(id, value) {
    document.getElementById(id).value = value
}

function getElementByIdAndCopyValueToClipboard(id) {
    var tokenInput = document.getElementById(id)

    tokenInput.select()
    tokenInput.setSelectionRange(0, 99999) /* For mobile devices */

    document.execCommand('copy')
}

function getElementByIdAndAssignHTML(id, html) {
    document.getElementById(id).innerHTML = html
}
