<script setup lang="ts">
import { HomeIcon, RectangleStackIcon, UserIcon } from '@heroicons/vue/24/solid'
import { Linkedin, Github } from 'lucide-vue-next'
import { ref } from 'vue'

const navItems = ref([
  { name: 'home', icon: HomeIcon, path: '/', isExternal: false },
  { name: 'projects', icon: RectangleStackIcon, path: '/projects', isExternal: false },
  { name: 'profile', icon: UserIcon, path: '/profile', isExternal: false },
  {
    name: 'linkedin',
    icon: Linkedin,
    path: 'https://www.linkedin.com/in/kharl-chris-an-aquino-b6617625b',
    isExternal: true,
  },
  {
    name: 'home',
    icon: Github,
    path: 'https://www.github.com/kharlitoTheProgrammer',
    isExternal: true,
  },
])
</script>

<template>
  <main class="bg-black min-h-screen pt-5">
    <header>
      <nav class="bg-[#222222] text-white h-[3rem] w-60 mx-auto rounded-xl">
        <ul class="flex justify-evenly items-center h-full">
          <li v-for="(item, index) in navItems" :key="index">
            <RouterLink
              class="flex items-center justify-center hover:bg-white hover:text-[#222222] rounded-xl p-3 transition duration-200 cursor-pointer"
              :to="item.path"
              v-if="!item.isExternal"
            >
              <component :is="item.icon" class="w-6 h-6" />
            </RouterLink>
            <a
              :href="item.path"
              v-else
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center hover:bg-white hover:text-[#222222] rounded-xl p-3 transition duration-200 cursor-pointer"
            >
              <component :is="item.icon" class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <RouterView />
  </main>
</template>
