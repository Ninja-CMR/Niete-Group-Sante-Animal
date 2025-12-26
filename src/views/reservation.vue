<template>
  <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
    <div class="bg-white rounded-xl max-w-md w-full p-8 relative">
      <button @click="showModal = false" class="absolute top-4 right-4 text-gray-400">&times;</button>
      <h2 class="text-[#004D40] text-2xl font-serif mb-6">Programmer une visite</h2>

      <form class="space-y-4">
        <input type="text" placeholder="Votre Nom" class="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#C5A059] outline-none">
        <select class="w-full border p-3 rounded-md outline-none">
          <option>Type de soin (Vaccination, Urgence...)</option>
        </select>
        <input type="datetime-local" class="w-full border p-3 rounded-md outline-none">
        <button class="w-full bg-[#004D40] text-white py-3 rounded-md font-bold uppercase tracking-widest">
          Confirmer le RDV
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showModal = ref(false); // À piloter depuis le bouton du Header
</script>