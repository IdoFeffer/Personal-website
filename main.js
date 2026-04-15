var currentLang = 'he'

var translations = {
  he: {
    htmlDir: 'rtl',
    htmlLang: 'he',
    navLogo: 'עידו <span style="color:var(--teal-light)">פפר</span>',
    navLinks: ['פרויקטים', 'אודות', 'צור קשר'],
    heroEyebrow: 'היי, אני',
    heroName: '<strong>עידו פפר</strong>',
    heroRole:
      'מפתח Full Stack<span style="display:inline-block;width:4px;height:4px;border-radius:50%;background:var(--teal);margin:0 8px;vertical-align:middle;"></span>תל אביב, ישראל',
    heroBio:
      'מפתח פולסטאק עם למידה עצמית גבוהה וחשיבה יצירתית.<br>ניסיון בפיתוח צד לקוח ושרת — React, Node.js, MongoDB ו-REST APIs.<br>מחפש לצמוח מקצועית ולבנות מוצרים משמעותיים.',
    btnContact: 'צור קשר',
    btnCv: '⬇ הורד קו״ח',
    cvFile: 'cv_he.pdf',
    lblSkills: 'יכולות',
    lblProjects: 'פרויקטים',
    proj1Desc:
      'שיכפול Airbnb — פרויקט גמר Full Stack בצוות. לקחתי חלק בעיצוב ופיתוח הפרונטאנד.',
    proj2Desc: 'אפליקציה לחישוב הגיל.',
    proj3Desc: 'אפליקציה ליצירת תמונות מצחיקות.',
    addLbl1: 'פרויקט נוסף בקרוב',
    addLbl2: 'פרויקט נוסף בקרוב',
    lblAbout: 'אודות',
    aboutText:
      '<p>מפתח Full Stack שסיים בוטקאמפ אינטנסיבי ב-<strong>Coding Academy</strong>. למדתי לבנות אפליקציות ווב מהיסוד ועד הפריסה, עם דגש על פרונטאנד וחוויית משתמש.</p><p>עבדתי בצוות על פרויקטים אמיתיים, כולל <strong>Rarebnb</strong> — שם לקחתי חלק בעיצוב ופיתוח הפרונטאנד.</p><p>שירתי כ<strong>מפקד צוות בגבעתי</strong> — ניסיון שלימד אותי מנהיגות, אחריות, ועבודת צוות תחת לחץ.</p>',
    statLbl1: 'פרונט + באקאנד',
    statLbl2: 'מיקום',
    statLocation: 'תל אביב, ישראל',
    statLbl3: 'שפות',
    statAvail: 'זמין מיידי',
    statLbl4: 'זמינות',
    lblContact: 'צור קשר',
    contactTitle: 'בוא <strong>נדבר</strong>',
    contactSub: 'פתוח להזדמנויות עבודה — זמין להתחיל מיידי',
    footer: 'עידו פפר · Full Stack Developer · 2025',
  },
  en: {
    htmlDir: 'ltr',
    htmlLang: 'en',
    navLogo: 'Ido <span style="color:var(--teal-light)">Feffer</span>',
    navLinks: ['Projects', 'About', 'Contact'],
    heroEyebrow: "Hi, I'm",
    heroName: '<strong>Ido Feffer</strong>',
    heroRole:
      'Full Stack Developer<span style="display:inline-block;width:4px;height:4px;border-radius:50%;background:var(--teal);margin:0 8px;vertical-align:middle;"></span>Tel Aviv, Israel',
    heroBio:
      'Fullstack developer with strong self-learning skills and creative thinking.<br>Experienced in frontend and backend development — React, Node.js, MongoDB, and REST APIs.<br>Looking to grow professionally and build meaningful products.',
    btnContact: 'Contact Me',
    btnCv: '⬇ Download CV',
    cvFile: 'assets/pdf/Ido Feffer - CV en.pdf',
    lblSkills: 'Skills',
    lblProjects: 'Projects',
    proj1Desc:
      'Airbnb clone — Full Stack team graduation project. I contributed to frontend design and development.',
    proj2Desc: 'Age calculation app.',
    proj3Desc: 'An app for creating funny Memes.',
    addLbl1: 'More coming soon',
    addLbl2: 'More coming soon',
    lblAbout: 'About',
    aboutText:
      '<p>Full Stack developer who completed an intensive bootcamp at <strong>Coding Academy</strong>. I learned to build web applications end-to-end, with a focus on frontend development and UX.</p><p>Worked in a team on real-world projects, including <strong>Rarebnb</strong> — where I contributed to frontend design and implementation.</p><p>Former <strong>Team Commander in Givati Brigade</strong> — an experience that taught me leadership, responsibility, and teamwork under pressure.</p>',
    statLbl1: 'Front + Backend',
    statLbl2: 'Location',
    statLocation: 'Tel Aviv, Israel',
    statLbl3: 'Languages',
    statAvail: 'Available now',
    statLbl4: 'Availability',
    lblContact: 'Contact',
    contactTitle: "Let's <strong>talk</strong>",
    contactSub: 'Open to job opportunities — available to start immediately',
    footer: 'Ido Feffer · Full Stack Developer · 2025',
  },
}

