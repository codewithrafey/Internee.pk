import cloud from '../assets/cloud.png';
import collab from '../assets/collab 1.png';
import see from '../assets/see.png';
import logo1 from '../assets/logo1 1.png';
import nics from '../assets/nics.png';
import pitb from '../assets/pitb.png';
import graphics from '../assets/graphic.avif';
import frontend from '../assets/frontend.webp';
import backend from '../assets/backend.webp';
import machine from '../assets/machine.avif';
import mobile from '../assets/mobile-app.avif';
import chatbot from '../assets/chatbot.webp';

export const images = [
  { id: 1, image: cloud },
  { id: 2, image: collab },
  { id: 3, image: see },
  { id: 4, image: logo1 },
  { id: 5, image: nics },
  { id: 6, image: pitb },
];

export const internshipsData = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Learn to build beautiful and responsive web interfaces.",
    image: frontend,
    subInternships: [
      { name: "React.js Internship", duration: "1 Month", level: "Beginner" },
      { name: "Angular Internship", duration: "1 Month", level: "Intermediate" },
      { name: "Next.js Internship", duration: "1 Month", level: "Advanced" },
      { name: "HTML, CSS & JS Internship", duration: "15 Days", level: "Basic" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Master the server-side technologies and database management.",
    image: backend,
    subInternships: [
      { name: "Node.js Internship", duration: "1 Month", level: "Intermediate" },
      { name: "Python Django Internship", duration: "1 Month", level: "Advanced" },
      { name: "PHP Laravel Internship", duration: "1 Month", level: "Intermediate" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Develop powerful and efficient mobile apps for Android and iOS.",
    image: mobile,
    subInternships: [
      { name: "React Native Internship", duration: "1 Month", level: "Beginner" },
      { name: "Flutter Internship", duration: "1 Month", level: "Intermediate" },
      { name: "Kotlin Android Internship", duration: "1 Month", level: "Advanced" },
    ],
  },
  {
    id: "graphics",
    title: "Graphic Design",
    description: "Create stunning visuals and learn real-world design tools.",
    image: graphics,
    subInternships: [
      { name: "Canva Internship", duration: "15 Days", level: "Beginner" },
      { name: "Adobe Photoshop Internship", duration: "1 Month", level: "Intermediate" },
      { name: "Illustrator Internship", duration: "1 Month", level: "Advanced" },
    ],
  },
  {
    id: "chatbot",
    title: "Chatbot Development",
    description: "Learn to design and build intelligent chatbots using AI and NLP.",
    image: chatbot,
    subInternships: [
      { name: "Dialogflow Internship", duration: "1 Month", level: "Intermediate" },
      { name: "Python Chatbot Internship", duration: "1 Month", level: "Advanced" },
      { name: "Rasa AI Internship", duration: "1 Month", level: "Advanced" },
    ],
  },
  {
    id: "machine",
    title: "Machine Learning",
    description: "Get hands-on with data science, AI, and deep learning projects.",
    image: machine,
    subInternships: [
      { name: "Python ML Internship", duration: "1 Month", level: "Beginner" },
      { name: "Deep Learning Internship", duration: "1 Month", level: "Intermediate" },
      { name: "AI Model Building Internship", duration: "1 Month", level: "Advanced" },
    ],
  },
];
