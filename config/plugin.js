module.exports = ({ env }) => ({
    seo: {
      enabled: true,
    },
    upload: {
      config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION','ap-south-1'),
        params: {
          Bucket: env('AWS_BUCKET','gi-integrate-strapi'),
        },
        logger: console
      },
      },
    },
  });
  