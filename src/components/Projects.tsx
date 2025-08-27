import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Code, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Healthcare AI Dashboard Platform",
      description: "Real-time healthcare analytics platform serving multiple North American clients at Accenture. Features patient record management, medical chart visualization, and clinical decision support systems.",
      tech: ["React", "TypeScript", "Node.js", "GraphQL", "Chart.js", "D3.js", "Azure Active Directory"],
      features: [
        "RESTful and GraphQL APIs for patient data aggregation",
        "Real-time dashboards with Chart.js, D3.js, and Apex Charts",
        "JWT and OAuth2.0 authentication with MSAL integration",
        "30% improvement in load times through optimization",
        "Responsive design with modular React components"
      ],
      gradient: "bg-gradient-primary",
      category: "Professional Project"
    },
    {
      title: "Automated Canteen Ordering System",
      description: "B.Tech major project that revolutionized the college canteen experience using RFID technology for secure transactions and real-time order management.",
      tech: ["RFID Technology", "Database Systems", "Real-time Processing", "Order Management", "Dashboard UI"],
      features: [
        "RFID-based secure transaction system",
        "Database-driven order management reducing wait times by 50%",
        "Real-time order tracking dashboard with advanced filtering",
        "Enhanced operational efficiency and data accuracy",
        "Automated workflow optimization"
      ],
      gradient: "bg-gradient-secondary",
      category: "Academic Project"
    },
    {
      title: "ISRO Mission Support Interface",
      description: "Contributed to internal tools and web-based interfaces for facility-level monitoring and data display modules during internship at ISRO SHAR Computer Facilities.",
      tech: ["HTML5", "CSS3", "JavaScript", "Real-time Data", "Telemetry Systems", "Legacy System Integration"],
      features: [
        "Web-based interfaces for mission-critical monitoring systems",
        "Real-time data representation for telemetry dashboards",
        "UI prototypes for digitization of legacy systems",
        "Facility-level monitoring and data display modules",
        "Mission support system interfaces"
      ],
      gradient: "bg-gradient-tertiary",
      category: "Internship Project"
    },
    {
      title: "LLM Integration Solutions",
      description: "Specialized in integrating Large Language Models into healthcare applications, focusing on AI-powered analysis of medical data and patient insights.",
      tech: ["Python", "LLM APIs", "AI/ML Libraries", "Data Processing", "API Integration", "Healthcare AI"],
      features: [
        "LLM integration for medical data analysis",
        "AI-powered patient insight generation",
        "Advanced data processing pipelines",
        "Healthcare-specific AI model fine-tuning",
        "Intelligent data aggregation and analysis"
      ],
      gradient: "bg-gradient-quaternary",
      category: "AI/LLM Specialization"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
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
            Featured Projects
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className={`relative overflow-hidden h-3 ${project.gradient}`} />
                  
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-3">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl md:text-2xl mb-2">{project.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="p-8 max-w-2xl mx-auto">
              <Code className="size-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl mb-4">Want to See More?</h3>
              <p className="text-muted-foreground mb-6">
                These are just a few examples of my work. I'm constantly building new projects 
                and exploring cutting-edge technologies. Check out my GitHub for more detailed 
                code examples and contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Github className="size-4 mr-2" />
                  View GitHub
                </Button>
                <Button>
                  <Mail className="size-4 mr-2" />
                  Discuss a Project
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}