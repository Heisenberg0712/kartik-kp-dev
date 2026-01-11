<template>
  <section id="home" class="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 md:pt-40 pb-12">
    <!-- Brand Identity -->
    <div class="mb-12 sm:mb-16 md:mb-20 scroll-animate">
      <h1
        class="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[var(--color-fg)] font-extralight mb-4 sm:mb-6">
        Kartik Prajapat
      </h1>
      <div class="w-16 sm:w-20 h-[2px] bg-[var(--color-accent)]/50"></div>
    </div>    <!-- Main Statement -->
    <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.15] mb-6 sm:mb-8 max-w-3xl scroll-animate scroll-animate-delay">
      <span class="gradient-text">
        Building reliable systems with clean code.
      </span>
    </h2><!-- Role & Description -->
    <div class="mt-8 sm:mt-12 md:mt-16 max-w-2xl space-y-6 sm:space-y-8 scroll-animate scroll-animate-delay">
      <p class="text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[var(--color-fg)] font-normal">
        Software Engineer
      </p>

      <p class="text-base sm:text-lg md:text-xl text-[var(--color-fg)] leading-relaxed font-normal">
        I am Kartik, a Bangalore-based software engineer at 
        <span class="text-[var(--color-accent)] font-medium">Siemens Healthineers</span>.
      </p>

      <p class="text-base sm:text-lg md:text-xl text-[var(--color-fg)] leading-relaxed font-normal">
        I work on reliability-critical backend systems using 
        <span class="text-[var(--color-accent)]">C#</span>, 
        <span class="text-[var(--color-accent)]">.NET</span>, and 
        <span class="text-[var(--color-accent)]">Java</span> — building software where correctness is not optional.
      </p>    </div>
  </section>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(
    90deg,
    #e5e7eb 0%,
    #8b5cf6 25%,
    #a78bfa 50%,
    #8b5cf6 75%,
    #e5e7eb 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 4s linear infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Reduced from 8s to 4s for faster animation */
.gradient-text {
  animation: gradient-shift 4s linear infinite;
}
</style>