"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integration from "@/components/Integration";
import IngestionBilling from "@/components/IngestionBilling";
import CommandLineTools from "@/components/CommandLineTools";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
    },
  },
};

const Index = () => {
  return (
    <div className="bg-white dark:bg-black">
      <motion.div
        className="text-foreground md:w-10/12 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Header />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Features />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Integration />
        </motion.div>
        <motion.div variants={itemVariants}>
          <IngestionBilling />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CommandLineTools />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FAQ />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CTA />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
