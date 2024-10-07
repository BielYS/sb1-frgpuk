<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-4 shadow-md">
      <nav class="container mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">Your SaaS Startup</NuxtLink>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="hover:text-primary-200 transition duration-300">Home</NuxtLink></li>
          <li><NuxtLink to="#features" class="hover:text-primary-200 transition duration-300">Features</NuxtLink></li>
          <li><NuxtLink to="#pricing" class="hover:text-primary-200 transition duration-300">Pricing</NuxtLink></li>
          <li><NuxtLink to="#contact" class="hover:text-primary-200 transition duration-300">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 Your SaaS Startup. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>