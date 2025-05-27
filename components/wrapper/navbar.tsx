"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Dialog } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Brain, Github, Menu, Sparkles, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import ModeToggle from "../mode-toggle";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { UserProfile } from "../user-profile";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "AI Playground",
    href: "/playground",
    description: "Interact with the AI in the playground.",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "Access your personal dashboard.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read my interesting blog posts.",
  },
];

const navigationItems = [
  { href: "/playground", text: "AI Playground" },
  { href: "/dashboard", text: "Dashboard" },
];

export default function NavBar() {
  const { userId } = useAuth();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md bg-white/80 dark:bg-black/80"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo - Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <Dialog>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader className="pb-6 border-b">
                <SheetTitle className="flex items-center gap-2">
                <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
               >
                    <motion.div 
                         className="w-10 h-10 bg-white/10 dark:bg-white/10 rounded-lg flex items-center justify-center"
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                         <Brain className="w-6 h-6 text-foreground" />
                    </motion.div>
                    <motion.span 
                         className="text-foreground text-2xl font-semibold"
                         whileHover={{ letterSpacing: "0.05em" }}
                         transition={{ duration: 0.2 }}
                    >
                         KAIRO
                    </motion.span>
               </motion.div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 mt-6">
                <div className="px-2 pb-4">
                  <h2 className="text-sm font-medium text-muted-foreground mb-2">
                    Navigation
                  </h2>
                  {components.map((item) => (
                    <Link key={item.href} href={item.href} prefetch={true}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-base font-normal h-11 border border-muted/40 mb-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  ))}
                </div>

                <div className="px-2 py-4 border-t">
                  <h2 className="text-sm font-medium text-muted-foreground mb-2">
                    Links
                  </h2>
                  <Link
                    href="https://github.com/michaelshimeles/nextjs14-starter-template"
                    target="_blank"
                    prefetch={true}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal h-11 border border-muted/40 mb-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    href="https://twitter.com/rasmickyy"
                    target="_blank"
                    prefetch={true}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal h-11 border border-muted/40 mb-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-4 w-4 mr-2" />X (Twitter)
                    </Button>
                  </Link>
                  <Link
                    href="https://youtube.com/@rasmickyy"
                    target="_blank"
                    prefetch={true}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal h-11 border border-muted/40 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/50 dark:hover:text-blue-400 transition-colors"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      YouTube
                    </Button>
                  </Link>
                </div>

                {!userId && (
                  <div className="px-2 py-4 border-t mt-auto">
                    <Link href="/early-access" prefetch={true}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-500">
                        Get Early Access
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Dialog>
          
          {/* Mobile Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" prefetch={true} className="flex items-center gap-2">
            <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
               >
                    <motion.div 
                         className="w-10 h-10 bg-white/10 dark:bg-white/10 rounded-lg flex items-center justify-center"
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                         <Brain className="w-6 h-6 text-foreground" />
                    </motion.div>
                    <motion.span 
                         className="text-foreground text-2xl font-semibold"
                         whileHover={{ letterSpacing: "0.05em" }}
                         transition={{ duration: 0.2 }}
                    >
                         KAIRO
                    </motion.span>
               </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Logo - Desktop */}
        <motion.div 
          className="hidden lg:flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" prefetch={true} className="flex items-center gap-2">
            <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
               >
                    <motion.div 
                         className="w-10 h-10 bg-white/10 dark:bg-white/10 rounded-lg flex items-center justify-center"
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                         <Brain className="w-6 h-6 text-foreground" />
                    </motion.div>
                    <motion.span 
                         className="text-foreground text-2xl font-semibold"
                         whileHover={{ letterSpacing: "0.05em" }}
                         transition={{ duration: 0.2 }}
                    >
                         KAIRO
                    </motion.span>
               </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={item.href} prefetch={true}>
                <motion.div
                  className="text-muted-foreground hover:text-foreground transition-colors relative"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.text}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Side */}
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ModeToggle />
          </motion.div>
          {/* {!userId && (
            <Link href="/early-access" prefetch={true}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="ghost"
                  className="text-foreground rounded-full bg-blue-600/10 hover:bg-blue-600/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20 border border-blue-600/20 dark:border-blue-400/20"
                >
                  Get Early Access
                </Button>
              </motion.div>
            </Link>
          )} */}
          {userId && <UserProfile />}
        </motion.div>
      </div>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
