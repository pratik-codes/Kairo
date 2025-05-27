"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Clock } from "lucide-react";
import Link from "next/link";

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

const CTA = () => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true, margin: "-100px" });

     return (
          <section className="w-full px-6 py-20 bg-background" id="cta" ref={ref}>
               <div className="max-w-7xl mx-auto">
                    <motion.div
                         className="rounded-2xl flex w-full flex-col gap-y-12 bg-card border border-border p-8 md:p-16 text-center"
                         variants={containerVariants}
                         initial="hidden"
                         animate={isInView ? "visible" : "hidden"}
                    >
                         <motion.div
                              className="flex flex-col items-center gap-y-6"
                              variants={itemVariants}
                         >
                              <motion.div
                                   className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                   transition={{ duration: 0.5, delay: 0.2 }}
                              >
                                   <Sparkles className="h-4 w-4 text-muted-foreground" />
                                   <span className="text-sm font-medium text-card-foreground">
                                        Early Access
                                   </span>
                              </motion.div>

                              <motion.h2
                                   className="text-center mx-auto text-2xl md:text-4xl md:leading-normal text-card-foreground"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                   transition={{ duration: 0.6, delay: 0.4 }}
                              >
                                   Ready to Transform Your Learning?
                              </motion.h2>

                              <motion.p
                                   className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                   transition={{ duration: 0.6, delay: 0.6 }}
                              >
                                   Join thousands of learners who are already experiencing the future of education.
                                   Be among the first to access Kairo&apos;s revolutionary AI-powered learning platform.
                              </motion.p>

                              <motion.div
                                   className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                   transition={{ duration: 0.6, delay: 0.8 }}
                              >
                                   <Link href="/waitlist">
                                        <motion.div
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.95 }}
                                             transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                             <Button className="gap-2 h-12 px-8 py-4 text-white dark:text-black rounded-full bg-white text-background border-0">
                                                  Join the Waitlist
                                                  <ArrowRight className="ml-2 h-5 w-5" />
                                             </Button>
                                        </motion.div>
                                   </Link>

                                   <motion.div
                                        className="flex items-center gap-2 text-sm text-muted-foreground"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.6, delay: 1.0 }}
                                   >
                                        <Users className="h-4 w-4" />
                                        <span>2,500+ already joined</span>
                                   </motion.div>
                              </motion.div>
                         </motion.div>

                         <motion.div
                              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                              variants={containerVariants}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                         >
                              {[
                                   {
                                        icon: Sparkles,
                                        title: "Early Access",
                                        description: "Be the first to experience cutting-edge AI learning"
                                   },
                                   {
                                        icon: Users,
                                        title: "Exclusive Community",
                                        description: "Connect with fellow early adopters and beta testers"
                                   },
                                   {
                                        icon: Clock,
                                        title: "Priority Support",
                                        description: "Get dedicated support during your learning journey"
                                   }
                              ].map((feature, index) => (
                                   <motion.div
                                        key={index}
                                        className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary border border-border"
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                        whileHover={{
                                             scale: 1.05,
                                             y: -5,
                                             transition: { duration: 0.2 }
                                        }}
                                   >
                                        <motion.div
                                             className="p-3 rounded-full bg-background border border-border"
                                             whileHover={{ rotate: 360 }}
                                             transition={{ duration: 0.6 }}
                                        >
                                             <feature.icon className="h-6 w-6 text-muted-foreground" />
                                        </motion.div>
                                        <h3 className="font-semibold text-card-foreground">
                                             {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground text-center">
                                             {feature.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
};

export default CTA; 
