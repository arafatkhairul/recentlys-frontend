<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import TrustedBrands from './components/TrustedBrands.vue';
import About from './components/About.vue';
import BottomNavigation from './components/BottomNavigation.vue';
</script>

<template>
  <div class="min-h-screen bg-linear-dark">
    <div class="container">
      <Header />
      <RouterView />
      <TrustedBrands />
    </div>
    <About />
    <Footer />
    <BottomNavigation />
  </div>
</template>
