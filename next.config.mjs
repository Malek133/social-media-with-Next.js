// /** @type {import('next').NextConfig} */


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["utfs.io"],
//          remotePatterns: [
//      {
//       protocol: 'https',
//        hostname: 'assets.example.com',
//        port: '',
//        pathname: '/account123/**',
//      },
//    ],
//     }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "i.pinimg.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;


