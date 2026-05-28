import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

const stack = [
  'React',
  'TypeScript',
  'Node.js & Express',
  'Tailwind CSS',
  'WordPress & Shopify',
  'MySQL & MongoDB',
  'Docker',
  'Next.js',
  'Git',
  'Figma',
  'UI/UX',
  'Adobe Creative Suite',
  'SEO',
];

export function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('alex_tjernstrom@hotmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-dvh py-16 flex flex-col justify-center space-y-12 w-full">
      <div className="border-b border-zinc-800 dark:border-zinc-200/10 pb-5 mb-15">
        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
          Who am i?
        </p>
        <h1 className="text-8xl font-thin tracking-sm uppercase">About</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6">
          <p>
            I'm a fullstack developer based in Stockholm with a strong
            preference for frontend work. I care about the details — typography,
            spacing, interactions — and I believe good software should feel as
            good as it works.
          </p>
          <p>
            I've built and shipped production sites for real clients, and I'm
            currently looking for a role where I can keep doing that at a higher
            level.
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 italic text-base">
            — placeholder for third paragraph —
          </p>
        </div>
        <div className="space-y-8 ml-20">
          <div className="space-y-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">Skills</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="text-xs border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 text-zinc-700 dark:text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">Education</p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">IT-Högskolan — JavaScript Developer</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">2025 – 2027 · Ongoing</p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Högskolan Väst — Webmaster</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">2023 – 2025</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Frontend, backend, databases, UX and web servers. Thesis on AI-related security and career impact.{' '}
                  <a href="#" className="underline hover:text-zinc-300 transition-colors">Read abstract ↗</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 space-y-12">
        <div className="flex flex-col">
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase pb-5">
            Get in touch
          </p>
          <span className="text-8xl font-thin tracking-sm uppercase pb-2">Say Hi!</span>
          <span className="text-8xl font-thin tracking-sm uppercase">
            <a href="mailto:alex_tjernstrom@hotmail.com" className="hover:underline">
              Let's Talk ↗
            </a>
          </span>
        </div>

        <div className="flex justify-between items-end border-b border-zinc-800 dark:border-zinc-200/10 pb-5">
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 tracking-widest space-y-1">
            <button onClick={copyEmail} className="flex gap-1 group">
              <span>alex_tjernstrom@hotmail.com</span>
              {copied ? (
                <FaCheck size={13} className="text-green-500" />
              ) : (
                <FiCopy size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
            <p>Stockholm, Sweden</p>
          </div>
          <div className="flex gap-5 text-[11px] text-zinc-500 dark:text-zinc-400 tracking-widest">
            <a className="hover:text-zinc-200 transition-colors" href="https://www.linkedin.com/in/alexandertjernstrom/">LinkedIn</a>
            <a className="hover:text-zinc-200 transition-colors" href="https://github.com/tZandr">Github</a>
          </div>
        </div>

        <div className="flex justify-center text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest">
          <p>© 2026 Alexander Tjernström</p>
        </div>
      </div>
    </section>
  );
}
