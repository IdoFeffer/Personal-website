/* ── animations.js ─────────────────────────────────────
   Scroll reveal · Stagger · Typing · Cursor glow · Nav
──────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. CURSOR GLOW ──────────────────────────────── */
  const glow = document.createElement('div')
  glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 320px; height: 320px; border-radius: 50%;
    background: radial-gradient(circle, rgba(42,157,143,0.07) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.12s ease, top 0.12s ease;
    left: -200px; top: -200px;
  `
  document.body.appendChild(glow)
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px'
    glow.style.top = e.clientY + 'px'
  })

  /* ── 2. SCROLL REVEAL ────────────────────────────── */
  const style = document.createElement('style')
  style.textContent = `
    .sr { opacity: 0; transform: translateY(36px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .sr.visible { opacity: 1; transform: translateY(0); }
    .sr-left  { opacity: 0; transform: translateX(-36px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .sr-left.visible  { opacity: 1; transform: translateX(0); }
    .sr-right { opacity: 0; transform: translateX(36px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .sr-right.visible { opacity: 1; transform: translateX(0); }
    .sr-scale { opacity: 0; transform: scale(0.88); transition: opacity 0.55s ease, transform 0.55s ease; }
    .sr-scale.visible { opacity: 1; transform: scale(1); }
  `
  document.head.appendChild(style)

  /* Apply classes */
  document.querySelectorAll('.proj-card').forEach((el, i) => {
    el.classList.add('sr')
    el.style.transitionDelay = i * 0.1 + 's'
  })
  document.querySelectorAll('.skill-pill').forEach((el, i) => {
    el.classList.add('sr-scale')
    el.style.transitionDelay = i * 0.05 + 's'
  })
  document.querySelectorAll('.stat-card').forEach((el, i) => {
    el.classList.add('sr-left')
    el.style.transitionDelay = i * 0.1 + 's'
  })
  document.querySelectorAll('.about-text p').forEach((el, i) => {
    el.classList.add('sr-right')
    el.style.transitionDelay = i * 0.12 + 's'
  })
  document.querySelectorAll('.contact-chip').forEach((el, i) => {
    el.classList.add('sr')
    el.style.transitionDelay = i * 0.08 + 's'
  })
  document
    .querySelectorAll('.contact-header')
    .forEach((el) => el.classList.add('sr'))
  document.querySelectorAll('.proj-add').forEach((el, i) => {
    el.classList.add('sr')
    el.style.transitionDelay = i * 0.1 + 0.3 + 's'
  })

  /* Intersection Observer */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  document
    .querySelectorAll('.sr, .sr-left, .sr-right, .sr-scale')
    .forEach((el) => observer.observe(el))

  /* ── 3. TYPING EFFECT on hero eyebrow ───────────── */
  const eyebrow = document.getElementById('hero-eyebrow')
  if (eyebrow) {
    const originalText = eyebrow.textContent.trim()
    eyebrow.textContent = ''
    eyebrow.style.opacity = '1'
    eyebrow.style.animation = 'none'

    const blinkStyle = document.createElement('style')
    blinkStyle.textContent = `@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`
    document.head.appendChild(blinkStyle)

    const cursor = document.createElement('span')
    cursor.textContent = '|'
    cursor.style.cssText =
      'opacity:1; animation: blink 0.75s step-end infinite;'
    eyebrow.appendChild(cursor)

    function typeLoop() {
      let i = 0
      const typing = setInterval(() => {
        eyebrow.textContent = originalText.slice(0, i)
        eyebrow.appendChild(cursor)
        i++
        if (i > originalText.length) {
          clearInterval(typing)
          setTimeout(erase, 1800)
        }
      }, 90)
    }

    function erase() {
      let text = originalText
      const erasing = setInterval(() => {
        text = text.slice(0, -1)
        eyebrow.textContent = text
        eyebrow.appendChild(cursor)
        if (text.length === 0) {
          clearInterval(erasing)
          setTimeout(typeLoop, 1000)
        }
      }, 55)
    }

    setTimeout(typeLoop, 700)
  }

  /* ── 4. SMOOTH SCROLL for nav links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  /* ── 5. NAV ACTIVE STATE on scroll ──────────────── */
  const navLinks = document.querySelectorAll('.nav-links a')
  const sections = document.querySelectorAll('section[id], div.hero')

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navLinks.forEach((l) => (l.style.color = ''))
          const id = e.target.id || 'hero'
          const active = document.querySelector(`.nav-links a[href="#${id}"]`)
          if (active) active.style.color = 'var(--jasmine)'
        }
      })
    },
    { threshold: 0.4 },
  )

  sections.forEach((s) => navObserver.observe(s))

  /* ── 6. NAV SHRINK on scroll ─────────────────────── */
  const nav = document.querySelector('.nav')
  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 60) {
        nav.style.height = '50px'
        nav.style.background = 'rgba(26,47,53,0.97)'
      } else {
        nav.style.height = '60px'
        nav.style.background = 'rgba(26,47,53,0.9)'
      }
    },
    { passive: true },
  )

  /* ── 7. PROJECT CARD TILT on hover ──────────────── */
  document.querySelectorAll('.proj-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 1
      const y = (e.clientY - rect.top) / rect.height - 2
      card.style.transform = `translateY(-4px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`
      card.style.transition = 'transform 0.1s ease'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''
      card.style.transition = 'transform 0.4s ease, border-color 0.2s'
    })
  })
})
