/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0A2540",
                sky: "#38BDF8",
                skyLight: "#7DD3FC",
            },
        },
    },
    plugins: [],
};
