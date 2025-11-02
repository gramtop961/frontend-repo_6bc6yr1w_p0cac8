import React from 'react';
import HeroCinematic from './components/HeroCinematic';
import ChapterSection from './components/ChapterSection';
import CTAFinal from './components/CTAFinal';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroCinematic />

      {/* Scene 1 — Chaos Without a Guild */}
      <ChapterSection
        id="scene-1"
        chapter="Scene 1 — Chaos Without a Guild"
        title="In a world without unity, even heroes fall."
        voice="Shattered banners and lone adventurers wander a battlefield of confusion. Without structure, even the strongest are scattered, and every quest feels heavier than steel."
        gradient="from-slate-950 via-indigo-950/40 to-black"
        accent="indigo"
        features={[
          { icon: 'Users', label: 'Guild Management' },
          { icon: 'Shield', label: 'Structure & Rules' },
          { icon: 'Map', label: 'Shared Direction' },
        ]}
        rune="ᚠ"
      />

      {/* Scene 2 — The Birth of the Guild */}
      <ChapterSection
        id="scene-2"
        chapter="Scene 2 — The Birth of the Guild"
        title="Around a glowing sigil, a guild takes shape."
        voice="Light gathers and roles are forged. Leaders rise with purpose, permissions are granted with fairness, and the emblem of unity burns bright."
        gradient="from-purple-950 via-indigo-950/40 to-black"
        accent="purple"
        features={[
          { icon: 'Shield', label: 'Role System' },
          { icon: 'Users', label: 'Fair Leadership' },
          { icon: 'Star', label: 'Guild Emblem' },
        ]}
        rune="ᚷ"
      />

      {/* Scene 3 — Planning the Raid */}
      <ChapterSection
        id="scene-3"
        chapter="Scene 3 — Planning the Raid"
        title="Within the guild hall, strategy ignites."
        voice="Maps unfurl, candles flicker, and a spectral raid boss rises in holographic flame. Tanks, healers, and DPS align—each piece in perfect balance."
        gradient="from-slate-950 via-purple-950/30 to-black"
        accent="amber"
        features={[
          { icon: 'Calendar', label: 'Event Scheduling' },
          { icon: 'Map', label: 'Raid Planning' },
          { icon: 'Users', label: 'Recruitment' },
        ]}
        rune="ᚹ"
      />

      {/* Scene 4 — The Dragon Battle */}
      <ChapterSection
        id="scene-4"
        chapter="Scene 4 — The Dragon Battle"
        title="Fire roars. Steel sings. Unity prevails."
        voice="A dragon descends in a storm of embers. Timers glow, bars pulse, and every strike is tracked in real time. Teamwork becomes a living spell."
        gradient="from-black via-slate-950 to-black"
        accent="amber"
        features={[
          { icon: 'Sword', label: 'Live Raid Tracking' },
          { icon: 'Trophy', label: 'DKP & Scores' },
          { icon: 'Sparkles', label: 'Synergy Metrics' },
        ]}
        rune="ᛇ"
      />

      {/* Scene 5 — Loot & Fairness */}
      <ChapterSection
        id="scene-5"
        chapter="Scene 5 — Loot & Fairness"
        title="The hoard shines—and justice divides the gold."
        voice="A chest bursts into light. Items rise and drift to outstretched hands. Ledgers balance, auctions close, and upgrades gleam on every hero."
        gradient="from-slate-950 via-indigo-950/30 to-black"
        accent="emerald"
        features={[
          { icon: 'Coins', label: 'Loot Distribution' },
          { icon: 'Trophy', label: 'Auction & Bids' },
          { icon: 'Star', label: 'Gear Tracking' },
        ]}
        rune="ᚲ"
      />

      {/* Scene 6 — Growth and Connection */}
      <ChapterSection
        id="scene-6"
        chapter="Scene 6 — Growth and Connection"
        title="Across the realm, halls of light connect."
        voice="Guild halls pulse across a vast continent, joined by threads of magic. Mirrors whisper across servers—alliances form, friendships deepen, discovery awaits."
        gradient="from-indigo-950 via-purple-950/40 to-black"
        accent="indigo"
        features={[
          { icon: 'Users', label: 'Cross-Guild Links' },
          { icon: 'Map', label: 'Guild Discovery' },
          { icon: 'Sparkles', label: 'Bot Integrations' },
        ]}
        rune="ᛝ"
      />

      <CTAFinal />
    </div>
  );
}
