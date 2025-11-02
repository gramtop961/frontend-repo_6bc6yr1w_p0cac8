import React from 'react';
import { motion } from 'framer-motion';

export default function CTAFinal() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_30%_at_50%_10%,rgba(168,85,247,0.2),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3
            className="text-4xl font-semibold sm:text-6xl"
            style={{ textShadow: '0 0 18px rgba(59,130,246,0.35)' }}
          >
            Lead. Plan. Share.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200/90">
            Build your guild with cinematic tools forged for MMORPG communities.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 opacity-80 blur-md transition duration-300 group-hover:opacity-100 pointer-events-none" />
              <span className="relative rounded-full bg-indigo-700/30 px-8 py-3 ring-1 ring-white/10 backdrop-blur">
                Start Your Journey
              </span>
            </a>
          </div>
        </motion.div>

        {/* Subtle banner animation */}
        <div className="mt-16 flex items-center justify-center gap-10 opacity-80">
          <div className="h-6 w-16 animate-wave rounded-sm bg-gradient-to-r from-indigo-500/60 to-purple-500/60" />
          <div className="h-6 w-16 animate-wave [animation-delay:.2s] rounded-sm bg-gradient-to-r from-purple-500/60 to-amber-500/60" />
          <div className="h-6 w-16 animate-wave [animation-delay:.4s] rounded-sm bg-gradient-to-r from-amber-500/60 to-indigo-500/60" />
        </div>
      </div>

      <style>{`
        @keyframes wave { 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(-6px)} }
        .animate-wave { animation: wave 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
