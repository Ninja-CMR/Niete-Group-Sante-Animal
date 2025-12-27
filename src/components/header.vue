<script setup lang="ts">
import imageLogo  from '../assets/logoImage.jpg'

</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-[#F9F8F3] sticky top-0 z-50 shadow-sm">
    <div class="flex items-center">
      <img :src= imageLogo alt="Niete Group" class="h-14 lg:h-16">
    </div>

    <ul class="hidden md:flex space-x-8 text-[#004D40] font-medium uppercase text-sm tracking-wide">
      <a href="#propos" class="hover:text-[#C5A059] cursor-pointer">À propos</a>
      <a href="#services" class="hover:text-[#C5A059] cursor-pointer">Services</a>
      <a href="#team" class="hover:text-[#C5A059] cursor-pointer">L'Équipe</a>
    </ul>

    <a href="#bookservice"  class="bg-[#C5A059] text-white px-6 py-2 rounded shadow-md hover:bg-[#a6864a] transition-all">
      Prendre RDV
    </a>
  </nav>
</template>