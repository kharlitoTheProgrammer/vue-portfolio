<script setup lang="ts">
import { HomeIcon, RectangleStackIcon, UserIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const navItems = ref([
  { name: 'home', icon: HomeIcon, path: '/' },
  { name: 'projects', icon: RectangleStackIcon, path: '/projects' },
  { name: 'profile', icon: UserIcon, path: '/profile' },
  { name: 'home', icon: HomeIcon, path: '/' },
  { name: 'home', icon: HomeIcon, path: '/' },
])
</script>

<template>
  <main class="bg-black min-h-screen pt-5">
    <header>
      <nav class="bg-[#222222] text-white h-[3rem] w-60 mx-auto rounded-xl">
        <ul class="flex justify-evenly items-center h-full">
          <RouterLink
            class="flex items-center justify-center hover:bg-white hover:text-[#222222] rounded-xl p-3 transition duration-200 cursor-pointer"
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
          >
            <RouterLink :to="item.path">
              <component :is="item.icon" class="w-6 h-6" />
            </RouterLink>
          </RouterLink>
        </ul>
      </nav>
    </header>
    <RouterView />
  </main>
</template>
