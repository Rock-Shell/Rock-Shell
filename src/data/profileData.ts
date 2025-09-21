// src/data/profileData.ts

export const profileData = {
  name: "Ayush Gupta",
  references: {
    linkedin: "https://www.linkedin.com/in/ayush-gupta-5b9091174/",
    email: "ayushgupta.ra@email.com",
    phone: "9650284340",
  },
  summary: [
    "AIML Engineer with experience building scalable GenAI applications and ML pipelines across cloud platforms.",
    "Skilled in RAG, langchain & langgraph, Llamaindex, LLMs, vector databases, and attention-based architectures.",
    "Proven track record of deploying real-time GenAI solutions using LLMs for intelligent automation, personalized customer interactions, and contextual understanding.",
    "Passionate about optimizing ML workflows with model evaluation, distillation, and prompt engineering techniques."
  ].join(' '),
  experience: [
    {
      company: "GEP",
      role: "Associated Data Scientist",
      duration: "Jan 2025 - Present",
      description:
        "Automating Contract Lifecycle Management using AI, empowering contract redlining, contract drafting, and contract quality check.",
    },
    {
      company: "Capgemini",
      role: "Software Engineer Intern",
      duration: "Aug 2022 - Jun 2025",
      description: [
        "Developed and deployed RAG-based conversational AI chatbots using OpenAI, LangChain, and pgvector, reducing support time by 60%.",
        "Designed agentic workflows using LangGraph and human feedback loops; implemented zero-shot and CoT prompting techniques.",
        "Built and optimized an AI-powered support system using OpenAI embeddings and GPT models, improving ticket resolution rates and reducing manual intervention.",
        "Automated ticket categorization with XGBoost and K-Means, classifying tickets based on issue IDs, streamlining triage processes, and improving response efficiency, achieving >0.8 F1-score.",
        "Engineered a Generative AI API for automated reverse engineering and project documentation, reducing manual effort by 60%.",
        "Conducted LLM evaluation using BLEU, ROUGE, and perplexity metrics with comparative analysis via LLM-as-a-Judge.",
        "Collaborated with cross-functional stakeholders to align AI deliverables with business KPIs and regulatory constraints."
      ].join(' '),
    },
    {
      company: "Usthaan",
      role: "Machine Learning Intern",
      duration: "May 2022 - July 2022",
      description:
        [
          "Developed a hybrid NER model (SVM + rule-based) for invoice extraction from PDFs and images.",
          "Evaluated and integrated OCR libraries (Tesseract, EasyOCR, Keras OCR, Textract) into Dockerized APIs with Jenkins-based deployment."
        ].join(' '),
    },
  ],
  projects: [
    {
      name: "Unattended Luggage Detection",
      description: [
        "Detect unattended items and alert security about their presence.",
        "Processed the ULD dataset using masking, frame differencing, and gradient-based image techniques.",
        "Fine-tuned YOLOv3 for object detection (bags, purses, boxes), achieving 89% accuracy.",
        "Deployed via Azure Kubernetes Service (AKS) with monitoring through Azure Application Insights."
      ].join(' '),
      link: "#",
    },
    {
      name: "Bike Demand Prediction and Profit Optimization",
      description: [
        "Predicted daily bike rentals with real-world historical data, using Random Forest Regressor and hyperparameter tuning.",
        "Simulated real-world variations, and calculated the best number of bikes to maximize the profit.",
        "Focused on both accuracy and real-world profitability."
      ].join(' '),
      link: "#",
    },
    {
      name: "Yoga Pose Supervisor",
      description: [
        "Developed a computer vision model to analyze and classify yoga poses in real-time.",
        "Implemented a feedback loop for users to improve their poses based on model suggestions.",
        "Utilized transfer learning with pre-trained models to enhance accuracy and reduce training time."
      ].join(' '),
      link: "#",
    }
  ],
  education: [
      {
        "institute": "Maharaja Agrasen Institute of Technology",
        "degree": "Bachelor of Technology",
        "duration": "Aug 2018 - May 2022"
      },
      {
        "institute": "Bhai Parmanand Vidya Mandir",
        "degree": "Class XII (CBSE)",
        "duration": "2016 - 2018"
      }
  ],
  publications: [
    "Received Center stage award for creating reverse engineering API which helped in reducing human efforts up to 60-65% while creating technical specifications documents",
    "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Creators Club Member, Analytics Vidhya"
  ]
};
