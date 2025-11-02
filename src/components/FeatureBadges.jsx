import React from 'react';
import { Shield, Users, Calendar, Sword, Trophy, Coins, Map, Sparkles, Flame, Star } from 'lucide-react';

const ICONS = {
  Shield,
  Users,
  Calendar,
  Sword,
  Trophy,
  Coins,
  Map,
  Sparkles,
  Flame,
  Star,
};

export default function FeatureBadges({ items = [] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {items.map((item, idx) => {
        const Icon = ICONS[item.icon] || Star;
        return (
          <div
            key={idx}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <Icon className="h-4 w-4 text-amber-300" />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
