const proxyConfig = [
  {
    context: ['/api/search'],
    target: 'https://www.wipo.int/patinformed',
    secure: true,
    changeOrigin: true,
  },
  {
    context: ['**'], // Rest of other API call
    target: 'https://www.wipo.int/patinformed',
    secure: false,
    changeOrigin: true,
  },
];

module.exports = proxyConfig;
