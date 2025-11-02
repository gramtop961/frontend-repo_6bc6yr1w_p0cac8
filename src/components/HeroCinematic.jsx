import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroCinematic() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ppI7eAudW7IbKhKs/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_30%,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />

      {/* Floating embers */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-orange-400/70 blur-[1px]"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 71) % 100}%`,
              animation: `ember ${6 + (i % 5)}s linear ${(i % 7) * 0.4}s infinite`,
              boxShadow: '0 0 8px rgba(251,146,60,0.8)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-5xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl"
            style={{
              fontFamily: 'Mona Sans, Inter, system-ui, sans-serif',
              textShadow: '0 0 24px rgba(168,85,247,0.35), 0 0 48px rgba(59,130,246,0.25)'
            }}
          >
            Guildify
            <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-200 bg-clip-text text-transparent">
              From Chaos to Unity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200/90"
          >
            A cinematic journey into a world where leaders rise, plans take shape, and fair loot crowns victorious guilds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 opacity-80 blur-md transition duration-300 group-hover:opacity-100 pointer-events-none" />
              <span className="relative rounded-full bg-indigo-700/30 px-6 py-3 ring-1 ring-white/10 backdrop-blur">
                Start Your Journey
              </span>
            </a>
            <span className="text-slate-300/80">or scroll</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes ember {
          0% { transform: translateY(0) translateX(0); opacity: .6; }
          50% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
