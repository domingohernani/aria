module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/, 
        use: "gltf-loader",
      });
    }
    return config;
  },
};