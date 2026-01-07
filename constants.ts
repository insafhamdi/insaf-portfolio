
import { Experience, Certification, Recommendation, SkillCategory, Milestone } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Coficert",
    role: "IA Developer & Data Science Engineer",
    period: "Nov 2024 - Present",
    location: "Tunis, Tunisia",
    description: [
      "Leading automation projects for financial (AML) and extra-financial (ESG) standards.",
      "Developing intelligent pipelines for regulatory compliance in high-stakes monopolistic sectors.",
      "Integrating SOTA AI models to optimize auditing and risk assessment workflows."
    ],
    skills: ["AI Automation", "ESG", "AML", "FinTech", "Python", "Regulatory Tech"]
  },
  {
    company: "ICube Strasbourg",
    role: "NLP & Generative AI Intern",
    period: "Feb 2025 - Aug 2025",
    location: "Strasbourg, France",
    description: [
      "Main author of a research paper accepted at IEEE ICTAI 2025 (21% acceptance rate).",
      "Automated the Hayling Test with ML/NLP by benchmarking embeddings, contextual models & LLMs.",
      "Built Python apps: a speech-to-text demo and a psychologist tool with active learning dashboards."
    ],
    skills: ["NLP", "LLMs", "AI Agents", "Python", "Research"]
  },
  {
    company: "A2SV | Africa to Silicon Valley",
    role: "Honors Ambassador & SE Trainee",
    period: "Jan 2024 - Present",
    location: "Remote / Global",
    description: [
      "Selected as Honors Ambassador for Tunisia, representing top-tier African engineering talent.",
      "Advanced algorithmic training with focus on competitive programming and scalable architecture.",
      "Engaged in global hackathons and community mentoring."
    ],
    skills: ["Algorithms", "Leadership", "Mentoring", "Python", "Data Structures"]
  }
];

export const MILESTONES: Milestone[] = [
  {
    title: "18/20 Thesis Defense",
    description: "A rare academic mention marking the completion of my Statistics & IA Engineering degree.",
    tag: "Graduation",
    image: "./images/thesis.jpg"
  },
  {
    title: "IEEE ICTAI 2025",
    description: "Presenting my research on automated neuro-scoring in the historic heart of Athens.",
    tag: "Athens",
    image: "https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Cassini Hackathon",
    description: "Developing 'Moodstranaut' with my amazing team and our support cat, Walter.",
    tag: "Hackathon",
    image: "./images/hackathon.jpg"
  },
  {
    title: "Open Startup (OST)",
    description: "Solo talent journey and collaboration with Columbia Business School teams.",
    tag: "Entrepreneurship",
    image: "./images/ost.jpg"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Django", "Flask", "REST", "JWT"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Neo4j", "Qdrant", "SQLite"]
  },
  {
    category: "AI & ML",
    items: ["LangChain", "LlamaIndex", "HuggingFace", "PyTorch", "RAG"]
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "GCP", "Azure", "Git"]
  },
  {
    category: "Document Processing",
    items: ["Docling", "LlamaIndex", "Kreuzberg", "Chonkie", "Unstructured"]
  },
  {
    category: "Agentic Frameworks",
    items: ["Google ADK", "LangGraph", "Agno", "CrewAI", "Haystack"]
  },
  {
    category: "Automation & Workflows",
    items: ["N8N", "Airflow", "Prefect", "Celery", "Temporal"]
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "Polars", "Apache Spark", "Jupyter", "Plotly"]
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    author: "Fikremariam Asegie",
    role: "Software Engineer @Bloomberg | A2SV Mentor",
    content: "Insaf stood out as a dedicated and talented student. Her technical abilities are exceptional, having solved over 270 problems on advanced topics. I am confident she will excel in any future endeavor.",
    date: "Feb 20, 2025"
  },
  {
    author: "Lilia Trabelsi Masmoudi",
    role: "Coach & Professor - Maître Assistante ESSAI",
    content: "Insaf was a serious and attentive student. She demonstrated an ability to collaborate, learn investigate and take initiatives. Her 18/20 thesis defense is a testament to her excellence.",
    date: "Feb 19, 2025"
  }
];
