<template>
  <section class="py-16 bg-[#F9F8F3] border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-[#004D40] text-xs font-bold tracking-[0.4em] uppercase opacity-60">
          Ils nous font confiance & Nous accompagnent
        </h2>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
        <div v-for="partner in partners" :key="partner.id" class="group">
          <img
              :src="partner.logo"
              :alt="partner.name"
              class="h-12 md:h-16 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
              :title="partner.name"
          />
        </div>
      </div>

      <div class="mt-16 p-8 bg-white rounded-2xl border border-[#C5A059]/20 flex flex-col md:flex-row items-center gap-8">
        <div class="flex-shrink-0 bg-[#004D40] p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h4 class="text-[#004D40] font-bold text-lg uppercase tracking-tight">Engagement Communautaire</h4>
          <p class="text-gray-600 text-sm italic">
            Niete Group collabore activement avec les associations de protection animale de Douala et l'Ordre National des Vétérinaires du Cameroun pour promouvoir la santé publique à PK14.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import onvc from '../assets/partenaire/onvc.jpeg'
import gfs from '../assets/partenaire/GFS.jpeg'
import cmurbairne from '../assets/partenaire/cmurbairne.png'
import caphavet from '../assets/partenaire/caphavet.jpeg'

const partners = ref([
  { id: 1, name: "ONVC - Cameroun", logo: onvc },
  { id: 2, name: "Caphavet", logo: caphavet},
  { id: 3, name: "Global Freightage Services ", logo: gfs },
  { id: 4, name: "Communauté urbaine de Douala", logo:  cmurbairne  }
]);
</script>