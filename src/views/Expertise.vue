<template>
  <section class="py-20 bg-white px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h3 class="text-[#C5A059] font-bold mb-4 border-l-4 border-[#004D40] pl-4">NOTRE HISTOIRE</h3>
        <p class="text-gray-700 leading-relaxed text-lg">
          Reconnue localement à Douala, la clinique <strong>Niete Group Santé Animale</strong> s'est imposée par la rigueur de ses diagnostics et la chaleur de son accueil. Notre équipe multidisciplinaire veille sur vos animaux 24h/24.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-[#004D40] font-bold text-xl mb-4 uppercase">Services & Expertise</h3>
        <div v-for="service in services" :key="service.id" class="flex items-start space-x-4 p-4 hover:bg-[#F9F8F3] rounded-lg transition">
          <span class="text-[#C5A059] text-2xl">★</span>
          <div>
            <h4 class="font-bold text-[#004D40]">{{ service.title }}</h4>
            <p class="text-sm text-gray-500">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { id: 1, title: 'Chirurgie Avancée', desc: 'Bloc opératoire stérile et équipements modernes.' },
  { id: 2, title: 'Analyses Médicales', desc: 'Laboratoire interne pour des résultats rapides.' },
  { id: 3, title: 'Nutrition Animale', desc: 'Conseils et vente de produits premium.' }
];
</script>