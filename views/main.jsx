const React = require('react')

const MainPage = (props) => {
    const { PUBLIC_KEY } = props
    return (
        <html>
            <head>
                <title>Google OAuth 2.0 test application</title>
                <meta name="google-signin-client_id" content={PUBLIC_KEY} />
                <link rel="stylesheet" href="/styles.css" />
                <script src="/scripts.js"></script>
                <script src="https://apis.google.com/js/platform.js" async defer></script>
            </head>
            <body>
                <header>
                    <h1>The application to test Google OAuth2 authorization API.</h1>
                </header>
                <main>
                    <h2>Client Side</h2>
                    <div className="google-oauth2-integration-code">
                        <div className="g-signin2" data-onsuccess="onSignIn"></div>
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
                            Access Token:
                        </span>
                        <input type="text" id="accessTokenField"/>
                        <button type="button" onClick="getElementByIdAndCopyValueToClipboard('accessTokenField')">
                            Copy to clipboard
                        </button>
                    </div>
                    <div className="google-oauth2-token-form">
                        <span>
                            Id Token:
                        </span>
                        <input type="text" id="idTokenField"/>
                        <button type="button" onClick="getElementByIdAndCopyValueToClipboard('idTokenField')">
                            Copy to clipboard
                        </button>
                    </div>
                </main>
            </body>
        </html>
    )
}

module.exports = MainPage
