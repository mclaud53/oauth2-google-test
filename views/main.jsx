const React = require('react')

const MainPage = (props) => {
    const { PUBLIC_KEY } = props
    return (
        <html>
        <head>
            <title>Google OAuth 2.0 test application</title>
            <link rel="stylesheet" href="/styles.css" />
            <script src="/main.js"></script>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
        </head>
        <body>
        <header>
            <h1>The application to test Google OAuth2 authorization API.</h1>
            <b><font color="red">There is a new solution. If you are needed you may look at </font><a href="/deprecated-solution">deprecated solution</a></b>
        </header>
        <main>
            <h2>Client Side</h2>
            <div className="google-oauth2-integration-code">
                <div id="g_id_onload"
                     data-client_id={PUBLIC_KEY}
                     data-callback="onSignIn"
                     data-auto_prompt="false">
                </div>
                <div className="g_id_signin"
                     data-type="standard"
                     data-size="large"
                     data-theme="outline"
                     data-text="sign_in_with"
                     data-shape="rectangular"
                     data-logo_alignment="left">
                </div>
            </div>
            <div className="server-response">
                        <span>
                            Google user:
                        </span>
                <pre id="googleUser">

                        </pre>
            </div>
            <div className="google-oauth2-token-form">
                        <span>
                            Credential:
                        </span>
                <input type="text" id="credentialField"/>
                <button type="button" onClick="getElementByIdAndCopyValueToClipboard('credentialField')">
                    Copy to clipboard
                </button>
            </div>
        </main>
        </body>
        </html>
    )
}

module.exports = MainPage
