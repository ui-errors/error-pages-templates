export default function NotFound() {
  return (
    <>
      <style>{`
        body {
            font-family: 'Space Mono', monospace;
        }

        .overlay {
            background: rgba(0, 0, 0, 0.45);
        }

        .glow {
            text-shadow:
                0 0 10px rgba(255,255,255,0.6),
                0 0 20px rgba(255,255,255,0.4),
                0 0 40px rgba(255,255,255,0.2);
        }
    `}</style>

      <div
        dangerouslySetInnerHTML={{
          __html: `

    <div class="relative h-screen overflow-hidden bg-indigo-900">

        <!-- Background Image -->
        <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=b98d54a43b3dac555df398588a2c791e0f3076d9" alt="404 Background" class="absolute inset-0 h-full w-full object-cover">

        <!-- Dark Overlay -->
        <div class="absolute inset-0 overlay"></div>

        <!-- Content -->
        <div class="relative z-10 flex items-center justify-center h-full">
            <div class="text-center px-6">

                <h1 class="text-white font-bold text-4xl md:text-6xl mb-8 glow">
                    You Are All Alone Here
                </h1>

                <div class="text-white font-extrabold text-8xl md:text-[12rem] animate-bounce glow">
                    404
                </div>

                <p class="text-gray-200 text-lg mt-8">
                    The page you're looking for does not exist.
                </p>

                <a href="/" class="inline-block mt-8 px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
                    Return Home
                </a>

            </div>
        </div>

    </div>



`
        }}
      />
    </>
  )
}
