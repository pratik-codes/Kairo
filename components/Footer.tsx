import { Brain, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
     return (
          <footer className="w-full px-6 py-16 border-t border-border container">
               <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                         {/* Logo and Description */}
                         <div className="md:col-span-1">
                              <div className="flex mb-2 items-center space-x-2">
                                   <div className="w-10 h-10 bg-white/10 dark:bg-white/10 rounded-lg flex items-center justify-center">
                                        <Brain className="w-6 h-6 text-foreground" />
                                   </div>
                                   <span className="text-foreground text-2xl font-semibold">KAIRO</span>
                              </div>

                              <p className="text-muted-foreground mb-6 max-w-sm">
                                   Your personal AI tutor that never sleeps. Transform how you learn with custom animations,
                                   interactive content, and personalized explanations.
                              </p>
                              <div className="flex items-center gap-4">
                                   <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        <Twitter className="h-5 w-5" />
                                   </a>
                                   <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        <Github className="h-5 w-5" />
                                   </a>
                                   <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                   </a>
                                   <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        <Mail className="h-5 w-5" />
                                   </a>
                              </div>
                         </div>

                         {/* Product */}
                         <div>
                              <h3 className="text-lg font-semibold text-card-foreground mb-4">Product</h3>
                              <ul className="space-y-3">
                                   <li>
                                        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Features
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#integration" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Integrations
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#kairo-shorts" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Kairo Shorts
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Technology
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Pricing
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         {/* Company */}
                         <div>
                              <h3 className="text-lg font-semibold text-card-foreground mb-4">Company</h3>
                              <ul className="space-y-3">
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             About
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Blog
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Careers
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Press
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Contact
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         {/* Support */}
                         <div>
                              <h3 className="text-lg font-semibold text-card-foreground mb-4">Support</h3>
                              <ul className="space-y-3">
                                   <li>
                                        <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                                             FAQ
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Help Center
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Documentation
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             API Reference
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                             Status
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-8 border-t border-border">
                         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                   <span>© 2024 Kairo. All rights reserved.</span>
                                   <a href="#" className="hover:text-foreground transition-colors">
                                        Privacy Policy
                                   </a>
                                   <a href="#" className="hover:text-foreground transition-colors">
                                        Terms of Service
                                   </a>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                   Made with <Brain className="h-4 w-4 inline mx-1" /> by the Kairo team
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer; 
