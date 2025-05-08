/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/uren',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLScyhvUM-vfdv6c10OmT0tQ3N90750bt_ocPp0sie6PrsTaMMA/viewform?usp=sharing',
                permanent: false
            },
        ]
    },
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.graphassets.com',
            },
            {
              protocol: 'https',
              hostname: 'flowbite.s3.amazonaws.com',
            },
          ],
    },

}

module.exports = nextConfig
