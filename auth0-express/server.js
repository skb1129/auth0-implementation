const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();

app.use('', express.static('build'));

const port = process.env.PORT || 8000;

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-4bulwykj.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://10.14.2.206:8000',
    issuer: 'https://dev-4bulwykj.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/api/private', function (req, res) {
    res.json({ message: 'Auth0 works!!!!!' });
});

app.listen(port);
