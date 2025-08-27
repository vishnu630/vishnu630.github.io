import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Heart, 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Zap,
  Award,
  Target,
  Rocket
} from 'lucide-react';

export function About() {
  const highlights = [
    "Full Stack Development",
    "LLM Integration", 
    "API Design & Implementation",
    "Modern React Development",
    "Python & AI Solutions"
  ];

  const expertise = [
    {
      icon: <Heart className="size-5" />,
      title: "Healthcare AI Solutions",
      description: "Specialized in medical charts, patient records, and clinical dashboards",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Code className="size-5" />,
      title: "Full Stack Excellence",
      description: "React, Node.js, Python with focus on performance optimization",
      gradient: "bg-gradient-tertiary"
    },
    {
      icon: <Database className="size-5" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with real-time capabilities",
      gradient: "bg-gradient-quaternary"
    },
    {
      icon: <Cloud className="size-5" />,
      title: "Cloud & DevOps",
      description: "Azure, AWS, Docker, and CI/CD pipeline expertise",
      gradient: "bg-gradient-quinary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient-primary">Vishnu</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-primary p-1">
                    <ImageWithFallback
                      src="./vishnupic.jpeg"
                      alt="Nalla Vishnu Teja Reddy - Full Stack Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-secondary p-3 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>

              <p className="text-lg leading-relaxed">
                I'm a passionate Full Stack LLM Development Associate at <span className="text-gradient-primary font-medium">Accenture</span>, 
                based in <span className="text-gradient-secondary font-medium">Chennai, Tamil Nadu, India</span>. 
                With a strong foundation in <span className="text-gradient-tertiary font-medium">React, Node.js, and Python</span>, 
                I specialize in building intelligent, AI-powered applications that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey began with an internship at <span className="text-gradient-quaternary font-medium">ISRO</span>, where I gained invaluable 
                experience in mission-critical systems. Since April 2024, I've been working with multiple North American 
                healthcare clients, focusing on Data and AI projects that transform medical data into actionable insights.
              </p>

              <p className="text-lg leading-relaxed">
                I hold a <span className="text-gradient-primary font-medium">B.Tech in Information Technology</span> from NBKR Institute of Science and Technology, Nellore, 
                and have earned industry-recognized certifications from Microsoft Azure, MongoDB, and Google Cloud Platform.
              </p>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"
                >
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Target className="size-4 text-purple-600" />
                    Location
                  </h4>
                  <p className="text-muted-foreground text-sm">Chennai, TN, India</p>
                  <p className="text-muted-foreground text-xs">PIN - 600048</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
                >
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Rocket className="size-4 text-green-600" />
                    Experience
                  </h4>
                  <p className="text-muted-foreground text-sm">2+ years in development</p>
                  <p className="text-muted-foreground text-xs">AI/LLM integration specialist</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30"
                >
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Brain className="size-4 text-orange-600" />
                    Education
                  </h4>
                  <p className="text-muted-foreground text-sm">B.Tech Information Technology</p>
                  <p className="text-muted-foreground text-xs">NBKR Institute - CGPA: 7.67/10</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30"
                >
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Award className="size-4 text-yellow-600" />
                    Recognition
                  </h4>
                  <p className="text-muted-foreground text-sm">Excellence Award - Accenture</p>
                  <p className="text-muted-foreground text-xs">Multiple cloud certifications</p>
                </motion.div>
              </div>
            </motion.div>

            {/* What I Bring - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full mb-4"
                >
                  <Zap className="size-4" />
                  <span className="text-sm font-medium">What I Bring to the Table</span>
                </motion.div>
              </div>

              <div className="grid gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${item.gradient} text-white group-hover:shadow-lg transition-shadow`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
              >
                <h4 className="text-lg font-semibold mb-4 text-center">Core Expertise</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: 0.02 * index }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-3 py-1 text-xs bg-white/80 hover:bg-white transition-colors"
                      >
                        {highlight}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}