<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-accent)]/10">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
      <!-- Left: Brand -->
      <a href="#home" class="text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[var(--color-fg)] font-normal hover:text-[var(--color-accent)] transition-colors duration-300">
        Kartik.Dev
      </a>      <!-- Right: Navigation Links -->
      <ul class="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        <li class="hidden sm:block">
          <a href="#home" class="text-xs sm:text-sm md:text-base tracking-[0.05em] text-[var(--color-fg)]/70 font-medium hover:text-[var(--color-accent)] transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#experience" class="text-xs sm:text-sm md:text-base tracking-[0.05em] text-[var(--color-fg)]/70 font-medium hover:text-[var(--color-accent)] transition-colors duration-300">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" class="text-xs sm:text-sm md:text-base tracking-[0.05em] text-[var(--color-fg)]/70 font-medium hover:text-[var(--color-accent)] transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" class="text-xs sm:text-sm md:text-base tracking-[0.05em] text-[var(--color-fg)]/70 font-medium hover:text-[var(--color-accent)] transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
