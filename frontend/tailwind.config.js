/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Fraunces', 'serif'],
            },
            colors: {
                forest: '#1f4d2e',
                'forest-deep': '#152e1c',
                leaf: '#3a7d4f',
                sprout: '#52b788',
                'sprout-light': '#95d5b2',
                cream: '#f5f2e8',
            },
        },
    },
    plugins: [],
}
