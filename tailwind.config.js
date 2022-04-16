module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            brown: {
                700: '#7F5539',
                900: '#513816',
                500: '#B19A81',
                300: '#DDB892',
                200: '#E6CCB2',
                100: '#F8F0E5',
            },
            black: {
                800: '#212529',
                700: '#313944',
                600: '#1b2f33',
                300: '#C5CDCD',
                200: '#EAEDED',
            },
            red: {
                100: '#cf551e',
                200: '#ca4737',
                300: '#72000f',
            },
            yellow: {
                100: '#f3ce64',
                200: '#cf551e',
            },
            blue: '#192a50',
            white: '#FFF',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '0.5rem',
                sm: '0.5rem',
                md: '0rem',
                lg: '2rem',
                xl: '6rem',
                '2xl': '6rem',
            },
        },
        fontFamily: {
            sans: ['Jost', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
        },
        extend: {},
    },
    plugins: [],
}
