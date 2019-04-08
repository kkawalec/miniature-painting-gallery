const local = {
  COOKIES_DOMAIN: 'localhost',
};

const alpha = {
  COOKIES_DOMAIN: '', // TODO: set before deploy
};

const prod = {
  COOKIES_DOMAIN: '',
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
  API_URL: 'https://8w4n1uj493.execute-api.eu-west-1.amazonaws.com/default/contact-email-sender',
};
