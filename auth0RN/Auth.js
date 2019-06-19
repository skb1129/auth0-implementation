import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-4bulwykj.auth0.com',
  clientId: 'XXH9skh44KSude1nhCGM74R9TciHylrj',
});

const fetchPrivateApi = async credentials => {
  try {
    const data = await fetch('http://localhost:8000/api/private', {
      headers: {
        Authorization: `${credentials.tokenType} ${credentials.accessToken}`
      }
    });
    const json = await data.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }
};

const signin = async (username, password, cb) => {
  try {
    const credentials = await auth0.auth.passwordRealm({
      username, password,
      realm: 'Username-Password-Authentication',
      scope: 'openid profile email address phone read:profile',
      audience: 'http://10.14.2.206:8000',
    });
    console.log(credentials);
    const data = await fetchPrivateApi(credentials);
    cb(data);
  } catch (e) {
    console.log(e);
  }
};

export default signin;
