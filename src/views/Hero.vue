<template>
  <section class="bg-[#F9F8F3] pt-12 pb-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-[#004D40] text-lg font-semibold tracking-[0.2em] mb-2">BIENVENUE CHEZ NIETE GROUP</h2>
      <h1 class="text-[#004D40] text-4xl md:text-6xl font-serif mb-4">10 ans de passion, une vie de soins.</h1>
      <p class="text-gray-600 max-w-2xl mx-auto mb-10">
        Basée à PK14, Douala, notre clinique allie expertise médicale et amour des animaux pour garantir le bien-être de vos compagnons.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div class="rounded-xl overflow-hidden h-64 shadow-lg">
          <img :src=imageHero3 class="w-full h-full object-cover">
        </div>
        <div class="rounded-xl overflow-hidden h-80 shadow-2xl border-4 border-white">
          <img :src=imageHero2 class="w-full h-full object-cover">
        </div>
        <div class="rounded-xl overflow-hidden h-64 shadow-lg">
          <img :src=imageHero1 class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import imageHero1 from '../assets/hero image/heroImage1.jpg'
  import imageHero2 from '../assets/hero image/heroImage2.jpg'
  import imageHero3 from '../assets/hero image/heroImage3.jpg'

</script>