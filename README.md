# Google OAuth 2.0 test application
The application to test Google OAuth2 authorization API.

## Links
- [Authentication overview](https://cloud.google.com/docs/authentication)
- [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)
- ~~[Integrating Google Sign-In into your web app](https://developers.google.com/identity/sign-in/web/sign-in)~~ - retired
- [Sign In with Google for Web](https://developers.google.com/identity/gsi/web/guides/overview)
- [Google Cloud Platform Credentials](https://console.cloud.google.com/apis/credentials)

## Environment variables
- *PUBLIC_KEY* - Client ID
- *SECRET_KEY* - Client secret
- *SERVER_PORT* - Http server port (by default 3000)

## Usage

- Windows:
```bash
SET PUBLIC_KEY=<public key>&& SET SECRET_KEY=<secret key>&& node .
```

- Unix:
```bash
PUBLIC_KEY=<public key> SECRET_KEY=<secret key> node .
```

## Docker

```bash
docker container run --env PUBLIC_KEY=<public key> --env SECRET_KEY=<secret key> -d -p 3000:3000 mclaud53/oauth2-google-test
```
