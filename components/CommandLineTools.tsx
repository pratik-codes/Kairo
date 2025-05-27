"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Video, Cpu, Database } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CommandLineTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Brain,
      title: "Multimodal Foundation Models",
      description: "Advanced AI models that understand text, images, and video to create rich, contextual learning experiences."
    },
    {
      icon: Video,
      title: "Generative Video Pipeline",
      description: "Real-time animation and 3D model generation that brings abstract concepts to life with stunning visuals."
    },
    {
      icon: Cpu,
      title: "Personalization Engine",
      description: "LLM-driven knowledge modeling that adapts to your learning style, pace, and preferences."
    },
    {
      icon: Database,
      title: "Content Ingestion Engine",
      description: "Seamlessly parse and understand content from Notion, Google Docs, and other platforms."
    },
    {
      icon: Brain,
      title: "Spaced Repetition System",
      description: "Science-backed microlearning algorithms that optimize retention and recall timing."
    },
    {
      icon: Video,
      title: "Real-time Rendering",
      description: "High-performance graphics pipeline for instant generation of educational animations and visualizations."
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-background" id="technology" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="rounded-2xl flex w-full flex-col gap-y-16 bg-card border border-border p-8 md:p-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex flex-col items-center gap-y-8"
            variants={itemVariants}
          >
            <motion.span 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powered By
            </motion.span>
            <motion.h1 
              className="w-fit max-w-2xl text-pretty text-center text-2xl md:text-4xl md:leading-normal text-card-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Cutting-edge AI technology that makes learning magical
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" className="gap-2 text-card-foreground hover:bg-secondary bg-secondary h-10 px-4 py-2 text-sm rounded-full">
                <span>Learn about our tech</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="flex w-full flex-col gap-y-4 rounded-3xl bg-secondary border border-border p-8"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 1.0 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="flex flex-row items-center gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    <tech.icon className="h-5 w-5 text-foreground" />
                  </motion.div>
                  <h1 className="text-xl text-secondary-foreground">{tech.title}</h1>
                </motion.div>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  {tech.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommandLineTools;
