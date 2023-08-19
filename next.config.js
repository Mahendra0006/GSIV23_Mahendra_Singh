const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other webpack configuration ...
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@Api': path.resolve(__dirname, 'src/Api/'),
      '@Redux': path.resolve(__dirname, 'src/Redux/'),
      '@Helper': path.resolve(__dirname, 'src/Helper/'),
    },
  },
  env: {
    API_URL: 'https://api.themoviedb.org/3',
    API_KEY: '8c5993c19c4b64526b982c200b3aecf2',
    ACCESS_TOKEN:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzU5OTNjMTljNGI2NDUyNmI5ODJjMjAwYjNhZWNmMiIsInN1YiI6IjY0NmNhM2Q5MzNhMzc2MDE3NWQ0NjQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRCpHyoa1k_GXwWtPiIMYyfOLbHKxtiR8j_WMiojZaA',
  },
  output: 'export',
}

module.exports = nextConfig