function setLang(lang) {
  currentLang = lang
  var t = translations[lang]
  document.documentElement.setAttribute('dir', t.htmlDir)
  document.documentElement.setAttribute('lang', t.htmlLang)

  document.getElementById('nav-logo').innerHTML = t.navLogo
  var navAs = document.querySelectorAll('#nav-links a')
  t.navLinks.forEach(function (txt, i) {
    if (navAs[i]) navAs[i].textContent = txt
  })

  document.getElementById('hero-eyebrow').textContent = t.heroEyebrow
  document.getElementById('hero-name').innerHTML = t.heroName
  document.getElementById('hero-role').innerHTML = t.heroRole
  document.getElementById('hero-bio').innerHTML = t.heroBio // innerHTML כדי ש-<br> יעבוד
  document.getElementById('btn-contact').textContent = t.btnContact

  var cvBtn = document.getElementById('btn-cv')
  cvBtn.textContent = t.btnCv
  cvBtn.href = t.cvFile

  document.getElementById('lbl-skills').childNodes[0].textContent = t.lblSkills
  document.getElementById('lbl-projects').childNodes[0].textContent =
    t.lblProjects
  document.getElementById('proj1-desc').textContent = t.proj1Desc
  document.getElementById('proj2-desc').textContent = t.proj2Desc
  document.getElementById('proj3-desc').textContent = t.proj3Desc
  document.getElementById('add-lbl-1').textContent = t.addLbl1
  document.getElementById('add-lbl-2').textContent = t.addLbl2

  document.getElementById('lbl-about').childNodes[0].textContent = t.lblAbout
  document.getElementById('about-text').innerHTML = t.aboutText
  document.getElementById('stat-lbl-1').textContent = t.statLbl1
  document.getElementById('stat-lbl-2').textContent = t.statLbl2
  document.getElementById('stat-location').textContent = t.statLocation
  document.getElementById('stat-lbl-3').textContent = t.statLbl3
  document.getElementById('stat-avail').textContent = t.statAvail
  document.getElementById('stat-lbl-4').textContent = t.statLbl4

  document.getElementById('lbl-contact').childNodes[0].textContent =
    t.lblContact
  document.getElementById('contact-title').innerHTML = t.contactTitle
  document.getElementById('contact-sub').textContent = t.contactSub
  document.getElementById('footer-text').textContent = t.footer

  document.getElementById('btn-he').classList.toggle('active', lang === 'he')
  document.getElementById('btn-en').classList.toggle('active', lang === 'en')
}

/* ── Contact Form Handler ─────────────────────────────── */
const contactForm = document.getElementById('contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = document.getElementById('form-submit-btn')
    const btnText = document.getElementById('form-btn-text')
    const success = document.getElementById('form-success')

    btn.classList.add('loading')
    btnText.textContent = '...שולח'

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        contactForm.reset()
        success.classList.add('show')
        btnText.textContent = '✓ נשלח!'
        setTimeout(() => {
          success.classList.remove('show')
          btnText.textContent = 'שלח הודעה ↗'
          btn.classList.remove('loading')
        }, 4000)
      } else {
        btnText.textContent = 'שגיאה, נסה שנית'
        btn.classList.remove('loading')
      }
    } catch {
      btnText.textContent = 'שגיאה, נסה שנית'
      btn.classList.remove('loading')
    }
  })
}
