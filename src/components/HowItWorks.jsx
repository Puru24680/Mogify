import { Upload, BrainCircuit, BadgeCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={36} />,
      title: "Upload Photos",
      desc: "Upload front, left and right profile images."
    },
    {
      icon: <BrainCircuit size={36} />,
      title: "AI Analysis",
      desc: "Our AI analyzes facial structure and proportions."
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Get Your Roadmap",
      desc: "Receive personalized improvement suggestions."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-8">
      <h2 className="text-4xl font-bold text-center">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center mb-5">
              {step.icon}
            </div>

            <h3 className="text-2xl font-semibold">
              {step.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {step.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}