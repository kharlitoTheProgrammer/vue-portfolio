<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { Download, Settings, Redo, X } from 'lucide-vue-next'
import { ref, type Component } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
interface HomeButton {
  icon: Component
  label: string
  action?: string
}
interface TechStack {
  icon: string
  label: string
}
interface DevTools {
  icon: string
  label: string
}
const techStacksFrontend = ref<TechStack[]>([
  { icon: 'logos:html-5', label: 'HTML' },
  { icon: 'logos:css-3', label: 'CSS' },
  { icon: 'logos:javascript', label: 'JavaScript' },
  { icon: 'logos:tailwindcss-icon', label: 'Tailwind CSS' },
  { icon: 'logos:vue', label: 'Vue' },
  { icon: 'logos:react', label: 'React (Basic)' },
  { icon: 'devicon:angular', label: 'Angular (Basic)' },
  { icon: 'logos:typescript-icon', label: 'TypeScript' },
])
const techStacksVersionControl = ref<TechStack[]>([
  { icon: 'logos:github-icon', label: 'Github' },
  { icon: 'skill-icons:npm-light', label: 'NPM' },
])
const techStackDevTools = ref<DevTools[]>([
  { icon: 'vscode-icons:file-type-vscode', label: 'Visual Studio Code' },
  { icon: 'logos:vitejs', label: 'Vite' },
  { icon: 'skill-icons:androidstudio-dark', label: 'Android Studio' },
])
const homeButtons = ref<HomeButton[]>([
  { icon: Download, label: 'Download my resume', action: 'download' },
  // { icon: Phone, label: 'Contact me', action: 'contact' },
])

// const contactMe = () => {
//   window.location.href = 'mailto:your.email@example.com'
// }

const isHidden = ref(true)
const toggleHidden = () => {
  isHidden.value = false
}
const currentCard = ref('frontend')
const moveCardToBack = (cardType: string) => {
  // Update the current card to the one clicked
  currentCard.value = cardType

  // After the clicked card is moved, determine which card to show next
  if (cardType === 'frontend') {
    currentCard.value = 'versionControl' // Move to Version Control
  } else if (cardType === 'versionControl') {
    currentCard.value = 'devTools' // Move to Dev Tools
  } else if (cardType === 'devTools') {
    currentCard.value = 'frontend' // Move back to Frontend
  }
}

