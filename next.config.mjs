// next.config.mjs
import { withImages } from '@next/config';

export default withImages({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add rule for .glb and optionally .gltf files
      config.module.rules.push({
        test: /\.(glb|gltf)$/, // Matches both .glb and .gltf files
        use: "gltf-loader",
      });
    }
    return config;
  },
  // ... other configurations (e.g., images)
  images: {
    domains: ['aceternity.com'], // Existing image domain configuration
  },
});