
import {
  logo,
  creator,
  web,
  github,
  menu,
  close,
  css,
  patientAppointment,
  employeeManagement,
  kneeInspect,
  mysql,
  mui,
  
  figma,
  git,
  html,
  javascript,
  tailwind,
  php,
  csharp,
  net,
  python,
  java,
  bootstrap,
  neekhil,
  kiran,
  girish,
  tejashri,
} from '../assets'


import argos from "../assets/company/argos.png";
import nec from "../assets/company/nec.png";
import hertzsoft from "../assets/company/hertzsoft.png";

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    courseName: "Master of Science in Engineering Management",
    year: "2023 - 2024",
    university: "Aston University, Birmingham, UK",
    grade: "Merit",
    icon: creator,
  },
  {
    courseName: "Bachelor of Engineering in Computer Engineering",
    year: "2017 - 2021",
    university: "K.J. Somaiya Institute of Engineering and Information Technology, Mumbai, India",
    grade: "8.34/10",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Customer Advisor",
    company_name: "Argos",
    icon: argos,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Helped customers daily, noting their preferences to spot service needs, which taught me the value of user-focused insights.",
      "Solved customer issues with care, tailoring solutions to boost satisfaction by 15%, fueling my passion for user designs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NEC Software Solutions",
    icon: nec,
    iconBg: "#383E56",
    date: "Jun 2021 - Aug 2023",
    points: [
      "Collaborated with cross-functional teams to deliver innovative software solutions, streamlining Agile product workflows.",
      "Facilitated sprint planning, gathering user feedback and translating them into prioritized features for product roadmaps.",
      "Mitigated risks through proactive analysis, reducing delays by 15% for seamless product execution.",
      "Leveraged Jira and Azure DevOps to track progress, align teams, and support effective product roadmap execution.",
      "Integrated customer insights from reviews, reducing support issues by 20% for user-centric design and product gains.",
      "Optimized SQL queries, improving data performance by 30% to provide actionable product insights for decision-making."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Hertzsoft Technologies Pvt. Ltd.",
    icon: hertzsoft,
    iconBg: "#383E56",
    date: "Dec 2019 - Aug 2020",
    points: [
      "Proactively coded responsive websites, ensuring seamless user experiences that sparked my interest in product design.",
      "Managed project timelines with stakeholders, aligning deliverables with goals, honing my skills in team coordination.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rahil was just fresh out of college when he joined the team, but the way he used to work was really good. He used to complete all the assigned activities on time and with minimal help or supervision. In terms of coding, his code had no rework or very minimal rework required when a complex module was implemented. The best quality I like about him is that he takes feedback positively and quickly adapts to those changes. Given his experience, his work is exceptional, and he is not afraid to ask questions. I am sure that he will be an asset wherever he goes!",
    name: "Neekhil Dedhia",
    designation: "Senior Software Developer",
    company: "Gamanet",
    image: neekhil,
  },
  {
    testimonial:
      "Rahil is a highly motivated and competitive professional who joined our team straight out of college, already well-versed in web technologies. He has a proven ability to learn new technologies quickly and apply them to real-world projects. He consistently delivered assignments on time with minimal supervision, and his work requires very few revisions if any. His strong analytical skills enabled him to quickly grasp product knowledge and make significant contributions in a remarkably short time. Rahil is able to convey his thoughts concisely and collaborate effectively with the team. Rahil's willingness to embrace feedback and his proactive approach to learning make him an exceptional team member.",
    name: "Girish Lokhande",
    designation: "Solutions Architect",
    company: "NEC Software Solutions",
    image: girish,
  },
  {
    testimonial:
      "From the moment Rahil joined, he demonstrated an extraordinary ability to grasp product knowledge swiftly, enabling him to make valuable contributions in a remarkably short period. His natural communication skills have been an asset to our team, as he effortlessly conveys complex information concisely and transparently. His open and proactive communication style allows him to address roadblocks effectively, seeking input from Product teams, the QA team, or the Development team as needed. Moreover, he has seamlessly handled tasks delegated by other developers, analyzing multiple scenarios precisely and collaborating effectively with cross-functional teams. I highly recommend him for any challenging software development project.",
    name: "Tejashri Athalye",
    designation: "Programme Manager",
    company: "NEC Software Solutions",
    image: tejashri,
  },
  {
    testimonial:
      "Rahil is a technically adept individual, highly enthusiastic, and highly committed to every responsibility he takes. His adaptability shines as he excels across various technologies, and his communication skills are exceptional, enabling him to convey complex ideas with clarity and precision. As a strong team player, Rahil will be a valuable asset to any group. I wish him all the best in his future endeavors.",
    name: "Kiran Sakpal",
    designation: "Technical Lead",
    company: "NEC Software Solutions",
    image: kiran,
  },
];

const projects = [
  {
    name: "Employee Management",
    description:
      "This web-based app simplifies HR tasks by managing employee profiles, admin accounts, categories, departments, designations, and salaries. With a responsive Tailwind CSS interface, it offers a dashboard with key metrics and insights, ensuring secure, scalable operations via PHP and libraries like jQuery and DataTables, ideal for boosting business productivity.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "white-text-gradient",
      },
    ],
    image: employeeManagement,
    source_code_link: "https://github.com/rshah2399/EmployeeManagement",
  },
  {
    name: "Patient Apoointment System",
    description:
      "A website that simplified healthcare scheduling by allowing patients to register and book appointments, improving access to care. It enabled doctors to upload reports for patients to download, streamlining communication, while my focus on user-friendly design enhanced the overall healthcare experience.",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
    ],
    image: patientAppointment,
    source_code_link: "https://github.com/rshah2399/Patient-Appointment-System",
  },
  {
    name: "Knee Inspect",
    description:
      "An app that I led from idea to launch which revolutionized knee assessments for doctors by enabling photo-based quadriceps angle measurements across the full software development lifecycle, from concept to testing. I designed its logo and intro pages to boost user engagement with key posture insights, and published a research paper showcasing my passion for innovative healthcare solutions.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
 
    ],
    image: kneeInspect,
    source_code_link: "https://github.com/munishvira/Qangle",
  },
];

export { education, technologies, experiences, testimonials, projects };
