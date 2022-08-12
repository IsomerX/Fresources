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
                poppins: 'Poppins',
                inter: 'Inter',
            },
            colors: {
                primary: {
                    blue: '#020317',
                    red: '#923535',
                    green: '#033512',
                    violet: '#522AA6',
                },
                muted: {
                    green: '#012900',
                    gray: 'rgba(255, 255, 255, 0.15)',
                },
                highlights: {
                    'blue': 'rgba(219, 234, 254, 0.3)',
                }
            },
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(var(--gradient-color-stops))',
            },
            boxShadow: {
                'glass': '0 1px 3px 0 rgb(0 0 0 / 0.05);',
                'glass-2': '0 1px 5px 0 rgb(0 0 0 / 0.05);',
            },
            blur: {
                '4xl': '70px',
                '5xl': '84px',
            }
        },
    },
    plugins: [],
}
