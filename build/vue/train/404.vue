<template>
  <div v-html="html"></div>
</template>

<script setup>
const html = `

<div class="not_found_body">
    <div class="not_found_content">
        <h1>404</h1>
        <p>LOST IN THE WAVES</p>
        <a href="/" class="not_found_btn">Go Home</a>
    </div>

    <div class="not_found_container">
        <div class="not_found_main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 355" class="not_found_svg">
                <g id="not_found_ocean">
                    <path id="not_found_sky" class="not_found_st0" d="M0 0h1000v203.1H0z"></path>
                    <linearGradient id="not_found_water_1_" gradientUnits="userSpaceOnUse" x1="500" y1="354" x2="500" y2="200.667">
                        <stop offset="0" stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#b3dcdf"></stop>
                    </linearGradient>
                    <path id="not_found_water" fill="url(#not_found_water_1_)" d="M0 200.7h1000V354H0z"></path>
                    <path id="not_found_land" class="not_found_st0" d="M0 273.4h1000V354H0z"></path>
                    
                    <g id="not_found_bumps">
                        <path class="not_found_st0" d="M0 275.2s83.8-28 180-28 197 28 197 28H0z"></path>
                        <path class="not_found_st0" d="M377 275.2s54.7-28 117.5-28 128.6 28 128.6 28H377z"></path>
                        <path class="not_found_st0" d="M623.2 275.2s83.7-28 179.9-28 196.9 28 196.9 28H623.2z"></path>
                        <!-- Secondary set for seamless loop -->
                        <path class="not_found_st0" d="M-1000 275.2s83.8-28 180-28 197 28 197 28h-377z"></path>
                    </g>
                </g>

                <g id="not_found_tracks">
                    <!-- Generating a repeating sequence of tracks -->
                    <path class="not_found_st2" d="M9.8 282.4h-3L0 307.6h3z"></path>
                    <path class="not_found_st2" d="M39.8 282.4h-3L30 307.6h3z"></path>
                    <path class="not_found_st2" d="M69.8 282.4h-3L60 307.6h3z"></path>
                    <path class="not_found_st2" d="M99.8 282.4h-3L90 307.6h3z"></path>
                    <path class="not_found_st2" d="M129.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M159.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M189.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M219.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M249.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M279.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M309.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M339.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M369.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M399.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M429.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M459.8 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M489.8 282.4h-3l-6.8 25.2h3z"></path>
                    <!-- Negative offset tracks for the loop -->
                    <path class="not_found_st2" d="M-10.2 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M-40.2 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M-70.2 282.4h-3l-6.8 25.2h3z"></path>
                    <path class="not_found_st2" d="M-100.2 282.4h-3l-6.8 25.2h3z"></path>
                </g>
            </svg>
        </div>
    </div>
</div>



`
</script>

<style>

        /* Base Styles */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #f7f7f7;
            font-family: 'Arial', sans-serif;
        }

        .not_found_body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
        }

        .not_found_container {
            text-align: center;
            width: 100%;
            max-width: 1000px;
        }

        /* SVG Styles */
        .not_found_svg {
            width: 100%;
            height: auto;
        }

        .not_found_st0 { fill: #f2f2f2; }
        .not_found_st2 { fill: #d1d3d4; }

        /* Animation Keyframes */
        @keyframes move_tracks {
            0% { transform: translateX(0); }
            100% { transform: translateX(500px); }
        }

        @keyframes move_bumps {
            0% { transform: translateX(0); }
            100% { transform: translateX(1000px); }
        }

        /* Applying Animations */
        #not_found_tracks {
            animation: move_tracks 2s linear infinite;
        }

        #not_found_bumps {
            animation: move_bumps 4s linear infinite;
        }

        /* Content Overlay */
        .not_found_content {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
        }

        .not_found_content h1 {
            font-size: 8rem;
            margin: 0;
            color: #333;
            letter-spacing: 10px;
            opacity: 0.8;
        }

        .not_found_content p {
            font-size: 1.2rem;
            color: #666;
        }

        .not_found_btn {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 25px;
            background-color: #333;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .not_found_btn:hover {
            background-color: #555;
        }
    
</style>
