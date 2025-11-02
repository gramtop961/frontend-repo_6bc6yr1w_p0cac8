import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FeatureBadges from './FeatureBadges';

function accentToRGBA(accent) {
  switch (accent) {
    case 'indigo':
      return 'rgba(99,102,241,0.2)';
    case 'purple':
      return 'rgba(168,85,247,0.2)';
    case 'amber':
      return 'rgba(245,158,11,0.22)';
    case 'emerald':
      return 'rgba(16,185,129,0.18)';
    default:
      return 'rgba(99,102,241,0.18)';
  }
}

export default function ChapterSection({
  id,
  chapter,
  title,
  voice,
  gradient = 'from-indigo-900/40 via-purple-900/20 to-black',
  accent = 'indigo',
  features = [],
  rune = 'ᚨ',
}) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section id={id} ref={ref} className="relative isolate overflow-hidden py-28 sm:py-36">
      {/* Atmospheric gradient background */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${gradient}`} />

      {/* Parallax rune */}
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none text-8xl font-black text-white/5 sm:text-[12rem]"
      >
        {rune}
      </motion.div>

      {/* Glow ring */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(40%_30%_at_50%_0%,rgba(255,255,255,0.08),rgba(0,0,0,0))]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-sm uppercase tracking-widest text-slate-300/70"
        >
          {chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(99,102,241,0.25)',
            fontFamily: 'Mona Sans, Inter, system-ui, sans-serif'
          }}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200/90"
        >
          {voice}
        </motion.p>

        <FeatureBadges items={features} />

        {/* Decorative divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Scene visual placeholder using gradients and parallax cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 p-4 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(99,102,241,0.25),transparent)]" />
              <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 120px rgba(255,255,255,0.06)' }} />
              <div className="relative h-28 sm:h-32">
                <div className="absolute inset-0 rounded-lg blur-2xl" style={{ backgroundColor: accentToRGBA(accent) }} />
                <div className="absolute inset-0 flex items-center justify-center text-slate-200/90">
                  <span className="text-4xl">{['⚔️','🛡️','🔥'][i]}</span>
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-300/90">
                {['Shattered battlefield', 'Gathered under a sigil', 'Fire and spelllight'][i]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
