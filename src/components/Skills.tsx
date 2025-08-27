import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Code, Database, Brain, Server, Smartphone, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Smartphone className="size-6" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Redux", level: 85 },
        { name: "React Hooks", level: 90 }
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Backend Development",
      icon: <Server className="size-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 95 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 80 }
      ],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Database & DevOps",
      icon: <Database className="size-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL Databases", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud", level: 70 }
      ],
      gradient: "bg-gradient-tertiary"
    },
    {
      title: "AI & LLM Integration",
      icon: <Brain className="size-6" />,
      skills: [
        { name: "LLM Integration", level: 85 },
        { name: "AI/ML Concepts", level: 80 },
        { name: "Python AI Libraries", level: 85 },
        { name: "API Integration", level: 90 },
        { name: "Data Processing", level: 80 }
      ],
      gradient: "bg-gradient-quaternary"
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "MongoDB", "Express.js", "JavaScript", 
    "TypeScript", "Redux", "GraphQL", "RESTful APIs", "HTML5", "CSS3", 
    "Git", "Docker", "AWS", "LLM Integration", "React Hooks", "Context API"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${category.gradient} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${category.gradient}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.02 * index }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}