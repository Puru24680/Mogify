import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import { faqs, testimonials } from "../utils/content";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../utils/motion";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />

      <section id="testimonials" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Testimonials</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl text-balance">
              Built to feel like a premium product, not a tutorial.
            </h2>
          </motion.div>

          <motion.div className="mt-14 grid gap-5 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {testimonials.map((testimonial) => (
              <motion.article key={testimonial.name} variants={staggerItem} className="surface-card rounded-[28px] p-6">
                <Quote className="h-6 w-6 text-indigo-500" />
                <p className="mt-4 text-sm leading-7 text-slate-600">{testimonial.quote}</p>
                <div className="mt-6 border-t border-slate-200/70 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="faq" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl text-balance">
              Straight answers for a polished product experience.
            </h2>
          </motion.div>

          <motion.div className="mt-14 grid gap-4 lg:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {faqs.map((faq) => (
              <motion.details key={faq.question} variants={staggerItem} className="surface-card rounded-[26px] p-6 group">
                <summary className="cursor-pointer list-none text-lg font-semibold tracking-tight text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}

export default Home;