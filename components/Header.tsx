"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { Brain } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container w-full px-6 py-14 flex items-center justify-between">
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

      <nav className="hidden md:flex items-center space-x-8">
        {[
          { href: "#features", text: "Features" },
          { href: "#integrations", text: "Integrations" },
          { href: "#kairo-shorts", text: "Kairo Shorts" },
          { href: "#technology", text: "Technology" },
          { href: "#faq", text: "Faq" },
        ].map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.text}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
      </nav>

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
        <Link href="/waitlist">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="ghost" className="text-foreground rounded-full bg-secondary hover:bg-accent">
              Join Waitlist
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
