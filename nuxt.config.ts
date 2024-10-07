// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Your SaaS Startup - Revolutionizing Business Solutions',
      meta: [
        { name: 'description', content: 'Your SaaS startup provides cutting-edge business solutions to streamline operations and boost productivity.' },
        { name: 'keywords', content: 'SaaS, startup, business solutions, productivity, innovation' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Your SaaS Startup - Revolutionizing Business Solutions' },
        { property: 'og:description', content: 'Your SaaS startup provides cutting-edge business solutions to streamline operations and boost productivity.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yoursaasstartup.com' },
        { property: 'og:image', content: 'https://yoursaasstartup.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Your SaaS Startup - Revolutionizing Business Solutions' },
        { name: 'twitter:description', content: 'Your SaaS startup provides cutting-edge business solutions to streamline operations and boost productivity.' },
        { name: 'twitter:image', content: 'https://yoursaasstartup.com/twitter-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://yoursaasstartup.com' },
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})