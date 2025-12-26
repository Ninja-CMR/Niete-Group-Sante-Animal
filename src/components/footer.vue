<template>
  <footer class="bg-[#004D40] text-white pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">

      <div class="col-span-1 md:col-span-1">
        <img :src=imageLogo alt="Niete Group" class="h-16 mb-6 " />
        <p class="text-sm opacity-70 leading-relaxed">
          Niete Group Santé Animale : 10 ans d'excellence vétérinaire au service de vos compagnons à Douala.
        </p>
        <div class="flex space-x-4 mt-6">
          <a href="#" class="text-[#C5A059] hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-[#C5A059] hover:text-white transition"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-[#C5A059] hover:text-white transition"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div>
        <h4 class="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-6">Navigation</h4>
        <ul class="space-y-3 text-sm opacity-80">
          <li class="hover:translate-x-2 transition-transform cursor-pointer">Accueil</li>
          <li class="hover:translate-x-2 transition-transform cursor-pointer">Nos Services</li>
          <li class="hover:translate-x-2 transition-transform cursor-pointer">L'Équipe</li>
          <li class="hover:translate-x-2 transition-transform cursor-pointer">Boutique (Bientôt)</li>
        </ul>
      </div>

      <div>
        <h4 class="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-6">Nous Trouver</h4>
        <ul class="space-y-4 text-sm opacity-80">
          <li class="flex items-start space-x-3">
            <i class="fas fa-map-marker-alt mt-1 text-[#C5A059]"></i>
            <span>PK14, Douala, Cameroun<br/><span class="text-[10px] italic text-[#C5A059]">Face à l'entrée principale</span></span>
          </li>
          <li class="flex items-center space-x-3">
            <i class="fas fa-phone text-[#C5A059]"></i>
            <span>+237 6XX XX XX XX</span>
          </li>
          <li class="flex items-center space-x-3 text-green-400 font-bold">
            <i class="fas fa-clock"></i>
            <span>Urgences 24h/24 - 7j/7</span>
          </li>
        </ul>
      </div>

      <div class="rounded-xl overflow-hidden h-48 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.23456789!2d9.78!3d4.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDUnMjQuMCJOIDnCsDQ2JzQ4LjAiRQ!5e0!3m2!1sfr!2scm!4v123456789"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy">
        </iframe>
      </div>

    </div>

    <div class="max-w-6xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-40 uppercase tracking-widest">
      <p>&copy; 2025 Niete Group Santé Animale. Tous droits réservés.</p>
      <p>Designé avec soin pour PK14 - Douala</p>
    </div>
  </footer>
</template>
<script setup>
  import imageLogo from '../assets/logoImage.jpg'
</script>