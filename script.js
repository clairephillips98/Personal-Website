// ─── Day / Night theme ────────────────────────────────────────────────────────
// Day: 7 am – 7 pm  |  Night: 7 pm – 7 am

function applyTheme() {
  const h = new Date().getHours();
  document.documentElement.setAttribute(
    'data-theme',
    h >= 7 && h < 19 ? 'day' : 'night'
  );
}

applyTheme();
setInterval(applyTheme, 5 * 60 * 1000);


// ─── Popup content ────────────────────────────────────────────────────────────

const POPUPS = {

  education: {
    icon: '🎓',
    title: 'Education',
    html: `
      <div class="edu-item">
        <div class="edu-school">Kellogg School of Management, Northwestern</div>
        <div class="edu-degree">MBA &middot; Finance &amp; Strategy &middot; 2024–2026</div>
        <div class="edu-note">Co-President, Data Analytics Club &middot; VC Intern, Thomvest Ventures</div>
      </div>
      <div class="edu-item">
        <div class="edu-school">University of Toronto</div>
        <div class="edu-degree">MEng &middot; Computer Engineering &middot; 2023–2024</div>
        <div class="edu-note">Teaching Assistant, Calculus 3 &middot; Published in IEEE</div>
      </div>
      <div class="edu-item">
        <div class="edu-school">Queen's University</div>
        <div class="edu-degree">BASc &middot; Applied Math &amp; Computer Engineering &middot; 2016–2020</div>
        <div class="edu-note">Engineering Sustainability Team &middot; Orientation Leader &middot; Peer Mentor</div>
      </div>`
  },

  tech: {
    icon: '🔌',
    title: 'Tech & Engineering',
    html: `
      <p>Computer engineering background spanning data pipelines, machine learning, and cloud infrastructure.</p>
      <ul>
        <li><strong>Languages:</strong> Python, SQL</li>
        <li><strong>Visualisation:</strong> Tableau, PowerBI</li>
        <li><strong>Cloud:</strong> Google Cloud Platform (GCP)</li>
        <li><strong>Project tools:</strong> Jira, Monday.com</li>
        <li><strong>Certifications:</strong> Deep Learning (Coursera) &middot; Data Engineering, Big Data &amp; ML on GCP (Coursera) &middot; Business Certificate (Queen's)</li>
      </ul>`
  },

  sport: {
    icon: '👟',
    title: 'Endurance Athlete',
    html: `
      <p>Claire competes in <strong>triathlons</strong> (swim &rarr; bike &rarr; run) and <strong>marathons</strong>, requiring months of disciplined multi-sport training.</p>
      <p>She also dances. The focus and resilience built through endurance sport carry directly into her approach to long-horizon professional challenges.</p>`
  },

  esg: {
    icon: '🌍',
    title: 'ESG & Sustainability',
    html: `
      <p>A career and community thread running from university to banking to local volunteering:</p>
      <ul>
        <li>Evaluated <strong>20+ ESG data providers</strong> at HSBC, shaping multimillion-dollar investment decisions</li>
        <li>Built a proof-of-concept <strong>ESG scorecard</strong> for commercial clients, adopted for green-loan regulatory compliance</li>
        <li>Delivered the first internal view of <strong>environmental risk</strong> for 2,000+ HSBC commercial clients</li>
        <li>Volunteer with <strong>Transition Toronto</strong>, a community-led initiative advancing local sustainability and climate action</li>
        <li>Engineering Sustainability Team <strong>Executive Web Master</strong>, Queen's University</li>
      </ul>`
  },

  data: {
    icon: '📊',
    title: 'Data Science & Analytics',
    html: `
      <p>Across consulting and banking, Claire has built, deployed, and communicated data systems at scale.</p>
      <ul>
        <li><strong>BCG:</strong> Competitive pricing framework and proof-of-concept dashboard for a major QSR chain</li>
        <li><strong>HSBC Data Scientist:</strong> Improved AI model accuracy by <strong>50%+</strong>, enabling 300 bankers to assess $50M+ client portfolios held with competitors</li>
        <li><strong>HSBC Data Engineer:</strong> Client-resolution algorithm at <strong>90%+ accuracy</strong>, eliminating vendors and saving $200K+ annually</li>
        <li><strong>Kellogg:</strong> Co-President, Data Analytics Club</li>
      </ul>`
  },

  tinkering: {
    icon: '🔧',
    title: 'Tinkering & AI',
    html: `
      <p>Won <strong>1st place</strong> in the Kellogg AI Club's inaugural hackathon — rapidly prototyping and deploying a practical AI application under time pressure.</p>
      <p>As a hobbyist developer, Claire builds:</p>
      <ul>
        <li><strong>AI agents</strong> — autonomous systems that browse the web, write code, and complete multi-step tasks</li>
        <li><strong>IoT devices</strong> — connecting physical sensors and actuators to cloud services</li>
      </ul>`
  },

  research: {
    icon: '📡',
    title: 'Published Researcher',
    html: `
      <p>Published in <strong>IEEE</strong> during her MEng at the University of Toronto:</p>
      <blockquote>"MARL to Choose Actions On-the-Fly in a Cognitive Radar System"</blockquote>
      <p>The paper applies <strong>Multi-Agent Reinforcement Learning</strong> to cognitive radar — enabling radar agents to dynamically select optimal waveform actions in real time within complex, contested RF environments.</p>`
  },

  hsbc: {
    icon: '🏦',
    title: 'HSBC — Toronto Innovation Lab',
    html: `
      <div class="edu-item">
        <div class="edu-school">Data Scientist &middot; 2022–2023</div>
        <div class="edu-note">Increased AI model accuracy by 50%+, enabling 300 front-line bankers to assess $50M+ client portfolios &middot; Evaluated 20+ ESG data providers &middot; Customized data pipeline generating $200K annual savings &middot; Built ESG scorecard for green-loan compliance &middot; Led global data mapping tool development</div>
      </div>
      <div class="edu-item">
        <div class="edu-school">Data Engineer &middot; 2021–2022</div>
        <div class="edu-note">Built client-resolution algorithm at 90%+ accuracy, saving $200K+ annually &middot; Spearheaded first Innovation Lab pipeline to production (environmental risk for 2,000+ clients) &middot; Grew global team 8&times; to hit delivery deadline &middot; Launched graduate mentorship program with 100% retention</div>
      </div>`
  },

  bcg: {
    icon: '💼',
    title: 'BCG — Boston Consulting Group',
    html: `
      <p><strong>Summer Consultant &middot; 2025 &middot; San Francisco</strong><br/>Tech &amp; Digital Advantage Practice</p>
      <ul>
        <li>Created a <strong>competitive pricing framework</strong> for a major Quick Service Restaurant chain</li>
        <li>Built a <strong>proof-of-concept pricing dashboard</strong> enabling the client's team to visualise their pricing architecture and respond dynamically to competitor moves</li>
      </ul>
      <p>BCG's Tech &amp; Digital Advantage practice helps clients harness technology to create lasting competitive advantage.</p>`
  },

  internships: {
    icon: '🤝',
    title: 'In-Quarter Internships',
    html: `
      <p>Kellogg's lab courses embed MBA students directly with real organisations for a full quarter:</p>
      <div class="edu-item">
        <div class="edu-school">Thomvest Ventures &middot; VC Lab Course</div>
        <div class="edu-note">Worked as a VC MBA intern at a $1B+ AUM early-stage fund focused on fintech, enterprise software, and cybersecurity — evaluating deals and supporting portfolio companies.</div>
      </div>
      <div class="edu-item">
        <div class="edu-school">OCC &middot; Analytics &amp; AI Consulting Lab</div>
        <div class="edu-note">Delivered analytics and AI consulting engagements, applying data science methods to real client problems under the structure of a consulting lab.</div>
      </div>
      <div class="edu-item">
        <div class="edu-school">OneCalla &middot; New Venture Development Course</div>
        <div class="edu-note">Partnered with OneCalla as part of Kellogg's entrepreneurship lab, contributing to new venture strategy and development.</div>
      </div>`
  }

};


// ─── Modal logic ──────────────────────────────────────────────────────────────

const overlay    = document.getElementById('overlay');
const modalIcon  = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalBody  = document.getElementById('modal-body');

function openModal(key) {
  const d = POPUPS[key];
  if (!d) return;
  modalIcon.textContent  = d.icon;
  modalTitle.textContent = d.title;
  modalBody.innerHTML    = d.html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Open on item click
document.querySelectorAll('.item').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.popup));
});

// Close on X button
document.getElementById('modal-close').addEventListener('click', closeModal);

// Close on click outside the modal card
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
