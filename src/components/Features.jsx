import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { featureCards } from "../utils/content";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../utils/motion";

function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Features</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl text-balance">
            Everything a premium appearance coach should provide.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Mogify combines polished UX, structured scoring, and actionable recommendations into one professional workflow.
          </p>
        </motion.div>

        <motion.div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {featureCards.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;