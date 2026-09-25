'use client'

import { useState } from 'react'

const email = 'ry257541@gmail.com'

export default function Page() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen bg-background px-5 py-5 text-foreground sm:px-8 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col rounded-[2rem] border border-border bg-card shadow-[0_20px_80px_-40px_rgba(24,93,190,0.45)] sm:min-h-[calc(100vh-4rem)]">
        <header className="flex items-center justify-between border-b border-border px-6 py-5 sm:px-10">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">RY</span>
            <span>Rishabh Yadav</span>
          </div>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:block">Calling card</span>
        </header>

        <section className="grid flex-1 items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-20 lg:py-24">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-8 bg-primary" /> Full-Stack Developer
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[6.6rem]">
              Full-Stack Developer
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Building practical full-stack projects with Java and JavaScript.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              I build web applications and work with Java and JavaScript. I have experience with full-stack development, modern web technologies, and building practical software projects.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary p-7 text-primary-foreground sm:p-9">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-12 h-52 w-52 rounded-full border border-white/15" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Get in touch</p>
              <p className="mt-12 break-all text-xl font-medium tracking-tight sm:text-2xl">{email}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground" href={`mailto:${email}`}>
                  Email me <span aria-hidden="true">↗</span>
                </a>
                <button className="rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground" onClick={copyEmail} type="button">
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
            </div>
          </aside>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>Rishabh Yadav</span>
          <span>Full-Stack Developer</span>
        </footer>
      </div>
    </main>
  )
}
