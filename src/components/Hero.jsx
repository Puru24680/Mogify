export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center justify-center px-8">
      <div className="max-w-6xl w-full flex items-center justify-between">

        {/* Left Side */}
        <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 mb-6">
                <span>✨</span>
                <span className="text-sm">
                AI-Powered Facial Analysis
                </span>
            </div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Face With AI
                </span>
            </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Upload your photos and receive an AI-powered facial analysis with
            personalized recommendations to improve your appearance.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white cursor-pointer hover:bg-gray-200 text-black px-6 py-3 rounded-xl font-semibold">
              Analyze Face
            </button>

            <button className="border border-gray-600 px-7 py-3 rounded-full transition duration-300 hover:bg-zinc-800">
              View Demo
            </button>


          </div>
            <div className="flex gap-10 mt-12 ml-3">

                <div>
                    <h2 className="text-3xl font-bold">50K+</h2>
                    <p className="text-gray-400">Analyses</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">95%</h2>
                    <p className="text-gray-400">Accuracy</p>
                </div>

                 <div>
                    <h2 className="text-3xl font-bold">4.9★</h2>
                    <p className="text-gray-400">Rating</p>
                </div>

                </div>
        </div>

        {/* Right Side */}
        <div className="w-[420px] rounded-3xl bg-zinc-900 p-8 border border-zinc-800 shadow-2xl">

  <div className="w-full h-56 rounded-xl bg-zinc-800 mb-6 flex items-center justify-center">
    Face Image
  </div>

  <div className="space-y-4">

    <div>
      <p className="text-gray-400">Jawline</p>
      <div className="w-full bg-zinc-700 h-2 rounded-full">
        <div className="w-4/5 bg-green-500 h-2 rounded-full"></div>
      </div>
    </div>

    <div>
      <p className="text-gray-400">Symmetry</p>
      <div className="w-full bg-zinc-700 h-2 rounded-full">
        <div className="w-3/5 bg-yellow-500 h-2 rounded-full"></div>
      </div>
    </div>

    <div>
      <p className="text-gray-400">Skin</p>
      <div className="w-full bg-zinc-700 h-2 rounded-full">
        <div className="w-5/6 bg-cyan-500 h-2 rounded-full"></div>
      </div>
    </div>

  </div>

</div>

      </div>
    </section>
  );
}