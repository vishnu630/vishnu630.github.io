import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-background opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-secondary rounded-full opacity-10 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 120, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-tertiary rounded-full opacity-10 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-quaternary rounded-full opacity-15 blur-lg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-2 rounded-full text-white mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="size-4" />
              <span className="text-sm">Available for new opportunities</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nalla Vishnu Teja Reddy
              <motion.span 
                className="block text-gradient-primary"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting intelligent solutions with <span className="text-gradient-secondary font-medium">React</span>, 
            <span className="text-gradient-tertiary font-medium"> Node.js</span>, and 
            <span className="text-gradient-quaternary font-medium"> Python</span>. 
            Building the future of AI-powered applications at 
            <span className="text-gradient-primary font-medium"> Accenture</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button
    variant="outline"
    size="lg"
    className="
      border-primary/30 
      hover:bg-primary/10 
      text-black dark:text-white 
      hover:text-black dark:hover:text-white
    "
    asChild
  >
    <a href="#contact">Get In Touch</a>
  </Button>
</motion.div>


          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com/vishnu630", gradient: "bg-gradient-secondary" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vishnutejareddy/", gradient: "bg-gradient-tertiary" },
              {icon:Instagram,href:'https://www.instagram.com/vishnu_teja__reddy/',gradient:'bg-gradient-instagram'},
              { icon: Mail, href: "#contact", gradient: "bg-gradient-quaternary" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                className={`p-4 ${social.gradient} rounded-full text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                <social.icon className="size-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}