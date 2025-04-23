<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
</script>
<template>
  <div class="text-white font-inter mx-auto container pt-10 max-h-screen">
    <h1 class="text-3xl text-center special-gothic-expanded-one-regular">Projects</h1>
    <Card class="mt-5 bg-gray-200">
      <CardTitle class="mx-10 text-2xl">S.O. Application</CardTitle>
      <CardContent class="mx-4">
        THIS HERE IS THE CARD CONTENT OR IMAGES FOR SO APPLICATION
      </CardContent>
    </Card>
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
  font-weight: 400;
  font-style: normal;
}
</style>
