function onSignIn(googleUser) {
    getElementByIdAndAssignHTML('googleUser', formatJSON(googleUser))
    getElementByIdAndAssignValue('accessTokenField', googleUser.Bc.access_token)
    getElementByIdAndAssignValue('idTokenField', googleUser.Bc.id_token)
}

function formatJSON(json) {
    return JSON.stringify(json, null, 2)
}

function getElementByIdAndAssignValue(id, value) {
    document.getElementById(id).value = value
}

function getElementByIdAndAssignHTML(id, html) {
    document.getElementById(id).innerHTML = html
}
