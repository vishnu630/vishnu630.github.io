import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Full Stack LLM Development Associate",
      company: "Accenture", 
      period: "April 2024 - Present",
      location: "Chennai, TN, India",
      description: "Working across multiple North American healthcare clients, contributing to Data and AI projects focused on medical charts, patient records, and historical medical dashboards.",
      achievements: [
        "Designed and implemented RESTful and GraphQL APIs to serve structured patient data, medical charts, and clinical history with real-time querying and efficient data aggregation",
        "Developed responsive, modular, and reusable React components using TypeScript, Redux, React Hooks, and Context API, optimizing component re-renders and reducing DOM load",
        "Built real-time dashboards for visualizing patient health metrics using Chart.js, D3.js, and Apex Charts, improving clinician decision-making workflows",
        "Implemented JWT and OAuth2.0 authentication with MSAL (Microsoft Authentication Library) for secure user sessions and seamless integration with Azure Active Directory",
        "Optimized front-end performance through code splitting, lazy loading, and memorization, achieving up to 30% improvement in load times and UI responsiveness",
        "Used Git, Jira, and CI/CD pipelines (Azure DevOps) for source control, issue tracking, and automated deployments",
        "Received Excellence Award for extraordinary performance in a quarter"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Software Development Intern",
      company: "ISRO - SHAR Computer Facilities",
      period: "June 2016 - March 2018",
      location: "SDSC SHAR, Sriharikota",
      description: "Interned at ISRO – SHAR Computer Facilities, part of the Range Operations Entity at SDSC SHAR, contributing to mission-critical systems.",
      achievements: [
        "Contributed to internal tools using HTML, CSS, and JavaScript, laying the foundation for modern web-based interfaces used in facility-level monitoring and data display modules",
        "Understood the role of front-end web technologies in real-time data representation and telemetry dashboards, crucial for mission support systems",
        "Collaborated with senior engineers to explore the digitization of legacy systems, initiating basic UI prototypes aligned with operational use cases",
        "Gained exposure to mission-critical system development in aerospace environment"
      ],
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${exp.gradient}`} />
                  
                  <div className="space-y-6">
                    {/* Company Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${exp.gradient} rounded-lg text-white`}>
                          <Building className="size-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl">{exp.title}</h3>
                          <p className="text-lg text-primary">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="size-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Role Description */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="text-lg mb-3">Key Achievements</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 * achievementIndex }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}