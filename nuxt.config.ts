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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com',},
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://yoursaasstartup.com' },
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})

function defineNuxtConfig(arg0: { compatibilityDate: string; devtools: { enabled: boolean; }; app: { head: { charset: string; viewport: string; title: string; meta: ({ name: string; content: string; } | { property: string; content: string; })[]; link: ({ rel: string; type: string; href: string; } | { rel: string; href: string; })[]; }; }; modules: string[]; }) {
  throw new Error("Function not implemented.");
}
