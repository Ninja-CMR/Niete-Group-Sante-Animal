<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-2">Nos Moments</h2>
        <h3 class="text-[#004D40] text-4xl font-serif">Galerie Niete Group</h3>
        <div class="w-24 h-1 bg-[#C5A059] mx-auto mt-4"></div>
        <p class="text-gray-600 mt-6 max-w-xl mx-auto">
          Découvrez la vie quotidienne de notre clinique à PK14, nos installations et l'amour que nous portons à chaque patient.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="item in galleryItems"
            :key="item.id"
            class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-w-16 aspect-h-9"
        >
          <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-[#004D40]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h4 class="text-white text-xl font-bold mb-2">{{ item.title }}</h4>
              <p class="text-[#C5A059] text-sm">{{ item.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const galleryItems = ref([
  {
    id: 1,
    title: "Salle de Consultation",
    category: "Nos Installations",
    image: "https://images.unsplash.com/photo-1629904853716-95f553642337?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Chirurgie Assistée",
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1625246372813-f92500854245?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Chiots Heureux",
    category: "Nos Patients",
    image: "https://images.unsplash.com/photo-1596492784531-fa0181577884?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "L'Équipe en Action",
    category: "Vie à la Clinique",
    image: "https://images.unsplash.com/photo-1599388151897-393276f7c461?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Soins Ambulatoires",
    category: "Soins Quotidiens",
    image: "https://images.unsplash.com/photo-1588943211346-0908a176f675?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "Espace d'Attente",
    category: "Confort",
    image: "https://images.unsplash.com/photo-1629904851817-f2771b052140?auto=format&fit=crop&q=80&w=600"
  }
]);
</script>