const pdfUrl = ref('')
const showModal = ref<boolean>(false)
const showResume = () => {
  pdfUrl.value = '/vue-portfolio/resume/Resume_Kharl_Aquino.pdf'
  showModal.value = !showModal.value
}
</script>
<template>
  <div class="text-[#f0f0f0] flex flex-col pt-10 items-center gap-5 mx-10 max-h-screen">
    <div class="space-y-2">
      <span class="text-[42px] sm:text-6xl text-[#D5C7B2] special-gothic-expanded-one-regular"
        >Kharl Aquino</span
      >
      <p class="text-2xl sm:text-3xl text-[#A49581] text-center font-medium special-gothic-regular">
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
    <template v-for="(item, index) in homeButtons" :key="index">
      <button
        @click="showResume"
        class="bg-[#a28b71] text-white px-6 py-3 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:shadow-gray-100 transition-transform duration-300 special-gothic-expanded-one-regular text-sm animate-bounce mt-10"
      >
        <component :is="item.icon" />
        View my resume
      </button>
      <div
        class="fixed inset-0 backdrop-blur-lg mx-auto container z-50 flex justify-center items-center"
        v-if="showModal"
      >
        <div class="bg-white max-w-4xl w-full max-h-[98vh] rounded-lg px-3 overflow-hidden">
          <div class="flex justify-between py-4">
            <p class="text-black font-medium text-xl">Resume</p>
            <span class="text-black cursor-pointer">
              <X @click="showResume" />
            </span>
          </div>
          <!-- Adjust iframe styling -->
          <iframe :src="pdfUrl" class="w-full h-[calc(100vh-128px)] pb-4 rounded-lg"></iframe>
        </div>
      </div>
    </template>
    <div class="mt-10">
      <div class="flex items-center justify-center">
        <button @click="toggleHidden">
          <Settings
            :size="30"
            class="text-[#A49581] transition-transform duration-300 hover:rotate-180 cursor-pointer"
          />
        </button>
      </div>
      <Transition name="fade">
        <div class="relative w-55" v-if="isHidden">
          <Redo class="absolute right-30 bottom-5" />
          <p class="absolute right-35 rotate-350 -top-5">CLICK ME!</p>
        </div>
      </Transition>
    </div>
    <Transition name="bounce">
      <div class="relative w-full flex justify-center mt-5" v-if="!isHidden">
        <!-- Frontend Tools Card -->
        <CardComponent
          title="Frontend Tools"
          @click="moveCardToBack('frontend')"
          :class="{
            'z-10': currentCard === 'frontend',
            'z-0': currentCard !== 'frontend',
            'transform translate-x-2 translate-y-2': currentCard !== 'frontend',
            'bg-[#d1c1a1]': currentCard === 'frontend',
            'bg-[#a28b71]': currentCard !== 'frontend',
          }"
          class="absolute bg-[#a28b71] p-5 rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg special-gothic-regular"
        >
          <div class="grid grid-cols-4 gap-5 mt-5">
            <template v-for="(item, index) in techStacksFrontend" :key="index">
              <div
                class="flex flex-col justify-center items-center gap-2 transition-all hover:-translate-y-2"
              >
                <Icon :icon="item.icon" width="30" height="30" />
                <span class="text-center">{{ item.label }}</span>
              </div>
            </template>
          </div>
        </CardComponent>

        <!-- Version Control Card -->
        <CardComponent
          title="Version Control"
          @click="moveCardToBack('versionControl')"
          :class="{
            'z-10': currentCard === 'versionControl',
            'z-0': currentCard !== 'versionControl',
            'transform translate-x-2 translate-y-2': currentCard !== 'versionControl',
            'bg-[#d1c1a1]': currentCard === 'versionControl',
            'bg-[#a28b71]': currentCard !== 'versionControl',
          }"
          class="absolute bg-[#a28b71] p-5 rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg special-gothic-regular"
        >
          <div class="grid grid-cols-2 gap-5 mt-5">
            <template v-for="(item, index) in techStacksVersionControl" :key="index">
              <div
                class="flex flex-col justify-center items-center gap-2 transition-all hover:-translate-y-2"
              >
                <Icon :icon="item.icon" width="30" height="30" />
                <span>{{ item.label }}</span>
              </div>
            </template>
          </div>
        </CardComponent>

        <!-- Dev Tools Card -->
        <CardComponent
          title="Dev Tools"
          @click="moveCardToBack('devTools')"
          :class="{
            'z-10': currentCard === 'devTools',
            'z-0': currentCard !== 'devTools',
            'transform translate-x-2 translate-y-2': currentCard !== 'devTools',
            'bg-[#d1c1a1]': currentCard === 'devTools',
            'bg-[#a28b71]': currentCard !== 'devTools',
          }"
          class="absolute bg-[#a28b71] p-5 rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg special-gothic-regular"
        >
          <div class="grid grid-cols-2 gap-5 mt-5">
            <template v-for="(item, index) in techStackDevTools" :key="index">
              <div
                class="flex flex-col justify-center items-center gap-2 transition-all hover:-translate-y-2"
              >
                <Icon :icon="item.icon" width="30" height="30" />
                <span>{{ item.label }}</span>
              </div>
            </template>
          </div>
        </CardComponent>
      </div>
    </Transition>
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
.fade-only-leave-active {
  transition: opacity 0.8s ease;
}
.fade-only-leave-from {
  opacity: 1;
}
.fade-only-leave-to {
  opacity: 0;
}

/* bounce */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
