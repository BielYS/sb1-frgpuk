<template>
  <div>
    <section class="hero bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6 leading-tight">Revolutionize Your Business with Our SaaS Solution</h1>
        <p class="text-xl mb-10 max-w-2xl mx-auto">Streamline operations, boost productivity, and drive growth with our cutting-edge platform.</p>
        <NuxtLink to="#contact" class="bg-white text-primary-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary-100 transition duration-300 shadow-lg hover:shadow-xl">Get Started</NuxtLink>
      </div>
    </section>

    <section id="features" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div class="text-primary-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Advanced Analytics</h3>
            <p class="text-gray-600">Gain valuable insights with our powerful analytics tools.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div class="text-primary-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Team Collaboration</h3>
            <p class="text-gray-600">Enhance teamwork with seamless collaboration features.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div class="text-primary-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Enterprise-grade Security</h3>
            <p class="text-gray-600">Protect your data with our robust security measures.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Pricing Plans</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-2xl font-semibold mb-4">Starter</h3>
            <p class="text-4xl font-bold mb-6">$29<span class="text-lg font-normal text-gray-500">/month</span></p>
            <ul class="mb-8 space-y-3">
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Basic features</li>
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> 5 team members</li>
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> 5GB storage</li>
            </ul>
            <NuxtLink to="#contact" class="block text-center bg-primary-600 text-white py-3 px-6 rounded-full hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg">Choose Plan</NuxtLink>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-2 border-primary-500 transform scale-105">
            <h3 class="text-2xl font-semibold mb-4">Pro</h3>
            <p class="text-4xl font-bold mb-6">$79<span class="text-lg font-normal text-gray-500">/month</span></p>
            <ul class="mb-8 space-y-3">
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Advanced features</li>
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> 20 team members</li>
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> 50GB storage</li>
            </ul>
            <NuxtLink to="#contact" class="block text-center bg-primary-600 text-white py-3 px-6 rounded-full hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg">Choose Plan</NuxtLink>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-2xl font-semibold mb-4">Enterprise</h3>
            <p class="text-4xl font-bold mb-6">Custom</p>
            <ul class="mb-8 space-y-3">
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> All features</li>
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Unlimited team members</li>
              <li class="flex items-center"><svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Unlimited storage</li>
            </ul>
            <NuxtLink to="#contact" class="block text-center bg-primary-600 text-white py-3 px-6 rounded-full hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <form class="max-w-lg mx-auto">
          <div class="mb-6">
            <label for="name" class="block mb-2 font-medium text-gray-700">Name</label>
            <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 font-medium text-gray-700">Email</label>
            <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required>
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 font-medium text-gray-700">Message</label>
            <textarea id="message" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required></textarea>
          </div>
          <button type="submit" class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Your SaaS Startup - Revolutionizing Business Solutions',
  meta: [
    { name: 'description', content: 'Your SaaS startup provides cutting-edge business solutions to streamline operations and boost productivity.' },
  ],
})
</script>