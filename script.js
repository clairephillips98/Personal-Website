// ─── Day / Night theme ────────────────────────────────────────────────────────
// Day: 7 am – 7 pm  |  Night: 7 pm – 7 am

function applyTheme() {
  const hour = new Date().getHours();
  document.documentElement.setAttribute(
    'data-theme',
    hour >= 7 && hour < 19 ? 'day' : 'night'
  );
}

applyTheme();
setInterval(applyTheme, 5 * 60 * 1000); // re-check every 5 minutes


// ─── Popup content ────────────────────────────────────────────────────────────

const POPUPS = {
  kellogg: {
    title: 'Kellogg School of Management',
    body:  'Ranked among the world\'s top business schools, Kellogg at Northwestern is celebrated for its collaborative culture and strengths in finance, strategy, and marketing. Claire graduates in June 2026 with an MBA focusing on Finance and Strategy.'
  },
  dac: {
    title: 'Data Analytics Club — Co-President',
    body:  'As Co-President, Claire leads one of Kellogg\'s most active student organizations, organising speaker series, hands-on workshops, and cross-functional projects that connect MBA students with data-driven decision making.'
  },
  thomvest: {
    title: 'Thomvest Ventures',
    body:  'A San Francisco-based early-stage VC firm with over $1B AUM, focused on fintech, enterprise software, and cybersecurity. As an in-quarter MBA intern, Claire gained hands-on experience evaluating deals and supporting portfolio companies.'
  },
  ieee: {
    title: 'IEEE Publication — Cognitive Radar',
    body:  'Published research on applying Multi-Agent Reinforcement Learning (MARL) to cognitive radar systems. Cognitive radars adapt their waveforms in real time; MARL enables each radar agent to choose optimal actions on-the-fly in complex, contested environments.'
  },
  bcg: {
    title: 'Boston Consulting Group',
    body:  'One of the world\'s top three management consulting firms (the "MBB" trio). Claire joined BCG\'s Tech & Digital Advantage practice, which helps clients leverage technology for competitive advantage. Her engagement focused on pricing strategy for a major Quick Service Restaurant chain.'
  },
  pricingdash: {
    title: 'Proof-of-Concept Pricing Dashboard',
    body:  'An interactive tool that lets the client\'s pricing team visualise their full menu-and-geography pricing architecture, model scenarios, and determine how to respond to competitors\' pricing moves — updated in near real time.'
  },
  esg: {
    title: 'ESG — Environmental, Social & Governance',
    body:  'ESG is a framework used by investors to evaluate companies beyond pure financial metrics. At HSBC, Claire evaluated 20+ ESG data providers and built a commercial client scorecard that shaped green-loan risk frameworks and informed multimillion-dollar investment decisions.'
  },
  savings200k: {
    title: '$200K Annual Savings',
    body:  'By redesigning HSBC\'s data pipeline tooling and presenting a compelling data story to senior leadership, Claire automated previously manual processes and secured organisational buy-in — generating roughly $200K in annual savings.'
  },
  algo: {
    title: 'Client Resolution Algorithm',
    body:  'Designed an algorithm that matched HSBC\'s internal client records to external data sources with 90%+ accuracy. This replaced expensive third-party vendor services, saved $200K+ annually, and improved data quality for downstream AI and analytics models.'
  },
  hackathon: {
    title: '1st Place — Kellogg AI Hackathon',
    body:  'Won first place in the inaugural Kellogg AI Club hackathon, competing against peers to rapidly prototype and deploy a practical AI application. Demonstrates the ability to combine technical execution with strategic product thinking under time pressure.'
  },
  triathlon: {
    title: 'Endurance Athlete',
    body:  'Claire competes in both triathlons (swim → bike → run) and marathons, requiring months of disciplined multi-sport training. The mental resilience and long-horizon thinking required by endurance sport mirrors her professional approach to complex, sustained challenges.'
  },
  iot: {
    title: 'AI Agents & IoT Devices',
    body:  'In her spare time, Claire builds autonomous AI agents capable of browsing the web, writing code, and completing multi-step tasks. She also develops IoT (Internet of Things) devices that wire physical sensors and actuators to cloud services.'
  }
};


// ─── Popup logic ──────────────────────────────────────────────────────────────

const popup      = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupBody  = document.getElementById('popup-body');

let hideTimer = null;

function showPopup(kw) {
  const data = POPUPS[kw.dataset.popup];
  if (!data) return;

  clearTimeout(hideTimer);

  popupTitle.textContent = data.title;
  popupBody.textContent  = data.body;

  // Position popup vertically near the keyword
  const rect     = kw.getBoundingClientRect();
  const kwMidY   = rect.top + rect.height / 2;
  const popupH   = popup.offsetHeight || 140;
  const maxTop   = window.innerHeight - popupH - 12;
  const top      = Math.max(12, Math.min(kwMidY - popupH / 2, maxTop));

  popup.style.top = top + 'px';

  kw.classList.add('active');
  popup.classList.add('visible');
}

function hidePopup(kw) {
  if (kw) kw.classList.remove('active');
  hideTimer = setTimeout(() => popup.classList.remove('visible'), 120);
}

document.querySelectorAll('.kw').forEach(kw => {
  kw.addEventListener('mouseenter', () => showPopup(kw));
  kw.addEventListener('mouseleave', () => hidePopup(kw));
  // Touch support
  kw.addEventListener('touchstart', (e) => {
    e.preventDefault();
    showPopup(kw);
  }, { passive: false });
});

// Keep popup open when hovering over it
popup.addEventListener('mouseenter', () => clearTimeout(hideTimer));
popup.addEventListener('mouseleave', () => hidePopup(null));
