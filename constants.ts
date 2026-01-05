
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Ananya Gawade",
  role: "Computer Engineering Student @ PCCOE Pune",
  email: "ananyagawade5@gmail.com",
  github: "https://github.com/AnanyaGawade",
  linkedin: "https://www.linkedin.com/in/ananya-gawade/",
  location: "Pune, Maharashtra",
  shortBio: "Aspiring Full Stack Developer and Computer Engineering student with a focus on Java, Spring Boot, and React.",
  bio: "I am pursuing my Bachelor's degree in Computer Engineering at PCET's Pimpri Chinchwad College of Engineering, Pune. I have hands-on experience in full-stack development through internships and personal projects, with a strong interest in Data Structures, Machine Learning, and building efficient web solutions.",
  skills: [
    { name: "React", level: 90, category: 'Frontend' },
    { name: "SpringBoot", level: 85, category: 'Backend' },
    { name: "Tailwind CSS", level: 95, category: 'Frontend' },
    { name: "SQL", level: 80, category: 'Backend' },
    { name: "Java", level: 90, category: 'Language' },
    { name: "Python", level: 75, category: 'Language' },
    { name: "C++", level: 85, category: 'Language' },
    { name: "Machine Learning", level: 70, category: 'Other' },
  ],
  projects: [
    {
      id: "1",
      title: "Personal To-Do List App",
      description: "A robust task management application featuring a clean user interface, task persistence, and categorized lists for enhanced productivity.",
      tags: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      featured: true,
      githubUrl: "https://github.com/AnanyaGawade"
    },
    {
      id: "2",
      title: "ML Sentiment Classifier",
      description: "Implemented a machine learning model to classify user feedback and sentiments, developed as part of professional certification.",
      tags: ["Python", "Scikit-Learn", "Data Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      featured: true,
      githubUrl: "https://github.com/AnanyaGawade"
    },
    {
      id: "3",
      title: "Data Structures Visualization",
      description: "A C++/C based project to visualize complex data structures like Trees and Graphs for better conceptual understanding.",
      tags: ["C++", "DSA", "Algorithms"],
      imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      featured: false,
      githubUrl: "https://github.com/AnanyaGawade"
    }
  ],
  experience: [
    {
      id: "e1",
      company: "Sindans",
      role: "Full Stack Developer Intern",
      period: "1 Month",
      description: [
        "Worked as a Full Stack Developer focusing on React for frontend and Java Spring Boot for backend.",
        "Integrated REST APIs and contributed to building responsive UI components.",
        "Collaborated on optimizing backend logic and database queries for better application performance."
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "PCET's Pimpri Chinchwad College of Engineering, Pune",
      degree: "B.Tech in Computer Engineering (Third Year)",
      period: "2022 - 2026",
      gpa: "8.0 CGPA",
      highlights: [
        "Specializing in Software Development & Data Structures",
        "Active member of coding clubs",
        "Python for Data Science (NPTEL Certified)"
      ]
    },
    {
      id: "edu2",
      institution: "GeetaMata Junior College",
      degree: "12th State Board",
      period: "2020 - 2022",
      gpa: "84.5%",
      highlights: [
        "Academic excellence in Science & Mathematics",
        "Mastering Data Structures using C and CPP (Udemy Certified)"
      ]
    },
    {
      id: "edu3",
      institution: "Jnana Prabodhini Nigdi Gurukul",
      degree: "10th State Board",
      period: "Completed",
      gpa: "92.80%",
      highlights: [
        "Strong foundation in logical reasoning and academics",
        "Schooling with focus on holistic development"
      ]
    }
  ]
};
