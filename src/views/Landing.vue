<script setup lang="ts">
 import Header from '../components/header.vue'
 import Hero from '../views/Hero.vue'
 import Expertise from '../views/Expertise.vue'
 import reservation from '../views/reservation.vue'
 import equipe from '../views/equipe.vue'
 import News from '../views/blog/News.vue'
 import Pattern from '../views/partenaires.vue'
 import Gallery from '../views/Gallery.vue'
 import BookService from '../views/BookService.vue'
 import Testimony from '../views/Testimony.vue'
 import faq from '../views/FAQ.vue'
 import Footer from '../components/footer.vue'
</script>

<template>
 <Header/>
  <Hero/>
  <Expertise/>
  <reservation/>
  <equipe/>
  <News/>
  <Gallery/>
  <Pattern/>
  <BookService/>
  <Testimony/>
  <faq/>
  <Footer/>
</template>

<style scoped>

</style>