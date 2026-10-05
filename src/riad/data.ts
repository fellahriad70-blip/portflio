export const PROFILE = {
  name: "Ahmed Riadh Fellah",
  shortName: "Riadh Fellah",
  firstName: "RIADH",
  lastName: "FELLAH",
  title: "Software Engineer @ BADR Bank",
  subtitle: "Data Scientist · Banking Information Systems",
  location: "Algiers, Algeria",
  email: "fellahriad70@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/riad-fellah-ba0a20248/",
  },
  status: "Open to Software Engineering · Data Science · AI · Digital Transformation",
  intro:
    "Software Engineer at BADR Bank building the systems behind banking operations — credit platforms, accounting reconciliation, regulatory reporting — and a data scientist turning enterprise data into decisions with machine learning.",
};

export const NAV = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "projects", label: "Projects", index: "03" },
  { id: "research", label: "Research", index: "04" },
  { id: "skills", label: "Stack", index: "05" },
  { id: "education", label: "Education", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
];

export const STATS = [
  { value: 8, suffix: "", label: "Banking platforms", sub: "delivered to production" },
  { value: 2, suffix: "", label: "MICCAI workshop papers", sub: "co-authored, 2026" },
  { value: 90, suffix: "%+", label: "ML accuracy", sub: "on solar irradiation" },
  { value: 4, suffix: "+", label: "Years in software", sub: "since first internship, 2022" },
];

export const ABOUT = [
  "I am a software engineer and data science graduate with experience in banking information systems, machine learning, and enterprise software development.",
  "Currently, I work as a Software Engineer at BADR Bank — Banque de l'Agriculture et du Développement Rural — where I design, develop, and maintain banking applications while collaborating with business and technical teams to deliver reliable software solutions.",
  "My academic background in Data Science and Analytics enabled me to build predictive machine learning models, analyse large-scale datasets, and transform data into actionable insights. My master's research focused on predicting solar irradiation from meteorological data using machine learning, achieving predictive accuracy above 90%.",
  "Alongside industry work, I co-authored two papers accepted at MICCAI 2026 workshops, contributing machine learning engineering to medical imaging research in head-and-neck tumour analysis and EEG-based seizure detection.",
];

export const CORE_AREAS = [
  { label: "Software Engineering", icon: "code" },
  { label: "Data Science", icon: "database" },
  { label: "Machine Learning", icon: "brain" },
  { label: "Data Analytics", icon: "chart" },
  { label: "Banking Information Systems", icon: "building" },
  { label: "Business Intelligence", icon: "lightbulb" },
];

export const EXPERIENCE = [
  {
    company: "BADR Bank",
    full: "Banque de l'Agriculture et du Développement Rural",
    logoKey: "badr",
    role: "Software Engineer",
    type: "Full-time",
    period: "Oct 2025 — Present",
    where: "Chéraga, Algiers",
    accent: "blue",
    bullets: [
      "Design and develop software solutions supporting banking operations.",
      "Analyse business requirements and translate them into technical specifications.",
      "Maintain and improve banking information systems.",
      "Collaborate with cross-functional teams to deliver secure and scalable applications.",
      "Produce technical documentation and provide user support.",
    ],
    current: true,
  },
  {
    company: "Université d'Alger",
    full: "University of Algiers 1 — Benyoucef Benkhedda",
    logoKey: "univ",
    role: "Part-time Lecturer — Algorithmics Tutorials",
    type: "Part-time",
    period: "Jan 2025 — May 2025",
    where: "Algiers, Algeria",
    accent: "green",
    bullets: [
      "Taught algorithmic concepts to first-cycle students, with emphasis on problem solving, computational thinking and algorithm design.",
      "Supported students through practical exercises and assignments to reinforce theory and its concrete application.",
    ],
  },
  {
    company: "Université d'Alger",
    full: "University of Algiers 1 — Benyoucef Benkhedda",
    logoKey: "univ",
    role: "Data Analyst Intern",
    type: "Internship",
    period: "Mar 2024 — May 2024",
    where: "Algiers, Algeria",
    accent: "green",
    bullets: [
      "Analysed, processed, stored and shared over 10,000 meteorological records to support solar panel placement.",
      "Used Python and advanced data processing, analysis and cleaning tools, reaching accuracy above 90%.",
      "Evaluated model performance by computing precision and the coefficient of determination for each time period tested.",
    ],
  },
  {
    company: "Sonelgaz",
    full: "Société Nationale de l'Électricité et du Gaz",
    logoKey: "sonelgaz",
    role: "Full Stack Developer Intern",
    type: "Internship",
    period: "Feb 2022 — Jun 2022",
    where: "Algiers, Algeria",
    accent: "amber",
    bullets: [
      "Built a platform to automate the management of transformers for the electricity production unit.",
      "Represented the three-person web development team when presenting the project to management.",
      "Reviewed the project code to ensure sound structure and security, and hosted the application within the host organisation.",
    ],
  },
];

