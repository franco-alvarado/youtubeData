var fs = require('fs');
var readline = require('readline');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;
const axios = require('axios');

const refres_token = "1//0hNGyhnPuC5-UCgYIARAAGBESNwF-L9Iraf1poY0oKtX-Ef16xR37IeAtEEBGS4pBruUrvxLzQ5gsuOg8Qh4vO5F307I55yxdTCA";
const client_id = "376786459908-pvqbsjb0mp269h915a332o746or1phc1.apps.googleusercontent.com";
const client_secret = "1KZE_HZ4PLUQRYDAwGVkRq2r";


async function refresh() {

    const oauth2Client = new OAuth2(
        client_id, // ClientID
        client_secret, // Client Secret
    );

    await oauth2Client.setCredentials({
        refresh_token: refres_token
    });

    const accessToken = await oauth2Client.getAccessToken();

    console.log('accessToken: ' + JSON.stringify(accessToken, null, 4));
}

refresh();