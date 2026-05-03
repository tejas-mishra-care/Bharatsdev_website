'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const springTransition = { type: "spring", stiffness: 300, damping: 25 };

export default function InsightsPage() {
  const articles = [
    {
      id: "48-hour-build",
      title: "The 48-Hour Enterprise Build: How We Engineered UltraTech Shashwat.",
      category: "Engineering",
      date: "May 2026",
      readTime: "8 min read",
      color: "hover:border-[#2563EB]/50"
    },
    {
      id: "retainer-model-dead",
      title: "Why the Agency Retainer Model is Dead (And What Replaces It).",
      category: "Business Strategy",
      date: "April 2026",
      readTime: "5 min read",
      color: "hover:border-[#F97316]/50"
    },
    {
      id: "agentic-workflows",
      title: "Agentic Workflows: How AI is Changing Custom Enterprise Solutions.",
      category: "Artificial Intelligence",
      date: "April 2026",
      readTime: "10 min read",
      color: "hover:border-[#10B981]/50"
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <section className="pt-40 pb-24 relative overflow-hidden border-b border-[#2A2A2E]">
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">CTO Journal</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter text-white mb-6">
              INSIGHTS.
            </h1>
            <p className="text-xl text-zinc-400 font-sans max-w-2xl">
              High-signal engineering logs, business strategy, and architectural breakdowns. No fluff.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ...springTransition }}
            >
              <Link href={`/insights/${article.id}`} className="block">
                <div className={`bg-[#111113] border border-[#2A2A2E] rounded-2xl p-8 md:p-12 transition-all duration-300 group ${article.color}`}>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">
                    <span className="text-white">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-8">
                    <h2 className="text-3xl md:text-4xl font-black font-heading text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">
                      {article.title}
                    </h2>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