export type Project = {
  n: string;
  title: string;
  client: string;
  logoKey: "badr" | "poste" | "finance" | "miclaat";
  body: string;
  tech: string[];
  accent: "blue" | "green" | "amber" | "violet";
  kind: "credit" | "identity" | "rates" | "tax" | "complaint" | "agency" | "ledger" | "control";
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Consumer Credit Management",
    client: "Algérie Poste",
    logoKey: "poste",
    kind: "credit",
    body: "Platform for managing consumer credit operations for Algérie Poste customers. Handles account transactions — withdrawals and transfers to dedicated platform accounts — with automated data extraction and XML file generation in compliance with Banque d'Algérie requirements.",
    tech: ["PHP", "PL/SQL", "XML", "SQL"],
    accent: "blue",
  },
  {
    n: "02",
    title: "NIN Verification & Customer Information Automation",
    client: "BADR Bank · MICLAAT",
    logoKey: "miclaat",
    kind: "identity",
    body: "Automated solution for managing and validating National Identification Numbers using data from the MICLAAT system. Matches customer NINs, verifies validity, identifies discrepancies, and retrieves customer information through an automated workflow.",
    tech: ["Python", "SQL", "Data Automation"],
    accent: "green",
  },
  {
    n: "03",
    title: "Euro Exchange Rate Web Service",
    client: "BADR Bank",
    logoKey: "badr",
    kind: "rates",
    body: "Web service for managing euro exchange-rate data, including the creation and modification of exchange-rate records, with a structured interface for updating and integrating rate information across banking systems.",
    tech: ["Web Services", "PHP", "SQL", "REST / SOAP"],
    accent: "violet",
  },
  {
    n: "04",
    title: "Tax & Trade Management Platform",
    client: "Ministry of Finance",
    logoKey: "finance",
    kind: "tax",
    body: "Platform for managing trade-related tax information and automating the collection and processing of financial data. Retrieves XML files, processes the required information, and supports end-of-month reporting and data consolidation.",
    tech: ["PHP", "PL/SQL", "XML", "SQL"],
    accent: "amber",
  },
  {
    n: "05",
    title: "GAP Incident & Complaint Management",
    client: "BADR Bank — all agencies",
    logoKey: "badr",
    kind: "complaint",
    body: "Complaint and incident management platform for GAP-related issues reported across BADR agencies. Centralises complaints, tracks status, facilitates follow-up, and supports the resolution process across the agency network.",
    tech: ["PHP", "SQL", "PL/SQL"],
    accent: "blue",
  },
  {
    n: "06",
    title: "Agency-Level Customer Complaint Management",
    client: "BADR Bank",
    logoKey: "badr",
    kind: "agency",
    body: "Solution for managing customer complaints directly at the agency level. Enables agencies to register, track, process, and follow up on complaints with full visibility into status and resolution.",
    tech: ["PHP", "SQL", "PL/SQL"],
    accent: "green",
  },
  {
    n: "07",
    title: "General Ledger Account Management & Reconciliation",
    client: "BADR Bank",
    logoKey: "badr",
    kind: "ledger",
    body: "Platform for searching, analysing, and validating General Ledger accounts across banking operations including consumer and real-estate loans. Provides detailed transaction information and performs accounting reconciliation, verifying that total debit and credit amounts balance.",
    tech: ["PHP", "PL/SQL", "SQL", "XML", "Financial Data"],
    accent: "violet",
  },
  {
    n: "08",
    title: "Daily Accounting Control & Transaction Validation",
    client: "BADR Bank",
    logoKey: "badr",
    kind: "control",
    body: "Monitoring and validation of daily accounting entries across transaction types. A scheduled job runs daily at 3:00 AM to populate control tables; a five-day rolling mechanism maintains required history. Detected anomalies are automatically reported to the responsible director.",
    tech: ["PHP", "PL/SQL", "Database Jobs", "Automated Validation"],
    accent: "amber",
  },
];

