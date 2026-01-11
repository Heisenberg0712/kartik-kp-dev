<template>
  <div class="scroll-smooth">
    <Navbar />
    <main
      class="min-h-screen font-sans text-fg
             bg-gradient-to-br
             from-[#0b0d10] via-[#1f2937] to-black
             bg-[length:300%_300%]
             animate-[gradient-flow_30s_linear_infinite]"
    >
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import { useScrollAnimation } from "./composables/useScrollAnimation";

useScrollAnimation();
</script>
