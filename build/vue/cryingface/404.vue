<template>
  <div v-html="html"></div>
</template>

<script setup>
const html = `

    <div class="flex flex-col items-center text-black font-bold font-sans">
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" class="mb-5 mt-20 h-[342px]">

        <span class="text-[3.3em] font-extrabold mb-10">
            404 PAGE
        </span>

        <p class="text-lg mb-3">
            The page you were looking for could not be found
        </p>

        <p class="text-sm mb-6">
            ... Back to previous page
        </p>

        <a href="#" class="bg-white text-black text-2xl font-extrabold py-2 px-6 rounded-full shadow-[0px_20px_70px_4px_rgba(0,0,0,0.1),_inset_7px_33px_0px_#fff300] transition-transform duration-300 hover:translate-y-[-13px] hover:shadow-[0_35px_90px_4px_rgba(0,0,0,0.3),_inset_0px_0_0_3px_black]">
            ... Back to previous page
        </a>
    </div>



`
</script>


