import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        lion: '#cda673',
        silver: '#CDCACC',
        lilak: '#9184aa',
        viridian: '#2A7F62',
        'light-green': '#B0FF92',
        'mint-green': '#c5ffe4',
        'light-orange': '#fff1ea',
        plum: '#D68FD6'
      }
    }
  },
  plugins: []
}
export default config
