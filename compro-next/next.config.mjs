const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.ctfassets.net",
        },
        {
          protocol: "https",
          hostname: "assets.ctfassets.net",
        },
        {
          protocol: "https",
          hostname: "randomuser.me",
        },
      ],
    },
  };
  
  export default nextConfig;