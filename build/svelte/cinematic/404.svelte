<script>
  const html = `

<div class="scene">

    <div class="intro404">404</div>

    <div class="split-container">

        <!-- LEFT -->
        <div class="strip r1 l1"></div>
        <div class="strip r2 l2"></div>
        <div class="strip r3 l3"></div>
        <div class="strip r4 l4"></div>
        <div class="strip r5 l5"></div>
        <div class="strip r6 l6"></div>
        <div class="strip r7 l7"></div>
        <div class="strip r8 l8"></div>
        <div class="strip r9 l9"></div>
        <div class="strip r10 l10"></div>

        <!-- RIGHT -->
        <div class="strip r10 r11"></div>
        <div class="strip r9 r12"></div>
        <div class="strip r8 r13"></div>
        <div class="strip r7 r14"></div>
        <div class="strip r6 r15"></div>
        <div class="strip r5 r16"></div>
        <div class="strip r4 r17"></div>
        <div class="strip r3 r18"></div>
        <div class="strip r2 r19"></div>
        <div class="strip r1 r20"></div>

    </div>

    <div class="overlay"></div>

    <div class="content">
        <h1>404</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" class="btn">Go Home</a>
    </div>

</div>



`
</script>

<svelte:head>
  <style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#000;
    overflow:hidden;
    font-family:Arial,Helvetica,sans-serif;
    height:100vh;
}

.scene{
    position:relative;
    width:100vw;
    height:100vh;
    overflow:hidden;
    background:#000;
}

/* =========================
   INTRO 404
========================= */

.intro404{
    position:absolute;
    inset:0;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:22vw;
    font-weight:900;
    color:#e50914;
    letter-spacing:-0.08em;
    z-index:20;

    text-shadow:
        0 0 10px rgba(229,9,20,.6),
        0 0 30px rgba(229,9,20,.6),
        0 0 80px rgba(229,9,20,.4);

    animation:
        appear .8s ease-out,
        collapse .8s 1.3s forwards;
}

@keyframes appear{
    from{
        opacity:0;
        transform:scale(.7);
        filter:blur(20px);
    }
    to{
        opacity:1;
        transform:scale(1);
        filter:blur(0);
    }
}

@keyframes collapse{
    to{
        opacity:0;
        transform:scaleX(.02);
        filter:blur(10px);
    }
}

/* =========================
   SPLIT LIGHTS
========================= */

.split-container{
    position:absolute;
    inset:0;
    opacity:0;
    animation:showBeams .1s 1.9s forwards;
}

@keyframes showBeams{
    to{
        opacity:1;
    }
}

.strip{
    position:absolute;
    left:50%;
    top:0;
    height:100%;
    width:10px;
    transform:translateX(0);
}

/* glow */
.strip::after{
    content:"";
    position:absolute;
    inset:0;
    background:inherit;
    filter:blur(25px);
    opacity:.9;
}

/* colors */
.r1{background:#ff0000;}
.r2{background:#ff2400;}
.r3{background:#ff4500;}
.r4{background:#ff6a00;}
.r5{background:#ff8c00;}
.r6{background:#ffb300;}
.r7{background:#ffd000;}
.r8{background:#ff0066;}
.r9{background:#ff004c;}
.r10{background:#ff1744;}

.l1{animation:move1 2.8s ease-out 2s forwards;}
.l2{animation:move2 2.8s ease-out 2s forwards;}
.l3{animation:move3 2.8s ease-out 2s forwards;}
.l4{animation:move4 2.8s ease-out 2s forwards;}
.l5{animation:move5 2.8s ease-out 2s forwards;}
.l6{animation:move6 2.8s ease-out 2s forwards;}
.l7{animation:move7 2.8s ease-out 2s forwards;}
.l8{animation:move8 2.8s ease-out 2s forwards;}
.l9{animation:move9 2.8s ease-out 2s forwards;}
.l10{animation:move10 2.8s ease-out 2s forwards;}

.r11{animation:move11 2.8s ease-out 2s forwards;}
.r12{animation:move12 2.8s ease-out 2s forwards;}
.r13{animation:move13 2.8s ease-out 2s forwards;}
.r14{animation:move14 2.8s ease-out 2s forwards;}
.r15{animation:move15 2.8s ease-out 2s forwards;}
.r16{animation:move16 2.8s ease-out 2s forwards;}
.r17{animation:move17 2.8s ease-out 2s forwards;}
.r18{animation:move18 2.8s ease-out 2s forwards;}
.r19{animation:move19 2.8s ease-out 2s forwards;}
.r20{animation:move20 2.8s ease-out 2s forwards;}

@keyframes move1{to{transform:translateX(-40px)}}
@keyframes move2{to{transform:translateX(-70px)}}
@keyframes move3{to{transform:translateX(-100px)}}
@keyframes move4{to{transform:translateX(-140px)}}
@keyframes move5{to{transform:translateX(-180px)}}
@keyframes move6{to{transform:translateX(-230px)}}
@keyframes move7{to{transform:translateX(-290px)}}
@keyframes move8{to{transform:translateX(-360px)}}
@keyframes move9{to{transform:translateX(-440px)}}
@keyframes move10{to{transform:translateX(-530px)}}

@keyframes move11{to{transform:translateX(40px)}}
@keyframes move12{to{transform:translateX(70px)}}
@keyframes move13{to{transform:translateX(100px)}}
@keyframes move14{to{transform:translateX(140px)}}
@keyframes move15{to{transform:translateX(180px)}}
@keyframes move16{to{transform:translateX(230px)}}
@keyframes move17{to{transform:translateX(290px)}}
@keyframes move18{to{transform:translateX(360px)}}
@keyframes move19{to{transform:translateX(440px)}}
@keyframes move20{to{transform:translateX(530px)}}

/* =========================
   DARK OVERLAY
========================= */

.overlay{
    position:absolute;
    inset:0;
    background:#000;
    opacity:0;
    z-index:40;
    animation:overlayIn 1.5s 4.6s forwards;
}

@keyframes overlayIn{
    to{
        opacity:.88;
    }
}

/* =========================
   FINAL CONTENT
========================= */

.content{
    position:absolute;
    inset:0;
    z-index:50;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#fff;
    opacity:0;
    animation:showContent 1s 5.2s forwards;
}

.content h1{
    font-size:5rem;
    margin-bottom:10px;
}

.content p{
    opacity:.8;
    font-size:1.1rem;
}

.btn{
    margin-top:25px;
    background:#e50914;
    color:#fff;
    text-decoration:none;
    padding:14px 34px;
    border-radius:4px;
    transition:.3s;
}

.btn:hover{
    transform:scale(1.06);
}

@keyframes showContent{
    from{
        opacity:0;
        transform:translateY(20px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

  </style>
</svelte:head>

{@html html}
