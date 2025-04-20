<script setup lang="ts">
import { HomeIcon, RectangleStackIcon, UserIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const navItems = ref([
  { name: 'home', icon: HomeIcon },
  { name: 'projects', icon: RectangleStackIcon },
  { name: 'profile', icon: UserIcon },
  { name: 'home', icon: HomeIcon },
  { name: 'home', icon: HomeIcon },
])
</script>

<template>
  <main class="bg-black min-h-screen pt-5">
    <header>
      <nav class="bg-[#222222] text-white h-[3rem] w-60 mx-auto rounded-xl">
        <ul class="flex justify-evenly items-center h-full">
          <li
            class="flex items-center justify-center hover:bg-white hover:text-[#222222] rounded-xl p-3 transition duration-200 cursor-pointer"
            v-for="(item, index) in navItems"
            :key="index"
          >
            <component :is="item.icon" class="w-6 h-6" />
          </li>
        </ul>
      </nav>
    </header>
  </main>
</template>
