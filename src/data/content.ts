/**
 * All site text lives here. Edit this file to change what the site says —
 * no component changes needed. Content mirrors the resume in public/resume.pdf.
 *
 * Anything marked PLACEHOLDER is waiting for you to fill in.
 */

export const site = {
  name: "Rohith K Nair",
  initials: "RKN",
  location: "Faridabad, Haryana",
  email: "rohithkrishnan431@gmail.com",
  // The file lives at public/resume.pdf. To update it, replace that file (keep the name).
  resumeFile: "resume.pdf",
  taglines: ["AI & Data Science student", "Builder", "Student Representative"],
  socials: {
    github: "https://github.com/rohithknairhere",
    linkedin: "https://linkedin.com/in/rohith-k-nair",
  },
};

export const about = {
  paragraph:
    "B.Tech Artificial Intelligence & Data Science student with hands-on experience building AI chatbots and web applications for a hospital, simulation models in MATLAB, and data-structure-driven systems in Python.",
  interests: [
    { area: "FinTech", detail: "High-frequency trading and low-latency market systems" },
    { area: "Defence", detail: "Autonomous drones and AI for defence systems" },
    {
      area: "Cybersecurity",
      detail: "Defence cyber operations, AI-driven threat detection and intrusion detection",
    },
  ],
  education: [
    {
      school: "Amrita Vishwa Vidyapeetham",
      detail: "B.Tech in Artificial Intelligence and Data Science (Semester III), School of Artificial Intelligence, Delhi NCR",
      period: "2025 – 2029",
    },
    {
      school: "Naipunya Public School, Kochi",
      detail: "Class XII, CBSE",
      period: "",
    },
    {
      school: "Presidency School Bangalore North, Bengaluru",
      detail: "Class X, CBSE",
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
    description:
      "Built an AI chatbot to assist with finding revenue leakage and optimizing financial audits for the hospital.",
    tags: ["AI", "Python"],
    context: "Amrita Hospital, Delhi NCR",
    github: "",
    details: [],
  },
  {
    title: "Hospital Management Web Apps",
    description: "Developed three web applications for hostel, employee and vehicle management.",
    tags: ["Web Development"],
    context: "Amrita Hospital, Delhi NCR",
    github: "",
    details: [],
  },
  {
    title: "HackerHouse Goa Hackathon",
    description: "Placed among the top 25 teams in India in Task 4.",
    tags: ["Team Project"],
    context: "",
    github: "",
    details: [],
  },
  {
    title: "High-Frequency Market-Making Simulation",
    description:
      "Modeled and simulated a high-frequency market-making strategy and analysed its performance under execution latency.",
    tags: ["MATLAB", "Modeling & Simulation"],
    context: "",
    github: "",
    details: [],
  },
  {
    title: "Rural Healthcare Worker & Medicine Supply Chain Tracker",
    description:
      "Built a tracker that uses AVL trees for fast record lookup and a min-heap to prioritise medicine supply.",
    tags: ["Python", "AVL Trees", "Min-Heap"],
    context: "",
    github: "",
    details: [],
  },
  {
    title: "Adaptive Noise-Aware Signal Detection",
    description:
      "Team project on adaptive signal detection using Constant False Alarm Rate (CFAR) thresholding in varying noise.",
    tags: ["CFAR", "Signal Processing"],
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
    role: "Head Boy (Class X) & Associate Head Boy (Class IX)",
    org: "Presidency School Bangalore North",
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

/**
 * `assisted` items are shown with a dashed outline and an "AI-assisted" note,
 * matching how the resume lists them.
 */
export const skills: { group: string; items: string[]; assisted?: string[] }[] = [
  { group: "Programming", items: ["Python", "C", "MATLAB"], assisted: ["Java", "HTML"] },
  {
    group: "Core Areas",
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
  blurb: "The quickest way to reach me is email.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
