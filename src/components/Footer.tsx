import { color, motion } from "motion/react";
import { Heart, ArrowUp, Sparkles, Mail, Phone, Code, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 animated-background" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Main content grid */}
            <div className="grid lg:grid-cols-3 gap-12 mb-12">
              {/* Brand & Description */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  
                  <h3 className="text-2xl font-bold text-white">
                    Nalla Vishnu Teja Reddy
                  </h3>
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Code className="size-6 text-white" />
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Full Stack LLM Development Associate crafting intelligent, 
                  scalable applications with modern technologies and AI integration.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/vishnu630"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Github className="size-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/vishnutejareddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="size-5 text-white" />
                  </motion.a>
                   <motion.a
        href="https://www.instagram.com/vishnu_teja__reddy/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        className="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-colors"
      >
        <Instagram className="size-5 text-white" />
      </motion.a>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-white">Quick Links</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['About', 'Experience', 'Skills', 'Certifications', 'Projects', 'Contact'].map((link) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <Mail className="size-4" />
                    <span className="text-sm">vishnuteja779986@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Phone className="size-4" />
                    <span className="text-sm">+91 630-120-3873</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-6 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="size-5 text-yellow-300" />
                    <span className="text-white font-medium">Ready to collaborate?</span>
                  </div>
                  <p className="text-white/80 text-sm mb-6">
                    Let's transform your ideas into intelligent, scalable applications 
                    with cutting-edge technology.
                  </p>
                  <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  <Button
    variant="ghost"
    className="w-full bg-white/90 text-black dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 font-medium border-0 shadow-lg"
    asChild
  >
    <a href="#contact" style={{color:'black'}}>Start a Conversation</a>
  </Button>
</motion.div>

<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  <Button
    variant="ghost"
    className="w-full bg-white/90 text-black dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 font-medium border-0 shadow-lg"
    asChild
  >
    <a href="mailto:vishnuteja779986@gmail.com" className="flex items-center gap-2" style={{color:'black'}}>
      <Mail className="size-4 text-black dark:text-black" />
      Send Direct Email
    </a>
  </Button>
</motion.div>





                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-white/20 pt-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-white/80 text-sm flex items-center justify-center md:justify-start gap-2">
                    Made with{" "}
                    <Heart className="size-4 text-red-300 animate-pulse" />{" "}
                    using React, Tailwind CSS, and Motion
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    © 2025 Nalla Vishnu Teja Reddy. All rights reserved.
                  </p>
                </div>
                <div className="text-white/60 text-sm text-center md:text-right">
                  <p>Full Stack LLM Development Associate</p>
                  <p>Accenture pvt ltd</p>
                  <p>Chennai, Tamil Nadu, IN</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="size-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}