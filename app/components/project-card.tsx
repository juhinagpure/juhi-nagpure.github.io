import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

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

interface ProjectCardProps {
  title: string;
  description: string;
  video?: string;
  image?: string;
  github: string;
  demo: string;
  className: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  video,
  image,
  github,
  demo,
  className,
  technologies,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0;
    }
  }, []);

  return (
    <motion.div
      className={`bg-pink-200 rounded-[20px] p-4 flex flex-col overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered(!isHovered)}
    >
      <div className="relative w-full aspect-video mb-4">
        {video ? (
          <video
            src={video}
            className="object-cover aspect-video rounded-lg w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            poster={image || "/placeholder.svg"}
          />
        ) : (
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        )}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm font-light mb-4 flex-grow">{description}</p>

      <motion.div className="flex justify-between items-center">
        <motion.div
          variants={containerVariants}
          className="flex gap-1.5 items-center"
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={itemVariants}
              className="text-[10px] font-medium uppercase px-1.5 py-0.5 bg-pink-300/60 rounded-full h-[18px] grid place-items-center"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          animate={{
            x: isHovered ? 0 : "100%",
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="flex items-center gap-2"
        >
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex gap-1 items-center bg-pink-300 rounded-md px-1.5 py-1"
          >
            Code
            <Code size={16} />
          </Link>
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex gap-1 items-center bg-pink-300 rounded-md px-1.5 py-1"
          >
            Demo
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
