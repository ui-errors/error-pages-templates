<template>
  <div v-html="html"></div>
</template>

<script setup>
const html = `

<div class="scene">

    <div class="rail">

        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>
        <div class="stamp">4</div>
        <div class="stamp">0</div>

    </div>

    <div class="world">
        <div class="forward">

            <div class="box">

                <div class="wall"></div>
                <div class="wall"></div>
                <div class="wall"></div>
                <div class="wall"></div>
                <div class="wall"></div>
                <div class="wall"></div>

            </div>

        </div>
    </div>

</div>



`
</script>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#000;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    perspective:1200px;
    font-family:'Anton',sans-serif;
}

div{
    transform-style:preserve-3d;
}

.scene{
    position:relative;
    width:100vw;
    height:100vh;
}

/* =========================
   MOVING 404 STAMPS
========================= */

.rail{
    position:absolute;
    inset:0;
    display:flex;
    justify-content:center;
    align-items:center;
    transform:
        rotateX(-30deg)
        rotateY(-30deg);
}

.stamp{
    position:absolute;
    width:200px;
    height:200px;
    background:#111;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:7rem;
    font-weight:bold;
    animation:stampSlide 40s linear infinite;
}

.stamp:nth-child(1){animation-delay:-2s;}
.stamp:nth-child(2){animation-delay:-4s;}
.stamp:nth-child(3){animation-delay:-6s;}
.stamp:nth-child(4){animation-delay:-8s;}
.stamp:nth-child(5){animation-delay:-10s;}
.stamp:nth-child(6){animation-delay:-12s;}
.stamp:nth-child(7){animation-delay:-14s;}
.stamp:nth-child(8){animation-delay:-16s;}
.stamp:nth-child(9){animation-delay:-18s;}
.stamp:nth-child(10){animation-delay:-20s;}
.stamp:nth-child(11){animation-delay:-22s;}
.stamp:nth-child(12){animation-delay:-24s;}
.stamp:nth-child(13){animation-delay:-26s;}
.stamp:nth-child(14){animation-delay:-28s;}
.stamp:nth-child(15){animation-delay:-30s;}
.stamp:nth-child(16){animation-delay:-32s;}
.stamp:nth-child(17){animation-delay:-34s;}
.stamp:nth-child(18){animation-delay:-36s;}
.stamp:nth-child(19){animation-delay:-38s;}
.stamp:nth-child(20){animation-delay:-40s;}

@keyframes stampSlide{
    0%{
        transform:
            rotateX(90deg)
            rotateZ(-90deg)
            translateZ(-200px)
            translateY(2200px);
    }

    100%{
        transform:
            rotateX(90deg)
            rotateZ(-90deg)
            translateZ(-200px)
            translateY(-2200px);
    }
}

/* =========================
   ROLLING BLOCK TUNNEL
========================= */

.world{
    position:absolute;
    inset:0;
    display:flex;
    justify-content:center;
    align-items:center;
    transform:
        rotateX(-30deg)
        rotateY(-30deg);
}

.forward{
    position:absolute;
    animation:roll 8s linear infinite;
}

.box{
    position:relative;
    width:220px;
    height:220px;
    transform-style:preserve-3d;
}

.wall{
    position:absolute;
    width:220px;
    height:220px;
    border:2px solid rgba(255,255,255,.15);
    background:rgba(255,255,255,.03);
}

/* cube faces */

.wall:nth-child(1){
    transform:translateZ(110px);
}

.wall:nth-child(2){
    transform:rotateY(180deg) translateZ(110px);
}

.wall:nth-child(3){
    transform:rotateY(90deg) translateZ(110px);
}

.wall:nth-child(4){
    transform:rotateY(-90deg) translateZ(110px);
}

.wall:nth-child(5){
    transform:rotateX(90deg) translateZ(110px);
}

.wall:nth-child(6){
    transform:rotateX(-90deg) translateZ(110px);
}

@keyframes roll{

    0%{
        transform:
            translateZ(800px)
            rotateX(0deg)
            rotateY(0deg)
            rotateZ(0deg);
    }

    25%{
        transform:
            translateZ(400px)
            rotateX(90deg)
            rotateY(90deg)
            rotateZ(0deg);
    }

    50%{
        transform:
            translateZ(0px)
            rotateX(180deg)
            rotateY(180deg)
            rotateZ(90deg);
    }

    75%{
        transform:
            translateZ(-400px)
            rotateX(270deg)
            rotateY(270deg)
            rotateZ(180deg);
    }

    100%{
        transform:
            translateZ(-800px)
            rotateX(360deg)
            rotateY(360deg)
            rotateZ(360deg);
    }
}

</style>
