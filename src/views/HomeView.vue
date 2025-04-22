<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { Download, Phone } from 'lucide-vue-next'
import { ref, type Component } from 'vue'

interface HomeButton {
  icon: Component
  label: string
}

interface TechStack {
  icon: string
  label: string
}

const homeButtons = ref<HomeButton[]>([
  { icon: Download, label: 'Download my resume' },
  { icon: Phone, label: 'Contact me' },
])

const techStacks = ref<TechStack[]>([
  { icon: 'logos:html-5', label: 'HTML' },
  { icon: 'logos:css-3', label: 'CSS' },
  { icon: 'logos:javascript', label: 'JavaScript' },
  { icon: 'logos:vue', label: 'Vue' },
  { icon: 'logos:tailwindcss-icon', label: 'Tailwind CSS' },
  { icon: 'logos:typescript-icon', label: 'TypeScript' },
  { icon: 'logos:vitejs', label: 'Vite' },
  { icon: 'logos:github-icon', label: 'Github' },
])
</script>
<template>
  <div
    class="text-[#f0f0f0] font-['Satoshi'] flex flex-col pt-20 items-center gap-5 mx-10 max-h-screen"
  >
    <div class="space-y-2">
      <span class="text-6xl">Kharl Aquino</span>
      <p class="text-3xl text-gray-400 text-center">Frontend Developer</p>
    </div>
    <p class="text-xs text-justify text-gray-300 sm:mx-25 md:mx-50 xl:w-110">
      Crafting clean, responsive interfaces with a focus on usability and simplicity. Experienced in
      building modern web applications using Vue.js, Tailwind CSS, and API integration to create
      seamless user experiences.
    </p>
    <!-- <div class="flex justify-center items-center gap-3"> -->
    <ul class="flex items-center justify-center gap-3 mt-10">
      <li v-for="(buttons, index) in homeButtons" :key="index">
        <button
          class="bg-white text-black px-4 py-2 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:shadow-gray-100 transition-transform duration-300"
        >
          <component :is="buttons.icon" :size="18" /> {{ buttons.label }}
        </button>
      </li>
    </ul>
    <div class="mt-10">
      <h2 class="text-4xl text-center">Tech I use:</h2>
      <div>
        <div class="flex flex-wrap gap-5 w-110 justify-center items-center text-white mt-10">
          <div
            v-for="(stack, index) in techStacks"
            :key="index"
            class="flex flex-col items-center justify-center gap-2 w-20 h-20 hover:bg-gray-800 hover:rounded-2xl hover:font-medium"
          >
            <Icon
              :icon="stack.icon"
              width="30"
              height="30"
              class="flex justify-center items-center"
            />
            <span class="flex justify-center items-center text-center font-['Arial'] text-sm">{{
              stack.label
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
