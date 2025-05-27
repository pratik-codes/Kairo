"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, BookOpen, Folder } from "lucide-react";

type Platform = "notion" | "googledocs" | "obsidian" | "allplatforms";

// Animation variants
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

const Integration = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>("notion");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const platformData = {
    notion: {
      title: "Notion Integration",
      description: "Transform your Notion notes into interactive learning experiences with AI-powered explanations and visual content.",
      features: [
        "Import your existing notes and documents",
        "Generate visual explanations from text",
        "Create interactive quizzes from content",
        "Turn content into Kairo Shorts"
      ],
      image: "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?q=80&w=3260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showCode: false
    },
    googledocs: {
      title: "Google Docs Integration",
      description: "Seamlessly connect your Google Docs to create comprehensive learning materials with collaborative features.",
      features: [
        "Real-time synchronization with Google Drive",
        "Collaborative learning content creation",
        "Auto-generate study guides from documents",
        "Share learning sessions with classmates"
      ],
      image: "https://www.customguide.com/images/cover-images/google-docs.webp",
      showCode: false
    },
    obsidian: {
      title: "Obsidian Integration",
      description: "Connect your Obsidian vault to leverage your networked thinking and create dynamic learning paths.",
      features: [
        "Import your knowledge graphs and connections",
        "Visualize concept relationships",
        "Create learning paths from linked notes",
        "Turn your PKM system into active learning"
      ],
      image: "https://imagedelivery.net/M-WJkhhMQR3UnTiHqMrwAA/b8dd22ab-abef-4ee0-364a-5c3a98e63e00/public",
      showCode: false
    },
    allplatforms: {
      title: "All Platforms Integration",
      description: "We're integrating all the major platforms that students use to make Kairo your one-stop shop for learning and productivity.",
      features: [
        "Unified dashboard for all your content",
        "Cross-platform content synchronization",
        "Seamless workflow between tools",
        "One learning experience across all platforms"
      ],
      image: "https://plus.unsplash.com/premium_photo-1720551256879-92e5b13285be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showCode: false
    }
  };

  const currentPlatform = platformData[activePlatform];

  return (
    <section className="w-full px-6 py-20 bg-background" id="integration" ref={ref}>
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
              Content Integration
            </motion.span>
            <motion.h1 
              className="w-fit max-w-2xl text-pretty text-center text-2xl md:text-4xl md:leading-normal text-card-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Learn from your existing content
            </motion.h1>
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { key: "notion", icon: FileText, label: "Notion" },
                { key: "googledocs", icon: FileText, label: "Google Docs" },
                { key: "obsidian", icon: BookOpen, label: "Obsidian" },
                { key: "allplatforms", icon: Folder, label: "All Platforms" }
              ].map((platform, index) => (
                <motion.div
                  key={platform.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant={activePlatform === platform.key ? "secondary" : "outline"}
                    className={`gap-2 h-10 px-4 py-2 text-sm rounded-full ${
                      activePlatform === platform.key 
                        ? "text-card-foreground hover:bg-secondary bg-secondary" 
                        : "border-border hover:bg-secondary"
                    }`}
                    onClick={() => setActivePlatform(platform.key as Platform)}
                  >
                    <platform.icon className="h-4 w-4" />
                    <span>{platform.label}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col gap-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex flex-col gap-y-4">
                <h2 className="text-2xl font-semibold text-card-foreground">{currentPlatform.title}</h2>
                <p className="text-muted-foreground">
                  {currentPlatform.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-y-4">
                {currentPlatform.features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="h-2 w-2 rounded-full bg-foreground"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <span className="text-card-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl bg-secondary border border-border p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {currentPlatform.showCode ? (
                <>
                  <div className="mb-4">
                    <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                      <span>kairo-integration.js</span>
                    </div>
                  </div>
                  <div className="font-mono text-sm text-secondary-foreground">
                    <div className="mb-2">
                      <span className="text-muted-foreground">// Universal content import</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-foreground">import</span> <span className="text-secondary-foreground">{'{ KairoClient }'}</span> <span className="text-foreground">from</span> <span className="text-secondary-foreground">'@kairo/sdk'</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-foreground">const</span> <span className="text-secondary-foreground">kairo = </span><span className="text-foreground">new</span> <span className="text-secondary-foreground">KairoClient()</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-muted-foreground">// Connect any platform</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-foreground">const</span> <span className="text-secondary-foreground">content = </span><span className="text-foreground">await</span> <span className="text-secondary-foreground">kairo.import(</span>
                    </div>
                    <div className="mb-2 ml-4">
                      <span className="text-secondary-foreground">platform, // notion, gdocs, obsidian...</span>
                    </div>
                    <div className="mb-2 ml-4">
                      <span className="text-secondary-foreground">{'{ generateAnimations: true }'}</span>
                    </div>
                    <div>
                      <span className="text-secondary-foreground">)</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <img 
                    src={currentPlatform.image} 
                    alt={`${currentPlatform.title} Preview`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;