export const RESEARCH = {
  intro:
    "Alongside enterprise engineering, I contribute machine learning engineering to medical imaging research. Two papers I co-authored were accepted at MICCAI 2026 workshops.",
  papers: [
    {
      title:
        "A Dual-Branch Fusion Pipeline for Head and Neck Tumor Segmentation, TN Staging, and Recurrence-Free Survival Prediction: HECKTOR 2026",
      authors: "Ikram Aissiou, Riadh Fellah, Sam Guessoum, Naima Boukhiar",
      badge: "MICCAI Workshop · HECKTOR 2026",
      venue: "MICCAI Workshop — HECKTOR 2026 · Strasbourg, France",
      note: "Joint tumour segmentation, TN staging and survival prediction from multimodal PET/CT.",
    },
    {
      title:
        "NeuroGraphMamba: A Spatial-Temporal Graph State-Space Architecture for Patient-Independent Epileptic Seizure Detection",
      authors: "Ikram Aissiou, Naima Boukhiar, Sam Guessoum, Riadh Fellah",
      badge: "AMAI 2026 · Poster",
      venue: "Poster — AMAI 2026 · Strasbourg, France",
      note: "Graph state-space modelling of EEG for patient-independent seizure detection.",
    },
  ],
};

export type Tech = { name: string; icon?: string; mono?: boolean };

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const TECH_GROUPS: { title: string; accent: string; icon: string; items: Tech[] }[] = [
  {
    title: "Languages & Data",
    accent: "blue",
    icon: "code",
    items: [
      { name: "Python", icon: `${DEV}/python/python-original.svg` },
      { name: "C", icon: `${DEV}/c/c-original.svg` },
      { name: "SQL", icon: `${DEV}/azuresqldatabase/azuresqldatabase-original.svg` },
      { name: "PL/SQL", icon: `${DEV}/oracle/oracle-original.svg` },
      { name: "JavaScript", icon: `${DEV}/javascript/javascript-original.svg` },
      { name: "PHP", icon: `${DEV}/php/php-original.svg` },
      { name: "HTML / CSS", icon: `${DEV}/html5/html5-original.svg` },
    ],
  },
  {
    title: "Machine Learning & Analytics",
    accent: "green",
    icon: "brain",
    items: [
      { name: "Scikit-learn", icon: `${DEV}/scikitlearn/scikitlearn-original.svg` },
      { name: "Pandas", icon: `${DEV}/pandas/pandas-original.svg`, mono: true },
      { name: "NumPy", icon: `${DEV}/numpy/numpy-original.svg` },
      { name: "Matplotlib", icon: `${DEV}/matplotlib/matplotlib-original.svg` },
      { name: "Seaborn" },
      { name: "Power BI" },
      { name: "Jupyter Notebook", icon: `${DEV}/jupyter/jupyter-original.svg` },
    ],
  },
  {
    title: "Frameworks & Tools",
    accent: "violet",
    icon: "layers",
    items: [
      { name: "React", icon: `${DEV}/react/react-original.svg` },
      { name: "Laravel", icon: `${DEV}/laravel/laravel-original.svg` },
            { name: "Git", icon: `${DEV}/git/git-original.svg` },
      { name: "UML" },
      { name: "OLAP" },
    ],
  },
  {
    title: "Domain Expertise",
    accent: "amber",
    icon: "briefcase",
    items: [
      { name: "Banking IS" },
      { name: "Regulatory Reporting" },
      { name: "Accounting Reconciliation" },
      { name: "Statistical Modelling" },
      { name: "Feature Engineering" },
      { name: "Data Cleaning" },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.Sc. — Data Science and Analytics",
    grade: "Graduated: Excellent",
    place: "Université d'Alger 1, Benyoucef Benkhedda",
    period: "May 2024",
    logoKey: "univ",
    thesis:
      "Machine learning to predict solar irradiation from meteorological data.",
    accent: "blue",
  },
  {
    degree: "B.Sc. — Information Systems and Software Engineering",
    grade: "Graduated: Very Good",
    place: "Université d'Alger 1, Benyoucef Benkhedda",
    logoKey: "univ",
    period: "Jun 2022",
    thesis:
      "Developing a web application to automate the management of electricity transformers in Algiers.",
    accent: "green",
  },
];

export const LANGUAGES = [
  { name: "Arabic", level: "Fluent", pct: 100 },
  { name: "French", level: "Intermediate", pct: 60 },
  { name: "English", level: "Intermediate", pct: 60 },
];
