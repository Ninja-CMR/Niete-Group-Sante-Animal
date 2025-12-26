<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-[#004D40] text-3xl font-serif">Questions Fréquentes</h2>
        <div class="w-16 h-1 bg-[#C5A059] mx-auto mt-4"></div>
      </div>

      <div class="space-y-4">
        <div v-for="(item, index) in faqs" :key="index" class="border border-gray-100 rounded-xl overflow-hidden">
          <button
              @click="activeIndex = activeIndex === index ? null : index"
              class="w-full flex justify-between items-center p-5 text-left bg-[#F9F8F3] hover:bg-gray-50 transition"
          >
            <span class="text-[#004D40] font-bold text-sm uppercase tracking-tight">{{ item.q }}</span>
            <span class="text-[#C5A059]">{{ activeIndex === index ? '-' : '+' }}</span>
          </button>

          <div v-if="activeIndex === index" class="p-5 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
            {{ item.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const activeIndex = ref(null);

const faqs = [
  { q: "Quels sont vos horaires à PK14 ?", a: "Nous sommes ouverts du lundi au samedi de 08h à 18h. Une équipe de garde est disponible 24h/24 pour les urgences vitales." },
  { q: "Faut-il prendre rendez-vous pour une vaccination ?", a: "Il est préférable de prendre rendez-vous via ce site pour réduire votre attente, mais nous acceptons les visites sans RDV selon la disponibilité." },
  { q: "Proposez-vous des services de toilettage ?", a: "Oui, Niete Group propose un service de toilettage médicalisé et d'hygiène pour chiens et chats." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Nous acceptons les paiements en espèces, par Mobile Money (Orange/MTN) et par carte bancaire." }
];
</script>