/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/uren',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLScBAYySam8sPXG9njmjEo4nWAzGyYTmQTM7vDRh8wo8Vr5o9g/viewform?usp=header',
                permanent: false
            },
            {
                source: '/uren-epd',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLScyhvUM-vfdv6c10OmT0tQ3N90750bt_ocPp0sie6PrsTaMMA/viewform?usp=sharing',
                permanent: false
            },
            {
                source: '/logboek',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiL875x1msZeZflvjqAmw5ZBIO6R6yXug0Cvno8gF4CMcRw/viewform?usp=header',
                permanent: false
            },
            {
                source: '/logboek-epd',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLSeVuvz3FQd4Hz9hW9ymJELPuXiPk5C1LF45YpG-DZ42qENC1w/viewform?usp=header',
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
