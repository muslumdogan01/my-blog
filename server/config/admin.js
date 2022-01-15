module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'edb4b5644035ed91ad63dd4c04f53815'),
  },
});
