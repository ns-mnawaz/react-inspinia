const dev = {
  api: {
    HOST: 'https://localhost:446',
    VERSION: '/api/'
  },
  auth: {
    GRANT_TYPE: 'password',
    CLIENT_ID: 'client1',
    CLIENT_SECRET: 'secret'
  }
};

const prod = {
  api: {
    HOST: 'https://react-inspinia.free.beeceptor.com',
    VERSION: '/api/'
  },
  auth: {
    GRANT_TYPE: 'password',
    CLIENT_ID: 'client_id',
    CLIENT_SECRET: 'client_secret'
  }
};

// const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
const config = process.env.REACT_APP_STAGE === 'production' ? dev : prod;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  PAGE_HEIGHT: '200vh',
  ...config
};
