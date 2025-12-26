<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="max-w-xl">
          <h2 class="text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-2">Conseils & Actualités</h2>
          <h3 class="text-[#004D40] text-4xl font-serif">Le Mag de Niete Group</h3>
        </div>
        <router-link :to="{ name: 'blog-list' }" class="mt-6 md:mt-0 text-[#004D40] font-bold border-b-2 border-[#C5A059] hover:text-[#C5A059] transition-colors pb-1 uppercase text-sm">
          Voir tous les articles
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <router-link
            v-for="post in articles"
            :key="post.id"
            :to="{ name: 'blog-detail', params: { id: post.id } }"
            class="group cursor-pointer block"
        >
          <div class="relative overflow-hidden rounded-xl mb-5 shadow-sm h-64">
            <img
                :src="post.image || '@/assets/default-placeholder.jpg'"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-[#004D40] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
              {{ post.category }}
            </div>
          </div>

          <div class="space-y-3">
            <span class="text-[#C5A059] text-xs font-semibold">{{ post.date }}</span>
            <h4 class="text-[#004D40] text-xl font-bold leading-tight group-hover:text-[#C5A059] transition-colors">
              {{ post.title }}
            </h4>
            <p class="text-gray-600 text-sm line-clamp-3 italic">
              {{ post.excerpt }}
            </p>
            <div class="pt-2 flex items-center text-[#004D40] font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Lire la suite
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const articles = ref([
  {
    id: 1,
    title: "Prévenir les tiques à Douala pendant la saison des pluies",
    excerpt: "L'humidité de PK14 favorise la prolifération des parasites. Voici nos conseils pour protéger votre chien.",
    category: "Santé",
    date: "12 Décembre 2025",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "La clinique Niete Group fête ses 10 ans d'existence",
    excerpt: "Retour sur une décennie de soins passionnés à PK14 et présentation de nos nouveaux équipements.",
    category: "Actualité",
    date: "05 Décembre 2025",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    title: "Comment bien choisir les croquettes de votre chat ?",
    excerpt: "Toutes les croquettes ne se valent pas. Notre vétérinaire vous aide à décrypter les étiquettes.",
    category: "Nutrition",
    date: "28 Novembre 2025",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=500"
  }
]);
</script>