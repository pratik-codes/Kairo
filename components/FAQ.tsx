"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
      duration: 0.5,
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What is Kairo and how does it work?",
      answer: "Kairo is an AI-powered personal tutor that creates custom animations, interactive learning materials, and personalized explanations for any subject. It adapts to your learning style and pace, making complex concepts easier to understand through visual and interactive content."
    },
    {
      question: "Can I use my existing notes and documents with Kairo?",
      answer: "Yes! Kairo integrates with popular platforms like Notion, Google Docs, and Obsidian. You can import your existing notes and study materials, and Kairo will transform them into interactive learning experiences with animations, quizzes, and visual explanations."
    },
    {
      question: "What are Kairo Shorts?",
      answer: "Kairo Shorts are bite-sized educational videos (30-60 seconds) that transform your social media scrolling into productive learning time. They're automatically generated based on your study history and interests, helping you learn while you scroll."
    },
    {
      question: "How does Kairo personalize my learning experience?",
      answer: "Kairo uses advanced AI to analyze your learning patterns, strengths, and preferences. It adapts explanations to your knowledge level, creates content that matches your learning style, and uses spaced repetition to optimize retention and recall timing."
    },
    {
      question: "What subjects does Kairo support?",
      answer: "Kairo supports virtually any subject - from mathematics and science to history, languages, and professional skills. The AI can generate explanations and visual content for any topic you're studying or curious about."
    },
    {
      question: "Is Kairo free to use?",
      answer: "Kairo offers a free tier that includes basic features like personalized explanations and limited custom animations. Premium features like unlimited content generation, advanced integrations, and Kairo Shorts require a subscription."
    },
    {
      question: "How accurate are Kairo's explanations and content?",
      answer: "Kairo uses state-of-the-art AI models trained on vast educational datasets. While highly accurate, we always recommend cross-referencing important information with authoritative sources, especially for academic or professional purposes."
    },
    {
      question: "Can I use Kairo offline?",
      answer: "Currently, Kairo requires an internet connection to generate new content and animations. However, you can save and access previously generated materials offline through our mobile app."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-20 bg-background" id="faq" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-center mx-auto text-2xl md:text-4xl md:leading-normal text-card-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything you need to know about Kairo and how it can transform your learning experience.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-card border border-border overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-secondary transition-colors"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5 text-foreground" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeOut" },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeIn" },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="px-6 pb-6"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 
