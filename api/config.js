//
// //
// // // SET ME FROM THE CLIENT PACK
const CLIENT_ID = 'https://rp.sandbox.directory.openfinance.ae/openid_relying_party/0fa29f27-38a0-4efb-8117-c022bfa57af1';
const SIGNING_KEY_ID = 'V93XKP4IkvIGqUjsDJI_WIpowSZV22UlSNZp9uWk2Uo';
// // //
// //
//


export default {
  CLIENT_ID,
  SIGNING_KEY_ID,

  REDIRECT_URI: 'http://localhost:1411/client/callback',
  RESOURCE_SERVER: 'https://rs1.altareq1.sandbox.apihub.openfinance.ae',
  ISSUER: 'https://auth1.altareq1.sandbox.apihub.openfinance.ae',
  AUTH_ENDPOINT: 'https://auth1.altareq1.sandbox.apihub.openfinance.ae/auth',
  PAR_ENDPOINT: 'https://as1.altareq1.sandbox.apihub.openfinance.ae/par',
  TOKEN_ENDPOINT: 'https://as1.altareq1.sandbox.apihub.openfinance.ae/token',
  JWKS: 'https://keystore.sandbox.directory.openfinance.ae/233bcd1d-4216-4b3c-a362-9e4a9282bba7/application.jwks',
};

