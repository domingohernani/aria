module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Webpack rule for .glb files
      config.module.rules.push({
        test: /\.glb$/,
        use: "gltf-loader",
      });
    }
    return config;
  },
  images: {
    domains: ['aceternity.com'], // Allow images from aceternity.com
  },
};