"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowSquareOut,
  Code,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "./projects/page";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juhi-nagpure-38108b21b/",
    icon: <LinkedinLogo size={20} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/juhinagpure",
    icon: <GithubLogo size={20} />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/juhinagpure143/",
    icon: <Code size={20} />,
  },
];

const CONTACT_LINKS = [
  {
    label: "juhinagpure56@gmail.com",
    url: "mailto:juhinagpure56@gmail.com",
    icon: <Envelope size={20} />,
  },
  {
    label: "+91 9356908592",
    url: "tel:+919356908592",
    icon: <Phone size={20} />,
  },
  {
    label: "Nagpur, India",
    icon: <MapPin size={20} />,
  },
];

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

const ContactCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRect, setCardRect] = useState({
    top: 0,
    left: 0,
    width: 320,
    height: 320,
  });
  console.log("cardRect", cardRect);
  useEffect(() => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setCardRect(rect);
    }
  }, [cardRef.current?.clientHeight]);

  return (
    <motion.div
      ref={cardRef}
      className="col-span-4 group/contact lg:col-span-4 row-span-2 min-h-48 p-4 lg:p-6 bg-pink-300 rounded-[20px] relative overflow-hidden"
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered(!isHovered)}
      layout
    >
      <div className="grid grid-cols-[1fr,auto] grid-rows-[1fr_auto] gap-4 items-start absolute inset-0 p-4 lg:p-6">
        <motion.span
          className="text-sm font-light leading-tight"
          transition={{ duration: 0.3 }}
          animate={{ y: isHovered ? -320 : 0 }}
        >
          Have some <br />
          questions?
        </motion.span>

        <motion.span
          transition={{ duration: 0.3 }}
          animate={{ rotate: isHovered ? 135 : -45 }}
        >
          <ArrowRight size={32} weight="bold" />
        </motion.span>
        {!isHovered && (
          <motion.p className="font-medium text-3xl" layoutId="contact">
            Contact me
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ y: "100%" }}
        className="absolute inset-0 p-4 lg:p-6 space-y-5"
        animate={{
          y: isHovered ? 0 : cardRect.height,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.p layoutId="contact" className="font-medium text-3xl">
          Contact me
        </motion.p>

        <div className="flex flex-col gap-3">
          {CONTACT_LINKS.map((link) =>
            link.url ? (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit gap-1.5 items-center text-base"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ) : (
              <div
                key={link.label}
                className="flex gap-1.5 items-center text-base"
              >
                {link.icon}
                <span>{link.label}</span>
              </div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SocialLinksCard = () => {
  return (
    <motion.div
      className="col-span-4 lg:col-span-4 bg-pink-200 rounded-[20px] p-4 lg:p-6 grid grid-cols-3 gap-3 place-content-center place-items-center"
      variants={itemVariants}
    >
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center text-base px-2 py-1 transition-colors hover:bg-pink-300 rounded-lg"
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </motion.div>
  );
};

const ProjectsCard = () => {
  return (
    <motion.div
      className="col-span-4 lg:col-span-4 row-span-2 bg-pink-200 rounded-[20px] p-4 lg:p-6 flex flex-col gap-3 h-full"
      variants={containerVariants}
    >
      {PROJECTS.slice(0, 5).map((project) => (
        <>
          <motion.div variants={itemVariants} className="group/project-card">
            <div className="grid gap-2 items-center grid-cols-[1fr,auto]">
              <h2 className="text-xl font-medium mb-1">{project.title}</h2>
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex gap-1 items-center bg-pink-300/80 rounded-md px-1.5 py-1 transition-opacity invisible group-hover/project-card:visible"
              >
                Preview
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </div>

            <div className="flex gap-2 items-center">
              {project.technologies.map((tech) => (
                <span className="text-[10px] font-medium uppercase px-1.5 py-0.5 bg-pink-300/30 rounded-full h-[18px] grid place-items-center">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col rounded-sm overflow-hidden my-3"
          >
            <span className="h-px bg-pink-300/30" />
            <span className="h-px bg-pink-300/60" />
          </motion.div>
        </>
      ))}
      <motion.div variants={itemVariants} className="mb-auto">
        <Link
          href="/projects"
          className="text-xl font-medium mt-auto flex gap-1.5 items-center hover:underline"
        >
          View all projects
          <ArrowSquareOut size={20} weight="bold" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <motion.main
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="grid grid-cols-4 lg:grid-cols-12 gap-5 auto-rows-min"
        variants={containerVariants}
      >
        <motion.div
          className="relative col-span-4 lg:col-span-5 lg:row-span-1 bg-pink-200 rounded-[20px] p-4 lg:p-6 grid items-end"
          variants={itemVariants}
        >
          <motion.p
            className="font-semibold text-3xl lg:text-5xl leading-normal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {"Bringing Designs <br />to Life with <br />React and Code"
              .split(/(to Life)/)
              .map((part, index) => {
                return part === "to Life" ? (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className="font-light italic"
                  >
                    {part}
                  </motion.span>
                ) : (
                  part.split(/(<br \/>)/).map((char, charIndex) =>
                    char === "<br />" ? (
                      <br key={`${index}-${charIndex}`} />
                    ) : (
                      <motion.span
                        key={`${index}-${charIndex}`}
                        variants={itemVariants}
                      >
                        {char}
                      </motion.span>
                    )
                  )
                );
              })}
          </motion.p>
          <motion.span
            className="absolute top-6 right-6"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Image
              src="/icons/flower.svg"
              width={100}
              height={100}
              alt="Flower"
            />
          </motion.span>
        </motion.div>
        <motion.div
          className="col-span-4 lg:col-span-3 bg-pink-200 bg-blend-multiply rounded-[20px] p-4 aspect-square"
          variants={itemVariants}
          style={{
            backgroundImage: `url("/images/profile.jpeg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <ProjectsCard />

        <motion.div
          className="col-span-4 row-start-3 lg:row-start-2 lg:col-span-4 row-span-2 bg-pink-200 rounded-[20px] p-4 lg:p-6 flex flex-col gap-3 justify-end"
          variants={itemVariants}
        >
          <Image
            src="/icons/star.svg"
            width={32}
            height={32}
            alt="Star"
            className="mb-auto"
          />
          <p className="font-light">
            Hi! I’m Juhi, a frontend developer passionate about creating
            user-friendly and visually appealing websites. I’m currently
            sharpening my skills in HTML, CSS, JavaScript, and React, with a
            curiosity for exploring new tech and trends. I love turning ideas
            into responsive, engaging digital experiences and am excited to
            collaborate and grow in the world of web development. My approach is
            both cute and unique, aiming to bring a fresh perspective to every
            project.
          </p>
        </motion.div>

        <ContactCard />
        <SocialLinksCard />
      </motion.div>
    </motion.main>
  );
}
