const local = {
  COOKIES_DOMAIN: 'localhost',
};

const alpha = {
  COOKIES_DOMAIN: 'aedlabs.pl',
};

const prod = {
  COOKIES_DOMAIN: 'aedlabs.pl',
};

const getEnv = (envName: string) => {
  switch (envName) {
    case 'local':
      return local;
    case 'alpha':
      return alpha;
    case 'prod':
      return prod;
    default:
      return local;
  }
};

export const env = {
  ...getEnv(process.env.BUILD_ENV),
  NODE_ENV: process.env.NODE_ENV || 'development',
  COOKIE_CONSENT: 'AEDLABS_MINIATURES_COOKIE_CONSENT',
  API_URL: 'https://8w4n1uj493.execute-api.eu-west-1.amazonaws.com/default/contact-email-sender',
};
