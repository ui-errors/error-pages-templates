<template>
  <div v-html="html"></div>
</template>

<script setup>
const html = `
  <div class="glitch">404</div>
  <p>Page not found in the system</p>
  <div class="code">UI-ERRORS ACTIVE MODULE</div>


`
</script>

<style>

    body {
      margin: 0;
      height: 100vh;
      background: black;
      color: #00ffcc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: monospace;
      overflow: hidden;
    }

    .glitch {
      font-size: 90px;
      font-weight: bold;
      position: relative;
      animation: glitch 1.2s infinite;
    }

    @keyframes glitch {
      0% { transform: translate(0); opacity: 1; }
      20% { transform: translate(-2px, 2px); opacity: 0.8; }
      40% { transform: translate(2px, -2px); opacity: 0.6; }
      60% { transform: translate(-1px, 1px); opacity: 1; }
      80% { transform: translate(1px, -1px); opacity: 0.7; }
      100% { transform: translate(0); opacity: 1; }
    }

    p {
      font-size: 18px;
      opacity: 0.8;
      margin-top: 10px;
    }

    .code {
      margin-top: 20px;
      padding: 10px 18px;
      border: 1px solid #00ffcc;
      font-size: 14px;
    }
  
</style>
