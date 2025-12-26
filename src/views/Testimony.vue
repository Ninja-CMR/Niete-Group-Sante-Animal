<template>
  <section class="py-20 bg-[#F9F8F3]">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-2">Témoignages</h2>
      <h3 class="text-[#004D40] text-4xl font-serif mb-12">Ce que disent nos clients</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="review in reviews" :key="review.id" class="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-[#C5A059] flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div class="flex justify-center text-[#C5A059] mb-4 text-xs">
              <i v-for="i in 5" :key="i" class="fas fa-star mx-0.5"></i>
            </div>
            <p class="text-gray-600 italic text-sm leading-relaxed mb-6">
              "{{ review.text }}"
            </p>
          </div>
          <div>
            <p class="text-[#004D40] font-bold uppercase text-xs tracking-widest">{{ review.author }}</p>
            <p class="text-[10px] text-gray-400 mt-1">{{ review.animal }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  { id: 1, author: "M. Ewane", animal: "Propriétaire de Rex (Berger Allemand)", text: "Une équipe professionnelle à PK14. Ils ont sauvé mon chien après un accident. 10 ans de confiance mérités." },
  { id: 2, author: "Mme Bella", animal: "Propriétaire de Luna (Chat)", text: "La meilleure clinique de Douala. L'accueil est chaleureux et les soins sont de qualité supérieure." },
  { id: 3, author: "Dr. Fossuo", animal: "Client fidèle", text: "Je recommande Niete Group pour leur plateau technique moderne et leur empathie envers les animaux." }
];
</script>