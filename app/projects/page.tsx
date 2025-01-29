"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/project-card";

export const PROJECTS = [
  {
    title: "Brainwave",
    description: "A simple weather application using OpenWeatherMap API.",
    image: "/projects/Brainwave/Thumbnail.png",
    video: "/projects/Brainwave/video.mp4",
    github: "https://github.com/juhinagpure/Brainwave-",
    demo: "https://brainwave-chi-brown.vercel.app/",
    technologies: ["ReactJ", "TailwindCss "],
  },
  {
    title: "Christmas Gifts",
    description: "An AI-powered chat bot using natural language processing.",
    image: "/projects/Christmas-Gifts/Thumbnail.png",
    video: "/projects/Christmas-Gifts/video.mp4",
    github: "https://github.com/juhinagpure/Christmas-Landing-page",
    demo: "https://christmas-landing-page-bay.vercel.app/",
    technologies: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Fruit Store",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/projects/Fresh-fruit/Thumbnail.png",
    video: "/projects/Fresh-fruit/video.mp4",
    github: "https://github.com/juhinagpure/Fresh-Fruits-Store",
    demo: "https://fresh-fruits-store.netlify.app/",
    technologies: ["React", "Tailwind Css", "framer-motion"],
  },

  {
    title: "Recipe Finder",
    description: "A mobile app for tracking workouts and nutrition.",
    image: "/projects/Recipe-Finder/Thumbnail.png",
    video: "/projects/Recipe-Finder/video.mp4",
    github: "https://github.com/juhinagpure/Recipe-Finder",
    demo: "https://recipe-finder-jvym.vercel.app/",
    technologies: ["ReactJs", "TailwindCss", "Typescript"],
  },

  {
    title: "Movie Watchlist",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/projects/Movie-watchlist/Thumbnail.png",
    video: "/projects/Movie-watchlist/video.mp4",
    github: "https://github.com/juhinagpure/Movie-Watchlist-App",
    demo: "https://movie-watchlist-app-1.vercel.app/",
    technologies: ["React Js", "Tailwind CSS", "Next Js"],
  },

  {
    title: "Omnifood",
    description: "A productivity app for managing daily tasks and projects.",
    image: "/projects/Omnifood/Thumbnail.png",
    video: "/projects/Omnifood/video.mp4",
    github: "https://github.com/username/task-manager",
    demo: "https://omnifood-start-up-html-css-js.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Usability Hub",
    description:
      "A custom blog platform with a rich text editor and comment system.",
    image: "/projects/Usability-Hub/Thumbnail.png",
    video: "/projects/Usability Hub/video.mp4",
    github: "https://github.com/juhinagpure/Usability-Hub",
    demo: "https://juhinagpure.github.io/Usability-Hub/",
    technologies: ["HTML", "CSS", "JavaScript", "Media Queries"],
  },
];

function getRandomSize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.main
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="grid grid-cols-4 lg:grid-cols-12 gap-4"
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`col-span-4`}
          >
            <ProjectCard {...project} className="h-full" />
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}
