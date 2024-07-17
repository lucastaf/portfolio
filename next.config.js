module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img001.prntscr.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Substitua pelo endereço da sua API local
      },
    ];
  },
};
