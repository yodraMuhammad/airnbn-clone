export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    modules: ['nuxt-icon','nuxt-swiper','@tailvue/nuxt'],
})
