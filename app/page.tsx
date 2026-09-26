'use client'

import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Instagram, Menu, MapPin, Phone, X } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { name: 'Kopi Tubruk', detail: 'Gula aren · robusta lokal', price: 'Rp 24K', image: '/menu-espresso.png', tone: 'bg-[#dca86a]' },
  { name: 'Senja Latte', detail: 'Espresso · oat milk · palm sugar', price: 'Rp 32K', image: '/menu-latte.png', tone: 'bg-[#efe2ca]' },
  { name: 'Es Kopi Susu', detail: 'Cold brew · fresh milk · vanilla', price: 'Rp 28K', image: '/menu-cold-brew.png', tone: 'bg-[#7e8a66]' },
  { name: 'Matcha Senja', detail: 'Uji matcha · oat milk · honey', price: 'Rp 30K', image: '/menu-matcha.png', tone: 'bg-[#b5c3a1]' },
]

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="font-display text-2xl font-medium tracking-tight">Kopi Senja<span className="text-[#df9d5f]">.</span></a>
          <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.18em] md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-[#e7b47a]" href="#menu">Menu</a>
            <a className="transition-colors hover:text-[#e7b47a]" href="#story">Our story</a>
            <a className="transition-colors hover:text-[#e7b47a]" href="#visit">Visit us</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#order" className="hidden rounded-full bg-[#f4eee4] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#24251e] transition-transform hover:-translate-y-0.5 sm:block">Order now</a>
            <button className="rounded-full border border-white/50 p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {isMenuOpen && <nav className="flex flex-col gap-5 bg-[#25261e] px-6 py-6 text-xs uppercase tracking-[0.18em] md:hidden"><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a><a href="#story" onClick={() => setIsMenuOpen(false)}>Our story</a><a href="#visit" onClick={() => setIsMenuOpen(false)}>Visit us</a></nav>}
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end overflow-hidden bg-[#29291f] px-6 pb-16 pt-36 text-white lg:min-h-[810px] lg:px-10 lg:pb-24">
        <Image src="/hero-coffee.png" alt="Coffee on a sunlit cafe table" fill priority className="object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,28,21,.85)_0%,rgba(27,28,21,.34)_58%,rgba(27,28,21,.15)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e4b17a]"><span className="h-px w-8 bg-[#e4b17a]" />Panggang lokal, rasa personal</p>
          <h1 className="max-w-4xl font-display text-[clamp(4rem,10vw,9.3rem)] leading-[.86] tracking-[-.06em]">Enjoy<br /><em className="font-normal text-[#e8b27a]">High-Quality</em><br />Local Brews</h1>
          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
            <a href="#menu" className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#f4eee4] py-3 pl-5 pr-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#25261e] transition-transform hover:-translate-y-1">Order now <span className="grid size-9 place-items-center rounded-full bg-[#e1a367] transition-transform group-hover:rotate-45"><ArrowUpRight size={16} /></span></a>
            <p className="max-w-[220px] text-sm leading-relaxed text-white/70">Slow mornings, golden hours, and coffee made with care.</p>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/60 lg:flex"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
      </section>

      <section id="menu" className="bg-[#f4eee4] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c2763f]">Brewed for your moment</p><h2 className="font-display text-5xl leading-none tracking-[-.05em] text-[#2b2b22] md:text-7xl">The featured<br /><em className="font-normal">four.</em></h2></div><p className="max-w-xs text-sm leading-relaxed text-[#717063]">Our everyday favourites, made from honest ingredients and beans sourced from the islands we call home.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{menuItems.map((item, index) => <article key={item.name} className="group"><div className={`relative aspect-[.82] overflow-hidden rounded-[1.4rem] ${item.tone}`}><Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 grid size-8 place-items-center rounded-full bg-[#f4eee4]/90 font-mono text-[10px] text-[#2b2b22]">0{index + 1}</span><button aria-label={`Add ${item.name} to order`} className="absolute bottom-4 right-4 grid size-11 translate-y-2 place-items-center rounded-full bg-[#f4eee4] text-[#2b2b22] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={18} /></button></div><div className="flex items-start justify-between gap-3 pt-4"><div><h3 className="font-display text-2xl tracking-tight text-[#2b2b22]">{item.name}</h3><p className="mt-1 text-xs text-[#77766a]">{item.detail}</p></div><p className="pt-1 text-sm font-semibold text-[#c2763f]">{item.price}</p></div></article>)}</div>
        </div>
      </section>

      <section id="story" className="bg-[#c97842] px-6 py-20 text-[#2b2b22] lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-end"><p className="text-[10px] font-semibold uppercase tracking-[0.28em]">01 — Our approach</p><div><h2 className="max-w-3xl font-display text-5xl leading-[.93] tracking-[-.05em] md:text-7xl">A little ritual<br /><em className="font-normal">in every cup.</em></h2><p className="mt-8 max-w-md text-sm leading-relaxed text-[#553d2d]">Kopi Senja is a neighbourhood coffee bar built around good beans, local makers, and the simple joy of slowing down together.</p></div></div></section>

      <footer id="visit" className="bg-[#29291f] px-6 py-16 text-[#f4eee4] lg:px-10 lg:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-12 md:grid-cols-3"><div><a href="#top" className="font-display text-3xl">Kopi Senja<span className="text-[#df9d5f]">.</span></a><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">A warm corner for high-quality local brews and unhurried conversations.</p></div><div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e2a56f]">Find us</p><address className="not-italic text-sm leading-7 text-white/75"><span className="flex gap-3"><MapPin size={17} className="mt-1 shrink-0 text-[#e2a56f]" />Jl. Kemang Raya No. 17<br />Jakarta Selatan 12730</span></address></div><div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e2a56f]">Come by</p><p className="flex gap-3 text-sm leading-7 text-white/75"><Phone size={17} className="mt-1 shrink-0 text-[#e2a56f]" /><span>+62 21 719 2048<br />Every day, 07.00 — 22.00</span></p></div></div><div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row"><span>© 2024 Kopi Senja</span><a href="#top" className="flex items-center gap-2 hover:text-white"><Instagram size={14} /> @kopisenja</a></div></div></footer>
    </main>
  )
}

import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Kopi Senja — Local brews, golden hours',
  description: 'Kopi Senja is a neighbourhood coffee bar in Jakarta serving high-quality local brews.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#29291f' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
