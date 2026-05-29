<template>
  <div v-html="html"></div>
</template>

<script setup>
const html = `

  <!-- Top Space Banner -->
  <div class="space-bg h-[320px] w-full relative">
    <div class="absolute inset-0 bg-black/30"></div>
  </div>

  <!-- Main Content -->
  <div class="relative -mt-28 z-20 flex items-center justify-center px-6">

    <div class="max-w-5xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2">

      <!-- Astronaut Side -->
      <div class="bg-gray-50 flex items-center justify-center p-8 relative">

        <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" alt="Astronaut" class="w-[320px] md:w-[420px] object-contain float-astronaut drop-shadow-2xl rounded-3xl">

      </div>

      <!-- Text Side -->
      <div class="p-10 md:p-14 flex flex-col justify-center">

        <span class="uppercase tracking-[0.3em] text-gray-400 text-sm font-semibold">
          Error 404
        </span>

        <h1 class="text-5xl md:text-6xl font-black text-gray-900 mt-3 leading-tight">
          Lost in Space
        </h1>

        <p class="text-gray-500 text-lg mt-5 leading-relaxed">
          The page you are looking for seems to have drifted into deep space.
          Our astronaut searched the galaxy but could not find it.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 mt-10">

          <a href="/" class="px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:scale-105 transition duration-300">
            Return Home
          </a>

          <button onclick="history.back()" class="px-8 py-4 border border-gray-300 rounded-2xl font-semibold text-gray-700 hover:bg-gray-100 transition">
            Go Back
          </button>

        </div>

      </div>

    </div>

  </div>

  <!-- Floating Planet -->
  <img src="https://images.unsplash.com/photo-1614728894747-a83421789f10?q=80&amp;w=600&amp;auto=format&amp;fit=crop" class="absolute top-12 right-10 w-28 rounded-full shadow-xl opacity-90" alt="Planet">



`
</script>

<style>

    @keyframes float {
      0%,100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }

    .float-astronaut {
      animation: float 5s ease-in-out infinite;
    }

    .space-bg {
      background-image:
      url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1974&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
    }
  
</style>
