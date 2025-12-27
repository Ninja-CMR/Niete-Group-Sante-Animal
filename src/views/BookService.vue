<template>
  <section  id="bookservice" class="py-20 bg-[#F9F8F3]">
    <div class="max-w-5xl mx-auto px-6">
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

        <div class="md:w-1/3 bg-[#004D40] p-10 text-white flex flex-col justify-between">
          <div>
            <h3 class="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-4">Planification</h3>
            <h4 class="text-3xl font-serif mb-6 italic">Prendre rendez-vous</h4>
            <p class="text-sm opacity-80 leading-relaxed mb-8">
              Évitez l'attente en programmant votre consultation en ligne. Nos vétérinaires vous reçoivent à PK14.
            </p>
          </div>
          <div class="space-y-4">
            <p class="text-sm italic text-green-400">Réponse rapide via WhatsApp</p>
          </div>
        </div>

        <div class="md:w-2/3 p-10">
          <form @submit.prevent="onSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Service souhaité</label>
              <select v-model="service" :class="{'border-red-500': errors.service}" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none text-sm focus:border-[#C5A059]">
                <option value="" disabled>Sélectionner un service</option>
                <option v-for="s in servicesList" :key="s" :value="s">{{ s }}</option>
              </select>
              <p class="text-[10px] text-red-500 font-bold mt-1 uppercase">{{ errors.service }}</p>
            </div>

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Nom Complet</label>
              <input v-model="name" type="text" :class="{'border-red-500': errors.name}" placeholder="Ex: Jean Douala" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none text-sm focus:border-[#C5A059]">
              <p class="text-[10px] text-red-500 font-bold mt-1 uppercase">{{ errors.name }}</p>
            </div>

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Date de visite</label>
              <input v-model="date" type="date" :class="{'border-red-500': errors.date}" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none text-sm focus:border-[#C5A059]">
              <p class="text-[10px] text-red-500 font-bold mt-1 uppercase">{{ errors.date }}</p>
            </div>

            <div class="col-span-1">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Créneau</label>
              <select v-model="timeRange" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none text-sm focus:border-[#C5A059]">
                <option value="matin">Matin (08h - 12h)</option>
                <option value="apres-midi">Après-midi (13h - 18h)</option>
              </select>
            </div>

            <div class="col-span-full">
              <label class="block text-[#004D40] text-xs font-bold uppercase mb-2">Notes particulières</label>
              <textarea v-model="notes" rows="3" class="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none text-sm focus:border-[#C5A059]" placeholder="Race, symptômes..."></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="col-span-full bg-[#C5A059] text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:bg-[#a6864a] transition-all flex justify-center items-center gap-2">
              <span v-if="isSubmitting">Traitement...</span>
              <span v-else>Confirmer ma demande de RDV</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBooking } from '../composables/useBooking.ts';

const servicesList = ["Consultation Générale", "Vaccination", "Chirurgie", "Toilettage Médical", "Urgence"];

const {
  name, service, date, timeRange, notes,
  errors, isSubmitting, onSubmit
} = useBooking("237695851502");
</script>