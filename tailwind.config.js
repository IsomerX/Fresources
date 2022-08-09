module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                bablu: '#020221',
                primary: {
                    bablu: '#101033',

                    black: '#0c0c0c',
                    white: '#ffffff',
                    pink: '#ff2bc1',
                },
                muted: {
                    slate: '#75899c',
                },
                accent: {
                    green: '#367737',
                    purple: '#351f7f',
                    magenta: '#5d174c',
                },
            },
        },
    },
    plugins: [],
}
