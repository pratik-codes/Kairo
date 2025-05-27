"use client"

import { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain, Video, BookOpen } from "lucide-react";
import AnimatedBeam from './AnimatedBeam';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <motion.div 
      className="container flex flex-col items-center justify-center gap-12 overflow-hidden rounded-3xl px-6 py-16 text-center md:py-24 relative z-10 border"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Canvas Background */}
      <div className="absolute inset-0 -z-20">
        <AnimatedBeam />
      </div>
      
      {/* Black Overlay for Text Visibility */}
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      
      {/* Original Grid Background (now additional layer) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02]"></div>
      </div>
      
      <motion.div 
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-white/20"
        variants={badgeVariants}
        animate={floatingAnimation}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Brain className="w-4 h-4 text-white" />
        </motion.div>
        <span className="text-sm text-white">Powered by Advanced AI</span>
      </motion.div>
      
      <motion.h1 
        className="text-balance text-white text-5xl !leading-tight tracking-tight text-foreground md:px-0 md:text-7xl font-bold"
        variants={itemVariants}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your Personal AI Tutor
        </motion.span>
        <motion.span 
          className="block text-foreground text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          That Never Sleeps
        </motion.span>
        <motion.p 
          className="mt-4 font-light text-pretty text-2xl leading-relaxed md:px-0 text-white max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Transform how you learn with Kairo - an AI-powered tutor that creates custom animations, 
          interactive recall tools, and personalized explanations tailored to your learning style and pace.
        </motion.p>
      </motion.h1>
      
      <motion.div 
        className="flex flex-col sm:flex-row items-center gap-4"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button className="gap-2 h-12 px-8 py-4 text-base rounded-full bg-white text-background border-0">
            <div className="flex flex-row items-center gap-x-2 text-black">
              <div>Start Learning</div>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </div>
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant="outline" className="gap-2 h-12 px-8 py-4 text-white text-base rounded-full border-border hover:bg-secondary">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Video className="w-4 h-4" />
            </motion.div>
            Watch Demo
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex items-center gap-8 text-sm text-white/60"
        variants={itemVariants}
      >
        {[
          { icon: BookOpen, text: "Any Subject" },
          { icon: Video, text: "Custom Animations" },
          { icon: Brain, text: "Personalized Learning" }
        ].map((item, index) => (
          <motion.div 
            key={item.text}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.text}</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
