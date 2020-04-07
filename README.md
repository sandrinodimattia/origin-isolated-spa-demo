# Origin Isolated SPA Demo

This demo shows and end to end example of Origin-Isolated Data Storage for Single Page Apps, [as documented by Philippe De Ryck](https://pragmaticwebsecurity.com/files/cheatsheets/browsersecrets.pdf).

We have a few moving parts here:

### [/tv-shows-api](/tv-shows-api)

The simple Express.js API secured with Auth0 and deployed to Now:

https://tv-shows-api-demo.now.sh/api/my/shows

This endpoint requires the caller to provide an access token.

### [/origin-frame-app](/origin-frame-app)

A frame that talks to Auth0, handles all the authentication logic, the token renewal, the token storage.

It also exposed an API to the parent which allows the parent to get the current user information or interact with the REST API.

https://origin-isolated-frame.herokuapp.com/frame

### [/spa](/spa)

The actual SPA which talks to Auth0 and to the REST API by loading the origin frame application as an iframe. [penpal](https://www.npmjs.com/package/penpal) is used for the communication between the SPA and the iframe.

https://origin-isolated-spa.sandrinodimattia.now.sh/
