<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div
    class="bg-[#a28b71] w-80 h-75 sm:h-70 sm:w-120 rounded-lg border border-[#a28b71] shadow-md shadow-[#b8ac9e] backdrop-blur-4xl flex flex-col"
  >
    <div>
      <h1 class="text-xl text-white text-center">{{ title }}</h1>
    </div>
    <slot></slot>
  </div>
</template>
