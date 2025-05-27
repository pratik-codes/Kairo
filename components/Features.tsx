"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, Video, BookOpen, Lightbulb, RotateCcw, Target } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
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

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full px-6 py-20 bg-background" id="features" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your Learning Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Kairo combines cutting-edge AI with proven learning science to create a personalized tutoring experience that adapts to your unique learning style.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Personalized Topic Explanations - spans 2 columns on xl */}
          <motion.div 
            className="flex flex-col gap-y-6 xl:col-span-2"
            variants={cardVariants}
          >
            <motion.div 
              className="flex h-full flex-col justify-between gap-y-8 rounded-2xl border border-border bg-card p-8 transition-transform hover:translate-y-[-4px]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col gap-y-6">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 bg-black/10 dark:bg-black/30 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                </motion.span>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl text-card-foreground">Personalized Topic Explanations</h3>
                  <p className="w-full flex-grow text-muted-foreground md:max-w-96">
                    Ask Kairo about any concept and get clear, conversational explanations adapted to your knowledge level and learning style.
                  </p>
                </div>
              </div>
              
              <ul className="flex flex-col gap-y-1">
                {[
                  "Adaptive explanations for any subject",
                  "Context-aware learning progression", 
                  "Conversational interface like a human tutor"
                ].map((text, index) => (
                  <motion.li 
                    key={text}
                    className="flex flex-row items-center gap-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                    <p className="text-pretty leading-relaxed text-card-foreground">{text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Custom Video Animations */}
          <motion.div 
            className="flex flex-col gap-y-6"
            variants={cardVariants}
          >
            <motion.div 
              className="flex h-full flex-col justify-between gap-y-8 rounded-2xl border border-border bg-card p-8 transition-transform hover:translate-y-[-4px]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col gap-y-6">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 bg-black/10 dark:bg-black/30 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5" />
                  </div>
                </motion.span>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl text-card-foreground">Custom Video Animations</h3>
                  <p className="w-full flex-grow text-muted-foreground md:max-w-96">
                    Real-time generated visual explanations including animations, graphs, and 3D models tailored to your query.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-y-2">
                <motion.div 
                  className="flex items-center gap-x-4 overflow-auto rounded-lg border border-border bg-secondary p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-8 h-8 bg-black/10 dark:bg-black/30 rounded flex items-center justify-center">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-secondary-foreground">Custom Animation Generated</span>
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-x-4 gap-y-4 rounded-lg border border-border bg-secondary p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="h-8 w-8 overflow-hidden rounded-lg bg-black/10 dark:bg-black/30 flex items-center justify-center">
                      <span className="text-sm">🎬</span>
                    </div>
                    <span className="text-sm font-medium text-secondary-foreground">Photosynthesis Process</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex flex-row justify-between gap-x-2 text-sm text-muted-foreground">
                      <span>3D Molecular Animation</span>
                      <span>2:34</span>
                    </span>
                    <span className="flex flex-row justify-between gap-x-2 text-sm text-muted-foreground">
                      <span>Interactive Diagrams</span>
                      <span>1:45</span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Memory & Recall Tools */}
          <motion.div 
            className="flex flex-col gap-y-6"
            variants={cardVariants}
          >
            <motion.div 
              className="flex h-full flex-col justify-between gap-y-8 rounded-2xl border border-border bg-card p-8 transition-transform hover:translate-y-[-4px]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col gap-y-6">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 bg-black/10 dark:bg-black/30 rounded-lg flex items-center justify-center">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                </motion.span>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl text-card-foreground">Memory & Recall Tools</h3>
                  <p className="w-full flex-grow text-muted-foreground md:max-w-96">
                    Lock in your learning with postcards, adaptive quizzes, and spaced repetition systems.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: BookOpen, text: "Postcards" },
                  { icon: Target, text: "Adaptive Quiz" },
                  { icon: RotateCcw, text: "Spaced Repetition" },
                  { icon: Brain, text: "Memory Palace" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center gap-x-2 rounded-lg border border-border bg-secondary px-3 py-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <item.icon className="h-4 w-4 text-secondary-foreground" />
                    <span className="text-xs text-secondary-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Personalized Learning Paths */}
          <motion.div 
            className="flex flex-col gap-y-6"
            variants={cardVariants}
          >
            <motion.div 
              className="flex h-full flex-col justify-between gap-y-8 rounded-2xl border border-border bg-card p-8 transition-transform hover:translate-y-[-4px]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col gap-y-6">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 bg-black/10 dark:bg-black/30 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                </motion.span>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl text-card-foreground">Personalized Learning Paths</h3>
                  <p className="w-full flex-grow text-muted-foreground md:max-w-96">
                    Custom roadmaps that adapt based on your strengths, weaknesses, and learning preferences.
                  </p>
                </div>
              </div>
              
              <div className="relative h-[120px] md:h-[200px]">
                {[
                  { emoji: "📚", title: "Calculus Mastery", progress: "78%", next: "Integrals", bottom: 8 },
                  { emoji: "🧬", title: "Biology Basics", progress: "45%", next: "Genetics", bottom: 4 },
                  { emoji: "⚛️", title: "Physics Concepts", progress: "23%", next: "Momentum", bottom: 0 }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className={`absolute left-0 right-0 transition-transform hover:-translate-y-1`}
                    style={{ 
                      bottom: `${item.bottom * 4}px`, 
                      scale: 1 - index * 0.05,
                      animationDelay: `${1 + index * 0.2}s`
                    }}
                    whileHover={{ scale: 1, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  >
                    <div className="flex items-center gap-x-4 rounded-lg border border-border bg-secondary p-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-black/10 dark:bg-black/30 flex items-center justify-center">
                        <span>{item.emoji}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-secondary-foreground">{item.title}</span>
                        <span className="flex flex-row gap-x-2 text-sm text-muted-foreground">
                          <span>Progress: {item.progress}</span>
                          <span>•</span>
                          <span>Next: {item.next}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Natural Language Interaction */}
          <motion.div 
            className="flex flex-col gap-y-6"
            variants={cardVariants}
          >
            <motion.div 
              className="flex h-full flex-col justify-between gap-y-8 rounded-2xl border border-border bg-card p-8 transition-transform hover:translate-y-[-4px]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col gap-y-6">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 bg-black/10 dark:bg-black/30 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                </motion.span>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-xl text-card-foreground">Natural Conversation</h3>
                  <p className="w-full flex-grow text-muted-foreground md:max-w-96">
                    Chat with Kairo like a human tutor - ask for analogies, deeper explanations, or follow-up questions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-y-2 rounded-lg border border-border bg-secondary p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-foreground">"Explain quantum physics like I'm 10"</span>
                  <span className="text-sm text-secondary-foreground">✓ Adapted</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-2">
                  <span className="text-sm text-muted-foreground">"Can you give me an analogy?"</span>
                  <span className="text-sm text-muted-foreground">2s ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">"Show me the math behind it"</span>
                  <span className="text-sm text-muted-foreground">5s ago</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
