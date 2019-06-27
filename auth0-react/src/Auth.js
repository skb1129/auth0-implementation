import auth0 from 'auth0-js';

let oob_code = '';
let mfa_token = '';

const auth0instance = new auth0.WebAuth({
    domain: 'dev-4bulwykj.auth0.com',
    clientID: 'XXH9skh44KSude1nhCGM74R9TciHylrj',
    audience: 'http://10.14.2.206:8000',
    redirectUri: 'http://localhost:8000',
    scope: 'openid profile email address phone read:profile',
    responseType: 'token id_token'
});

const enrollMFA = async () => {
    try {
        const response = await fetch('https://dev-4bulwykj.auth0.com/mfa/associate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${mfa_token}`,
            },
            body: JSON.stringify({
                authenticator_types: ['oob'],
                oob_channels: ['sms', 'email'],
                phone_number: '+919814068029',
            }),
        });
        const data = await response.json();
        oob_code = data.oob_code;
        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

const challengeMFA = async () => {
    try {
        const response = await fetch('https://dev-4bulwykj.auth0.com/mfa/challenge', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                mfa_token,
                challenge_type: 'oob',
                client_id: 'XXH9skh44KSude1nhCGM74R9TciHylrj',
            }),
        });
        const data = await response.json();
        oob_code = data.oob_code;
        console.log(data);
    } catch (e) {
        enrollMFA();
        console.log(e);
    }
};

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

const authenticateMFA = async (binding_code) => {
    try {
        const body = {
            grant_type: 'http://auth0.com/oauth/grant-type/mfa-oob',
            client_id: 'XXH9skh44KSude1nhCGM74R9TciHylrj',
            mfa_token,
            oob_code,
            binding_code,
        };
        const payload = new FormData();
        payload.append('grant_type', 'http://auth0.com/oauth/grant-type/mfa-oob');
        payload.append('client_id', 'XXH9skh44KSude1nhCGM74R9TciHylrj');
        payload.append('mfa_token', mfa_token);
        payload.append('oob_code', oob_code);
        payload.append('binding_code', binding_code);
        const response = await fetch('https://dev-4bulwykj.auth0.com/oauth/token', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${mfa_token}`,
            },
            body: payload,
        });
        const data = await response.json();
        console.log(data);
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
        if (err && err.code === 'mfa_required') {
            mfa_token = err.original.response.body.mfa_token;
            challengeMFA();
            console.log(err);
            return;
        }
        console.log(authResult);
        fetchPrivateApi(authResult);
    });
};

export default signin;
export { authenticateMFA };
