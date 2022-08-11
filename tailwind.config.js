module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    // theme: {
    //     extend: {
    //         colors: {
    //             babli: '#11101D',
    //             babu: '#2c2859',
    //             bablu: '#020221',
    //             babla: "#0e0e12",
    //             primary: {
    //                 bablu: '#101033',

    //                 black: '#0c0c0c',
    //                 white: '#ffffff',
    //                 pink: '#ff2bc1',
    //             },
    //             muted: {
    //                 slate: '#75899c',
    //             },
    //             accent: {
    //                 green: '#367737',
    //                 purple: '#351f7f',
    //                 magenta: '#5d174c',
    //             },
    //         },
    //     },
    // },
    theme: {
        extend: {
            fontFamily: {
                'poppins': 'Poppins'
            },

            colors: {
                primary: {
                    'pink': '#FBAFCC',
                    'purple': '',
                    'blue': '',
                    'green': '#8AE3B7',
                    'yellow': '',
                },
                darkPrimary: {
                    'pink': '',
                    'purple': '',
                    'blue': '',
                    'green': ' #78C1C2',
                    'yellow': '',
                },
                muted: {
                    'pink': '',
                    'purple': '',
                    'blue': '',
                    'green': '#AAE0C2',
                    'yellow': '',
                },
                extraMuted: {
                    'pink': '',
                    'purple': '',
                    'blue': '',
                    'green': '#CAE8DA',
                    'yellow': '',
                },

            },

        },
    },
    plugins: [],
}

