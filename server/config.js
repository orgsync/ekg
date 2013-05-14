var _ = require('underscore');

var env = process.env.NODE_ENV || 'development';

var config = module.exports = {
  env: env,
  session: {
    proxy: true,
    secret: 'panda',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10
    }
  },
  redis: {
    url: ''
  },
  server: {
    url: 'http://localhost:8080',
    port: 8080
  }
};

_.extend(config,
  env === 'production' ? {
  } : env === 'development' ? {
  } : {
  }
);
