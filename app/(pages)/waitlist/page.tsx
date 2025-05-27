"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Brain, Twitter, Github } from "lucide-react";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.userType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Welcome to the Waitlist!",
      description: "We'll notify you as soon as Kairo is ready for early access.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col bg-background">
          <div className="relative flex-1 flex items-center justify-center px-4 py-20">
            <motion.div 
              className="max-w-lg mx-auto text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-10 h-10 text-foreground" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                You're In! 🎉
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Welcome to the Kairo waitlist! We'll send you an email as soon as early access is available.
              </p>
              
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                Back to Form
              </Button>
            </motion.div>
          </div>
          
          <Footer />
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="relative flex-1 flex items-center justify-center px-4 py-20">
          <motion.div 
            className="max-w-lg mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center justify-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Brain className="w-7 h-7 text-foreground" />
                </motion.div>
                <motion.span 
                  className="text-foreground text-3xl md:text-4xl font-semibold"
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                >
                  KAIRO
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="text-lg text-muted-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Beautifully crafted AI learning experience.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-muted"
              >
                Follow us
              </Button>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div 
              className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">Join the waitlist</h2>
              <p className="text-muted-foreground mb-6">Sign up to be one of the first to use Kairo.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/20 rounded-xl"
                  required
                />
                
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/20 rounded-xl"
                  required
                />
                
                <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                  <SelectTrigger className="h-12 bg-background border-border text-foreground focus:border-foreground/20 rounded-xl">
                    <SelectValue placeholder="Who are you?" className="text-muted-foreground" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student (K-12)</SelectItem>
                    <SelectItem value="college-student">College Student</SelectItem>
                    <SelectItem value="working-professional">Working Professional</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-foreground text-white dark:text-black hover:bg-foreground/90 font-semibold rounded-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Credits */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
            </motion.div>
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </PageWrapper>
  );
} 
