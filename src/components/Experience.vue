<template>  <section id="experience" class="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24">
    <h2 class="text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase text-[var(--color-fg)] font-light mb-12 sm:mb-16 md:mb-20">
      Experience
    </h2>

    <!-- Experience Item -->
    <div class="relative pl-8 sm:pl-10 md:pl-12 pb-12 sm:pb-16">
      <div class="gradient-line"></div>
      
      <div>
        <!-- Header -->
        <div class="mb-6 sm:mb-8">
          <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-fg)] mb-2 sm:mb-3">
            Siemens Healthineers
          </h3>
          <p class="text-xs md:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[var(--color-muted)]/60 font-light">
            Software Developer · <span class="text-[var(--color-accent)]">July 2022 — Present</span>
          </p>
        </div>

        <!-- Summary -->
        <p class="text-base sm:text-lg md:text-xl text-[var(--color-fg)] leading-relaxed font-normal max-w-2xl mb-6 sm:mb-8">
          Building and scaling <span class="text-[var(--color-accent)] italic font-medium">high-throughput medical data platforms</span> with a focus
          on reliability and performance.
        </p>        <!-- Details - Always visible -->
        <ul class="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <li class="text-sm sm:text-base text-[var(--color-fg)]/80 leading-relaxed font-normal flex items-start gap-2 sm:gap-3">
            <span class="text-[var(--color-accent)] mt-1 sm:mt-1.5 text-xs flex-shrink-0">→</span>
            <span>Owned core <span class="text-[var(--color-fg)] font-medium">data-processing components</span> handling large-scale datasets in production</span>
          </li>
          <li class="text-sm sm:text-base text-[var(--color-fg)]/80 leading-relaxed font-normal flex items-start gap-2 sm:gap-3">
            <span class="text-[var(--color-accent)] mt-1 sm:mt-1.5 text-xs flex-shrink-0">→</span>
            <span>Designed <span class="text-[var(--color-fg)] font-medium">gRPC and WebSocket</span> communication for low-latency service integration</span>
          </li>
          <li class="text-sm sm:text-base text-[var(--color-fg)]/80 leading-relaxed font-normal flex items-start gap-2 sm:gap-3">
            <span class="text-[var(--color-accent)] mt-1 sm:mt-1.5 text-xs flex-shrink-0">→</span>
            <span>Containerized and decoupled services into <span class="text-[var(--color-fg)] font-medium">Docker-based microservices</span> on Kubernetes (K2s)</span>
          </li>
          <li class="text-sm sm:text-base text-[var(--color-fg)]/80 leading-relaxed font-normal flex items-start gap-2 sm:gap-3">
            <span class="text-[var(--color-accent)] mt-1 sm:mt-1.5 text-xs flex-shrink-0">→</span>
            <span>Built <span class="text-[var(--color-fg)] font-medium">CI/CD pipelines</span> and automated testing frameworks to accelerate releases</span>
          </li>
        </ul>

        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">C#</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">C++</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">Java</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">.NET</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">SQL</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">gRPC</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">WebSockets</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">Azure</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">Docker</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">Kubernetes</span>
          <span class="text-xs tracking-wider text-[var(--color-accent)] font-light px-3 py-1 border border-[var(--color-accent)]/30 rounded-sm">CI/CD</span>
        </div>
      </div>    </div>
  </section>
</template>

<style scoped>
.gradient-line {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    #8b5cf6 0%,
    #a78bfa 25%,
    #8b5cf6 50%,
    #6d28d9 75%,
    #8b5cf6 100%
  );
  background-size: 100% 200%;
  animation: gradient-flow 4s linear infinite;
}

@keyframes gradient-flow {
  0% {
    background-position: center 0%;
  }
  100% {
    background-position: center 200%;
  }
}
</style>