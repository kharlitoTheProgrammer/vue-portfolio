<script setup lang="ts">
import { HomeIcon, RectangleStackIcon, UserIcon } from '@heroicons/vue/24/solid'
import { Linkedin, Github } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import LoadingScreen from './components/icons/LoadingScreen.vue'

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
    name: 'github',
    icon: Github,
    path: 'https://www.github.com/kharlitoTheProgrammer',
    isExternal: true,
  },
])
const selectedButton = ref<string>('home')

// LoadingScreen
const loading = ref<boolean>(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <div>
    <!-- Loading Screen with Fade -->
    <Transition name="fade" mode="out-in">
      <LoadingScreen v-if="loading" key="loading" />
    </Transition>

    <!-- Main Content Slide-In -->
    <Transition name="slide" mode="out-in">
      <main v-if="!loading" key="main" class="bg-[#1A2421] min-h-screen pt-5">
        <header>
          <nav class="bg-[#121815] text-white h-[3rem] w-60 mx-auto rounded-xl">
            <ul class="flex justify-evenly items-center h-full">
              <li
                v-for="(item, index) in navItems"
                :key="index"
                @click="!item.isExternal && (selectedButton = item.name)"
                :class="[
                  selectedButton === item.name
                    ? 'bg-[#a28b71] text-[#F0F0F0] rounded-xl'
                    : 'text-[#D5C7B2] hover:text-[#E6DCCB]',
                ]"
              >
                <RouterLink
                  v-if="!item.isExternal"
                  :to="item.path"
                  class="flex items-center justify-center hover:bg-[#E6DCCB] hover:text-white rounded-xl p-3 transition duration-200 cursor-pointer"
                >
                  <component :is="item.icon" class="w-6 h-6" />
                </RouterLink>
                <a
                  v-else
                  :href="item.path"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center hover:bg-[#E6DCCB] hover:text-white rounded-xl p-3 transition duration-200 cursor-pointer"
                >
                  <component :is="item.icon" class="w-6 h-6" />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <RouterView />
      </main>
    </Transition>
  </div>
</template>

<style scoped>
/* Fade (for loading) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide (for main content) */
.slide-enter-active {
  transition: all 0.6s ease-in-out;
}
.slide-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
