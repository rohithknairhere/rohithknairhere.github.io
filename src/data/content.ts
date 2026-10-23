/**
 * All site text lives here. Edit this file to change what the site says —
 * no component changes needed.
 *
 * Anything marked PLACEHOLDER is waiting for you to fill in.
 */

export const site = {
  name: "Rohith K Nair",
  initials: "RKN",
  location: "Faridabad, Haryana, India",
  email: "rohithkrishnan431@gmail.com",
  // The file lives at public/resume.pdf.
  // PLACEHOLDER: replace public/resume.pdf with your real resume (keep the same name).
  resumeFile: "resume.pdf",
  taglines: ["AI & Data Science student", "Builder", "Student Representative"],
  socials: {
    github: "https://github.com/rohithknairhere",
    linkedin: "https://linkedin.com/in/rohith-k-nair",
  },
};

export const about = {
  paragraph:
    "B.Tech Artificial Intelligence & Data Science student at Amrita Vishwa Vidyapeetham, School of Artificial Intelligence (Faridabad), graduating 2029. I build AI tools and web apps, simulate systems in MATLAB, and enjoy teaching and leading teams.",
  education: [
    {
      school: "Amrita Vishwa Vidyapeetham",
      detail: "B.Tech AI & Data Science",
      period: "2025–2029 (expected)",
    },
    {
      school: "Naipunya Public School, Kochi",
      detail: "Class XII (CBSE)",
      period: "",
    },
    {
      school: "Presidency School, Bangalore North",
      detail: "Class X",
      period: "",
    },
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Who it was for / where it happened. Leave "" if none. */
  context: string;
  /** Link to the repo. Leave "" to hide the link. */
  github: string;
  /**
   * Extra bullet points shown in the project modal.
   * PLACEHOLDER: add 2–3 points each (what you built, your role, what you learned).
   * While empty, the modal shows "More detail coming soon".
   */
  details: string[];
};

export const projects: Project[] = [
  {
    title: "Financial Audit Chatbot",
    description: "AI chatbot assisting financial audit queries for Amrita Hospital, Delhi NCR.",
    tags: ["AI", "Python"],
    context: "Amrita Hospital, Delhi NCR",
    github: "",
    details: [],
  },
  {
    title: "Hospital Management Web Apps",
    description:
      "Three web apps (hostel, employee and vehicle management) for Amrita Hospital, Delhi NCR.",
    tags: ["Web Development"],
    context: "Amrita Hospital, Delhi NCR",
    github: "",
    details: [],
  },
  {
    title: "HackerHouse Hackathon",
    description: "Team project placed in the top 25 teams in India.",
    tags: ["Hackathon"],
    context: "HackerHouse Hackathon",
    github: "",
    details: [],
  },
  {
    title: "High-Frequency Market-Making Simulation",
    description:
      "Modelled and simulated a market-making strategy and analysed its performance under execution latency.",
    tags: ["MATLAB", "Simulation"],
    context: "",
    github: "",
    details: [],
  },
  {
    title: "Rural Healthcare Worker & Medicine Supply Chain Tracker",
    description:
      "AVL trees for fast record lookup and a min-heap to prioritise medicine supply.",
    tags: ["Python", "AVL Tree", "Min-Heap"],
    context: "",
    github: "",
    details: [],
  },
  {
    title: "Adaptive Noise-Aware Signal Detection",
    description: "Adaptive detection using CFAR thresholding in varying noise.",
    tags: ["Signal Processing", "CFAR"],
    context: "",
    github: "",
    details: [],
  },
];

export type TimelineItem = {
  role: string;
  org: string;
  note: string;
  /** PLACEHOLDER: add dates (e.g. "2025 – present"). Leave "" to hide. */
  period: string;
};

export const leadership: TimelineItem[] = [
  {
    role: "Student Representative",
    org: "B.Tech, School of AI, Amrita Faridabad",
    note: "",
    period: "",
  },
  {
    role: "Associate President",
    org: "Chitrang Cultural Club, Amrita Faridabad",
    note: "",
    period: "",
  },
  {
    role: "Volunteer Tutor",
    org: "8 months",
    note: "Taught underprivileged students aged 7–16.",
    period: "",
  },
  {
    role: "Head Boy (Class X) & Associate Head Boy (Class IX)",
    org: "Presidency School, Bangalore North",
    note: "",
    period: "",
  },
  {
    role: "Basketball",
    org: "District level",
    note: "Played at district level; captained school and club teams.",
    period: "",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python", "C", "MATLAB", "Java", "HTML"] },
  {
    group: "Areas",
    items: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Modeling & Simulation",
      "Computer Networks",
      "Robotics",
    ],
  },
  { group: "Tools", items: ["Git/GitHub", "MATLAB", "LaTeX"] },
  { group: "Languages", items: ["English", "Hindi", "Malayalam"] },
];

export const contact = {
  // PLACEHOLDER: edit this line so it says what you're actually open to.
  blurb:
    "Open to internships, collaborations and conversations about AI, data and building things. The quickest way to reach me is email.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
