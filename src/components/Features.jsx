import { Brain, Camera, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-8">
      <h2 className="text-4xl font-bold text-center">
        Why Choose Mogify?
      </h2>

      <p className="text-gray-400 text-center mt-4">
        Everything you need to maximize your appearance.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        <div className="bg-zinc-900 rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-zinc-800">
          <Brain size={40} />
          <h3 className="text-2xl font-semibold mt-6">
            AI Face Analysis
          </h3>
          <p className="text-gray-400 mt-3">
            Get detailed facial analysis powered by AI.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-zinc-800">
          <Camera size={40} />
          <h3 className="text-2xl font-semibold mt-6">
            Upload Photos
          </h3>
          <p className="text-gray-400 mt-3">
            Upload multiple angles for better accuracy.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-zinc-800">
          <Sparkles size={40} />
          <h3 className="text-2xl font-semibold mt-6">
            Personalized Tips
          </h3>
          <p className="text-gray-400 mt-3">
            Receive hairstyle, skincare and grooming recommendations.
          </p>
        </div>

      </div>
    </section>
  );
}