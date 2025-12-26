<template>
  <section class="py-20 bg-[#F9F8F3]">
    <div class="max-w-5xl mx-auto px-6">
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

        <div class="md:w-1/3 bg-[#004D40] p-10 text-white flex flex-col justify-between">
          <div>
            <h3 class="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-4">Planification</h3>
            <h4 class="text-3xl font-serif mb-6">Prendre rendez-vous</h4>
            <p class="text-sm opacity-80 leading-relaxed mb-8">
              Évitez l'attente en programmant votre consultation en ligne. Nos vétérinaires vous reçoivent à PK14 du lundi au samedi.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-[#C5A059]"><i class="fas fa-phone"></i></span>
              <span class="text-sm">+237 XXX XXX XXX</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-[#C5A059]"><i class="fab fa-whatsapp"></i></span>
              <span class="text-sm italic text-green-400">Réponse rapide</span>
            </div>
          </div>
        </div>

        <div class="md:w-2/3 p-10 bg-white">
          <form @submit.prevent="handleBooking" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Service souhaité</label>
              <select v-model="form.service" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-[#C5A059] outline-none text-sm transition">
                <option value="" disabled>Sélectionner un service</option>
                <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Votre Nom Complet</label>
              <input type="text" v-model="form.name" placeholder="Ex: Jean Douala" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-[#C5A059] outline-none text-sm transition">
            </div>

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Date de visite</label>
              <input type="date" v-model="form.date" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-[#C5A059] outline-none text-sm">
            </div>

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Heure</label>
              <select v-model="form.time" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-[#C5A059] outline-none text-sm transition">
                <option value="matin">Matin (08h - 12h)</option>
                <option value="apres-midi">Après-midi (13h - 18h)</option>
              </select>
            </div>

            <div class="col-span-full">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Notes particulières (Animal, symptômes...)</label>
              <textarea v-model="form.notes" rows="3" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-[#C5A059] outline-none text-sm transition" placeholder="Précisez la race et le motif..."></textarea>
            </div>

            <div class="col-span-full pt-4">
              <button type="submit" class="w-full bg-[#C5A059] text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:bg-[#a6864a] transition-all transform hover:-translate-y-1">
                Confirmer ma demande de RDV
              </button>
              <p class="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-tighter">
                Un agent Niete Group vous contactera pour confirmer l'horaire précis.
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ["Consultation Générale", "Vaccination", "Chirurgie", "Toilettage Médical", "Urgence"];

const form = ref({
  service: '',
  name: '',
  date: '',
  time: 'matin',
  notes: ''
});

const handleBooking = () => {
  alert(`Merci ${form.value.name}, votre demande pour une ${form.value.service} a été envoyée !`);
  // Ici vous pouvez intégrer un appel API (Firebase, Node.js...)
};
</script>