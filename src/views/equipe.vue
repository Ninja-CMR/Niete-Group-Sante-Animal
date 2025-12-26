<template>
  <section class="py-20 bg-[#F9F8F3]">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-2">Nos Experts</h2>
        <h3 class="text-[#004D40] text-4xl font-serif">L'Équipe Niete Group</h3>
        <div class="w-24 h-1 bg-[#C5A059] mx-auto mt-4"></div>
        <p class="text-gray-600 mt-6 max-w-xl mx-auto">
          Des professionnels passionnés dévoués à la santé de vos compagnons à Douala PK14 depuis plus de 10 ans.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
            v-for="member in team"
            :key="member.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div class="relative h-72 overflow-hidden">
            <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#004D40]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span class="text-white text-xs italic">{{ member.specialty }}</span>
            </div>
          </div>

          <div class="p-6 text-center border-t border-gray-50">
            <h4 class="text-[#004D40] font-bold text-lg mb-1 uppercase tracking-tight">
              {{ member.name }}
            </h4>
            <p class="text-[#C5A059] font-medium text-sm mb-3">
              {{ member.role }}
            </p>
            <div class="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" class="text-[#004D40] hover:text-[#C5A059]"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="text-[#004D40] hover:text-[#C5A059]"><i class="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import imageEquipe1 from '../assets/Equipe/imageEquipe1.jpeg'
import imageLogo from '../assets/logoImage.jpg'


const team = ref([
  {
    id: 1,
    name: "Dr. Jean Petit Pierre",
    role: "Fondateur & Vétérinaire Principal",
    specialty: "Chirurgie & Diagnostic",
    image: imageEquipe1
  },
  {
    id: 2,
    name: "Dr. Marie Kamga",
    role: "Vétérinaire Associée",
    specialty: "Médecine Interne",
    image: imageLogo
  },
  {
    id: 3,
    name: "Samuel Eto'o",
    role: "Assistant Vétérinaire",
    specialty: "Soins & Récupération",
    image: imageLogo
  },
  {
    id: 4,
    name: "Alice Ngassa",
    role: "Responsable Accueil",
    specialty: "Gestion Clientèle",
    image: imageLogo
  }
]);
</script>