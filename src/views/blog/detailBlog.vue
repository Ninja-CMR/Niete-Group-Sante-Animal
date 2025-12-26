<template>
  <div class="bg-[#F9F8F3] min-h-screen pb-20">
    <div class="h-[60vh] relative overflow-hidden">
      <img :src="post.image" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/40 flex items-end">
        <div class="max-w-4xl mx-auto px-6 pb-12 text-white">
          <span class="bg-[#C5A059] px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">
            {{ post.category }}
          </span>
          <h1 class="text-4xl md:text-6xl font-serif font-bold mb-4 italic">{{ post.title }}</h1>
          <p class="opacity-80 text-sm italic">Publié le {{ post.date }} par l'Équipe Médicale Niete</p>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-6 mt-12">
      <router-link to="/blog" class="text-[#004D40] font-bold text-xs uppercase tracking-widest flex items-center mb-8 hover:text-[#C5A059]">
        ← Retour au blog
      </router-link>

      <div class="prose prose-lg text-gray-700 leading-relaxed font-light">
        <p class="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-[#004D40] first-letter:mr-3 first-letter:float-left">
          {{ post.content }}
        </p>
        <h2 class="text-[#004D40] text-2xl font-serif font-bold mt-10 mb-4 italic">L'importance du suivi à PK14</h2>
        <p>Expertise et dévouement au service de la santé animale depuis plus de 10 ans au Cameroun...</p>
      </div>

      <div class="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-[#004D40] rounded-full flex items-center justify-center text-[#C5A059] font-serif text-xl">N</div>
          <div>
            <p class="text-[#004D40] font-bold text-sm uppercase">Niete Group</p>
            <p class="text-gray-400 text-[10px]">Santé Animale - Douala</p>
          </div>
        </div>
        <button class="bg-[#004D40] text-white px-6 py-2 rounded text-xs font-bold uppercase hover:bg-[#C5A059] transition">
          Partager l'article
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['id']);

const post = computed(() => {
  return {
    title: "Prévenir les tiques à Douala pendant la saison des pluies",
    category: "Santé",
    date: "12 Décembre 2025",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    content: "L'humidité de PK14 favorise la prolifération des parasites. Il est essentiel de traiter vos animaux de manière préventive dès le début de la saison. Notre clinique propose des solutions adaptées au climat local..."
  };
});
</script>