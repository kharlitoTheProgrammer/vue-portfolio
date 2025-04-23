<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { Download, Phone, Settings, Redo } from 'lucide-vue-next'
import { ref, type Component } from 'vue'
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from '@/components/ui/card'

interface HomeButton {
  icon: Component
  label: string
  action?: string
}

interface TechStack {
  icon: string
  label: string
}

const homeButtons = ref<HomeButton[]>([
  { icon: Download, label: 'Download my resume', action: 'download' },
  { icon: Phone, label: 'Contact me', action: 'contact' },
])

const techStacksFrontend = ref<TechStack[]>([
  { icon: 'logos:html-5', label: 'HTML' },
  { icon: 'logos:css-3', label: 'CSS' },
  { icon: 'logos:javascript', label: 'JavaScript' },
  { icon: 'logos:vue', label: 'Vue' },
  { icon: 'logos:tailwindcss-icon', label: 'Tailwind CSS' },
  { icon: 'vscode-icons:file-type-vscode', label: 'Visual Studio Code' },
  { icon: 'logos:typescript-icon', label: 'TypeScript' },
  { icon: 'logos:vitejs', label: 'Vite' },
])
const techStacksVersionControl = ref<TechStack[]>([
  { icon: 'logos:github-icon', label: 'Github' },
  { icon: 'skill-icons:npm-light', label: 'NPM' },
])

// const contactMe = () => {
//   window.location.href = 'mailto:your.email@example.com'
// }

const isHidden = ref(true)
const toggleHidden = () => {
  isHidden.value = false
}
</script>
<template>
  <div class="text-[#f0f0f0] flex flex-col pt-10 items-center gap-5 mx-10 max-h-screen">
    <div class="space-y-2">
      <span class="text-6xl text-[#D5C7B2] special-gothic-expanded-one-regular">Kharl Aquino</span>
      <p class="text-3xl text-[#A49581] text-center font-medium special-gothic-regular">
        Frontend Developer
      </p>
    </div>
    <p
      class="text-sm text-justify text-[#A49581] sm:mx-25 md:mx-50 xl:w-110 mt-7 special-gothic-regular"
    >
      Crafting clean, responsive interfaces with a focus on usability and simplicity. Experienced in
      building modern web applications using Vue.js, Tailwind CSS, and API integration to create
      seamless user experiences.
    </p>
    <!-- <div class="flex justify-center items-center gap-3"> -->
    <ul class="flex items-center justify-center gap-3 mt-7">
      <li v-for="(buttons, index) in homeButtons" :key="index">
        <a
          v-if="buttons.action === 'download'"
          href="/vue-portfolio/Kharl Chris-an Aquino - Resume.pdf"
          download="Resume_Kharl_Aquino.pdf"
          class="bg-[#a28b71] text-white px-6 py-3 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:shadow-gray-100 transition-transform duration-300 special-gothic-expanded-one-regular text-sm animate-pulse"
        >
          <component :is="buttons.icon" :size="23" /> {{ buttons.label }}
        </a>
        <!-- <button
          v-else-if="buttons.action === 'contact'"
          @click="contactMe"
          class="bg-white text-black px-4 py-2 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:shadow-gray-100 transition-transform duration-300"
        >
          <component :is="buttons.icon" :size="18" /> {{ buttons.label }}
        </button> -->
      </li>
    </ul>
    <div class="mt-10">
      <h2 class="text-3xl flex justify-center items-center gap-4">
        <div class="flex flex-col items-center justify-center relative">
          <Redo class="animate-pulse absolute bottom-0" :class="{ hidden: !isHidden }" />
          <span
            id="click"
            class="animate-pulse text-sm absolute top-0 right-0 rotate-[350deg] w-20 font-bold text-center"
            :class="{ hidden: !isHidden }"
          >
            CLICK ME!
          </span>
        </div>
        <button class="flex items-center justify-center" @click="toggleHidden">
          <Settings
            :size="30"
            class="text-[#A49581] transition-transform duration-300 hover:rotate-180 cursor-pointer"
          />
        </button>
      </h2>
      <div class="flex gap-5">
        <Card class="bg-[#a28b71] mt-5 border-[#a28b71]" :class="{ hidden: isHidden }">
          <CardContent class="bg-[#a28b71] space-y-2">
            <p class="text-center text-white special-gothic-regular">Frontend</p>
            <div class="flex flex-wrap gap-5 w-100 sm:w-110 justify-center items-center text-white">
              <div
                v-for="(stack, index) in techStacksFrontend"
                :key="index"
                class="flex flex-col items-center justify-center gap-2 w-20 h-20 hover:bg-[#E6DCCB] hover:rounded-2xl hover:font-medium hover:text-gray-600"
              >
                <Icon
                  :icon="stack.icon"
                  width="30"
                  height="30"
                  class="flex justify-center items-center"
                />
                <span
                  class="flex justify-center items-center text-center special-gothic-regular text-sm"
                  >{{ stack.label }}</span
                >
              </div>
            </div>
          </CardContent>
        </Card>
        <!-- Add circular functionality kapag niclick mag aappear yung tech stack then after nun iikot sya after 10 seconds -->
        <Card class="bg-[#a28b71] mt-5 border-[#a28b71]" :class="{ hidden: isHidden }">
          <CardContent class="bg-[#a28b71]">
            <div class="flex flex-wrap gap-5 w-100 sm:w-110 justify-center items-center text-white">
              <div
                v-for="(stack, index) in techStacksVersionControl"
                :key="index"
                class="flex flex-col items-center justify-center gap-2 w-20 h-20 hover:bg-[#E6DCCB] hover:rounded-2xl hover:font-medium hover:text-gray-600"
              >
                <Icon
                  :icon="stack.icon"
                  width="30"
                  height="30"
                  class="flex justify-center items-center"
                />
                <span
                  class="flex justify-center items-center text-center special-gothic-regular text-sm"
                  >{{ stack.label }}</span
                >
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.special-gothic-expanded-one-regular {
  font-family: 'Special Gothic Expanded One', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.special-gothic-regular {
  font-family: 'Special Gothic', sans-serif;
  font-weight: 900;
  font-style: normal;
}
</style>
