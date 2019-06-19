import auth0 from 'auth0-js';

const auth0instance = new auth0.WebAuth({
    domain: 'dev-4bulwykj.auth0.com',
    clientID: 'XXH9skh44KSude1nhCGM74R9TciHylrj',
    audience: 'http://10.14.2.206:8000',
    redirectUri: 'http://localhost:8000',
    scope: 'openid profile email address phone read:profile',
    responseType: 'token id_token'
});

const fetchPrivateApi = async (credentials) => {
    try {
        const data = await fetch('http://localhost:8000/api/private', {
            headers: {
                Authorization: `${credentials.tokenType} ${credentials.accessToken}`
            }
        });
        const json = await data.json();
        console.log(json);
    } catch (e) {
        console.log(e);
    }
};

const signin = (username, password) => {
    auth0instance.client.login({
        realm: 'Username-Password-Authentication',
        username,
        password,
    }, (err, authResult) => {
        console.log(err);
        console.log(authResult);
        fetchPrivateApi(authResult);
    });
};

export default signin;
