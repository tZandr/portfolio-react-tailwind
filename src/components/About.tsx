import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

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
    <section className="pt-16 flex flex-col w-full">
      <div className="border-b border-zinc-800 dark:border-zinc-200/10 pb-5 mb-15">
        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
          Who am i?
        </p>
        <h1 className="text-5xl sm:text-8xl font-black tracking-sm uppercase">About</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 my-12">
        <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6">
          <p>
            I'm a fullstack developer based in Stockholm with a strong
            preference for frontend work. The details matter to me: typography,
            spacing, and small interactions. I think good software should feel
            as good as it works.
          </p>

          <p>
            My background in design tools like Figma and the Adobe suite gives
            me a different angle on frontend work. I can work alongside a
            designer or own the visual side independently, and I tend to care
            too much about whether the hover state feels right.
          </p>
          <p>
            I've built and shipped production sites for real clients and I'm
            looking for an internship or junior role to keep doing that. If
            something on this page caught your attention, feel free to reach
            out!
          </p>
          <div className="flex gap-5 text-[11px] text-zinc-500 dark:text-zinc-400 tracking-widest pt-2">
            <a
              className="hover:text-zinc-200 transition-colors"
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-1">CV <MdArrowOutward size={12} /></span>
            </a>
            <a
              className="hover:text-zinc-200 transition-colors"
              href="https://www.linkedin.com/in/alexandertjernstrom/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-zinc-200 transition-colors"
              href="https://github.com/tZandr"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="space-y-8 mt-10 sm:mt-0 sm:ml-20">
          <div className="space-y-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Skills
            </p>
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
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Education
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  IT-Högskolan — JavaScript Developer
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  2025 – 2027 · Ongoing
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Högskolan Väst — Webmaster
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  2023 – 2025
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Frontend, backend, databases, UX and web servers. Thesis on
                  AI-related security and career impact.{' '}
                  <a
                    href="https://www.diva-portal.org/smash/record.jsf?dswid=3297&pid=diva2%3A1994529&c=1&searchType=SIMPLE&language=en&query=ai-relaterad+os%C3%A4kerhet+och+yrkesval&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-zinc-300 transition-colors"
                  >
                    <span className="inline-flex items-center gap-1">Read abstract <MdArrowOutward size={11} /></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6">
        <div className="flex items-end border-b border-zinc-800 dark:border-zinc-200/10 pb-5">
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 tracking-widest space-y-1">
            <button onClick={copyEmail} className="flex gap-1 group">
              <span>alex_tjernstrom@hotmail.com</span>
              {copied ? (
                <FaCheck size={13} className="text-green-500" />
              ) : (
                <FiCopy
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </button>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
      </div>


    </section>
  );
}
