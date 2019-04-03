const local = {
  API_URL: 'http://localhost:8011',
  COOKIES_DOMAIN: 'localhost',
};

const alpha = {
  API_URL: '',
  COOKIES_DOMAIN: '', // TODO: set before deploy
};

const prod = {
  API_URL: '',
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
};
