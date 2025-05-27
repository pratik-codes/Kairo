"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Eye, Clock, User, Target, Gamepad2, Trophy, Zap, Heart, Star, TrendingUp, Award, Users, Timer, ChevronRight } from "lucide-react";

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
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const IngestionBilling = () => {
  const [activeTab, setActiveTab] = useState("educational");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabContent = {
    educational: {
      title: "Educational Content",
      description: "Auto-generated educational shorts based on your learning history and curriculum.",
      features: [
        "Adaptive difficulty based on your progress",
        "Covers topics you&apos;re currently studying", 
        "Interactive quizzes and challenges",
        "Spaced repetition for better retention"
      ],
      videos: [
        { title: "Photosynthesis in 60s", views: "2.4K", duration: "1:00" },
        { title: "Calculus Made Simple", views: "1.8K", duration: "0:45" },
        { title: "Quantum Physics Basics", views: "3.1K", duration: "1:15" },
        { title: "History in 30s", views: "1.2K", duration: "0:30" }
      ]
    },
    personalized: {
      title: "Personalized Learning",
      description: "AI-curated content tailored to your learning style, pace, and interests.",
      features: [
        "Custom learning paths based on your goals",
        "Content adapted to your preferred learning style",
        "Smart recommendations from your activity",
        "Progress tracking and milestone celebrations"
      ],
      videos: [
        { title: "Your Math Journey", views: "856", duration: "1:30" },
        { title: "Science for You", views: "1.2K", duration: "0:55" },
        { title: "Custom Study Plan", views: "743", duration: "1:10" },
        { title: "Your Progress Story", views: "924", duration: "0:40" }
      ]
    },
    interactive: {
      title: "Interactive Experience",
      description: "Engage with content through gamified learning, challenges, and real-time feedback.",
      features: [
        "Tap-to-reveal interactive elements",
        "Real-time quizzes and polls",
        "Achievement badges and streaks",
        "Collaborative learning challenges"
      ],
      videos: [
        { title: "Quiz Challenge", views: "3.8K", duration: "0:50" },
        { title: "Memory Game", views: "2.1K", duration: "1:20" },
        { title: "Speed Learning", views: "1.9K", duration: "0:35" },
        { title: "Team Challenge", views: "2.7K", duration: "1:05" }
      ]
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "educational": return <Target className="h-4 w-4" />;
      case "personalized": return <User className="h-4 w-4" />;
      case "interactive": return <Gamepad2 className="h-4 w-4" />;
      default: return null;
    }
  };

  const renderRightSideContent = () => {
    if (activeTab === "personalized") {
      return (
        <div className="flex flex-col gap-4">
          {/* User Progress Card */}
          <div className="rounded-2xl bg-secondary border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-secondary-foreground">Your Learning Path</h3>
              <div className="text-sm text-muted-foreground">67% Complete</div>
            </div>
            <div className="w-full bg-card rounded-full h-2 mb-4">
              <div className="bg-foreground h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-secondary-foreground">156 points</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-secondary-foreground">12 day streak</span>
              </div>
            </div>
          </div>

          {/* Recommended Videos */}
          <div className="rounded-2xl bg-secondary border border-border p-4">
            <h3 className="font-medium text-secondary-foreground mb-3">Recommended for You</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center">
                  <Play className="h-4 w-4 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-secondary-foreground text-sm">Advanced Calculus</div>
                  <div className="text-xs text-muted-foreground">Based on your recent activity</div>
                </div>
                <Heart className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center">
                  <Play className="h-4 w-4 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-secondary-foreground text-sm">Biology Review</div>
                  <div className="text-xs text-muted-foreground">Perfect for your level</div>
                </div>
                <Heart className="h-4 w-4 text-red-500" />
              </div>
            </div>
          </div>

          {/* Study Goals */}
          <div className="rounded-2xl bg-secondary border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-secondary-foreground">This Week&apos;s Goals</h3>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-secondary-foreground">Complete 5 math videos</span>
                <span className="text-xs text-green-500 ml-auto">4/5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-secondary-foreground">Study 30 minutes daily</span>
                <span className="text-xs text-yellow-500 ml-auto">2/7</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "interactive") {
      return (
        <div className="flex flex-col gap-4">
          {/* Leaderboard */}
          <div className="rounded-2xl bg-secondary border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-secondary-foreground">Weekly Leaderboard</h3>
              <Trophy className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold text-black">1</div>
                <span className="text-secondary-foreground text-sm">You</span>
                <span className="text-xs text-muted-foreground ml-auto">2,450 pts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs font-bold text-black">2</div>
                <span className="text-secondary-foreground text-sm">Alex</span>
                <span className="text-xs text-muted-foreground ml-auto">2,380 pts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-black">3</div>
                <span className="text-secondary-foreground text-sm">Sarah</span>
                <span className="text-xs text-muted-foreground ml-auto">2,290 pts</span>
              </div>
            </div>
          </div>

          {/* Active Challenges */}
          <div className="rounded-2xl bg-secondary border border-border p-4">
            <h3 className="font-medium text-secondary-foreground mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              Active Challenges
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-card-foreground">Speed Quiz</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Timer className="h-3 w-3" />
                    <span>2:45</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-2">Answer 10 questions in under 3 minutes</div>
                <div className="w-full bg-secondary rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-card-foreground">Team Battle</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>4/4</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-2">Collaborate with your study group</div>
                <Button size="sm" className="w-full text-xs">Join Battle</Button>
              </div>
            </div>
          </div>

          {/* Achievement Showcase */}
          <div className="rounded-2xl bg-secondary border border-border p-4">
            <h3 className="font-medium text-secondary-foreground mb-3">Recent Achievements</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-2 rounded-lg bg-card border border-border">
                <Award className="h-6 w-6 text-yellow-500 mb-1" />
                <span className="text-xs text-center text-secondary-foreground">Quiz Master</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-card border border-border">
                <Star className="h-6 w-6 text-blue-500 mb-1" />
                <span className="text-xs text-center text-secondary-foreground">First Place</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-card border border-border">
                <TrendingUp className="h-6 w-6 text-green-500 mb-1" />
                <span className="text-xs text-center text-secondary-foreground">Streak Hero</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default educational content
    return (
      <div className="grid grid-cols-2 gap-4">
        {tabContent[activeTab as keyof typeof tabContent].videos.map((video, index) => (
          <motion.div 
            key={index} 
            className="rounded-2xl bg-secondary border border-border p-4 hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.6 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="aspect-[9/16] bg-card border border-border rounded-xl mb-3 flex items-center justify-center relative"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              >
                <Play className="h-8 w-8 text-foreground" />
              </motion.div>
            </motion.div>
            <motion.h3 
              className="font-medium text-secondary-foreground mb-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              {video.title}
            </motion.h3>
            <motion.div 
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2.0 + index * 0.1 }}
            >
              <Eye className="h-3 w-3" />
              <span>{video.views} views</span>
              <Clock className="h-3 w-3" />
              <span>{video.duration}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full px-6 py-20 bg-background" id="kairo-shorts" ref={ref}>
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
              Kairo Shorts
            </motion.span>
            <motion.h1 
              className="w-fit max-w-2xl text-pretty text-center text-2xl md:text-4xl md:leading-normal text-card-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Beat Brain Rot with Bite-Sized Learning
            </motion.h1>
            <motion.p 
              className="text-center text-lg text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transform your doomscrolling into educational moments with AI-generated short-form videos 
              based on your study history and interests.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="flex justify-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="inline-flex p-1 text-muted-foreground relative h-fit w-fit flex-row items-center gap-1 sm:gap-2 rounded-2xl ring-0 mx-auto max-w-full overflow-hidden">
                {[
                  { key: "educational", label: "Educational", shortLabel: "Edu" },
                  { key: "personalized", label: "Personalized", shortLabel: "Personal" },
                  { key: "interactive", label: "Interactive", shortLabel: "Game" }
                ].map((tab, index) => (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-xs sm:text-sm !rounded-full px-2 sm:px-4 py-2 flex gap-1 sm:gap-2 min-w-0 flex-1 sm:flex-initial ${
                      activeTab === tab.key 
                        ? "bg-secondary text-secondary-foreground shadow-sm" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getTabIcon(tab.key)}
                    <span className="hidden xs:inline sm:inline">{tab.label}</span>
                    <span className="xs:hidden sm:hidden">{tab.shortLabel}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div 
                className="flex flex-col gap-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl font-semibold text-card-foreground">{tabContent[activeTab as keyof typeof tabContent].title}</h2>
                  <p className="text-muted-foreground">
                    {tabContent[activeTab as keyof typeof tabContent].description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-y-4">
                  {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
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
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {renderRightSideContent()}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngestionBilling;
