module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'gi-integrate-strapi.s3.ap-south-1.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'gi-integrate-strapi.s3.ap-south-1.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    }
  },
  //TODO: Only allow authorised domains here.
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        '*',
      ],
      headers: ['*'],
      maxAge: 31536000,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
