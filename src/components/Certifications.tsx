import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CertificateModal } from './CertificateModal';
import { 
  Award, 
  Star,
  Cloud,
  Database,
  Code,
  Brain,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      id: 1,
      title: "Microsoft Azure Fundamentals AZ-900",
      issuer: "Microsoft",
      date: "2022",
      level: "Fundamental",
      icon: <Cloud className="size-6" />,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgClass: "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
      textColor: "text-blue-700 dark:text-blue-300",
      description: "Comprehensive understanding of cloud concepts, Azure services, workloads, security, privacy, pricing, and support.",
      skills: ["Cloud Computing", "Azure Services", "Virtual Machines", "Storage Solutions"],
      credentialId: "w9Sc9-H9dj",
      pdfUrl: "#", // Mock URL for demonstration
    },
    {
      id: 2,
      title: "MongoDB Developer SI Associate Certification",
      issuer: "MongoDB Inc.",
      date: "2024",
      level: "Professional",
      icon: <Database className="size-6" />,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      bgClass: "from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30",
      textColor: "text-green-700 dark:text-green-300",
      description: "Advanced MongoDB development skills including data modeling, aggregation, indexing, and performance optimization.",
      skills: ["MongoDB", "Database Design", "Aggregation", "Performance Tuning"],
      credentialId: "MDB-DEV-2024-VTR",
      pdfUrl: "#",
    },
    {
      id: 3,
      title: "Google Cloud Platform Associate Data Practitioner",
      issuer: "Google Cloud",
      date: "2025",
      level: "Fundamental",
      icon: <Shield className="size-6" />,
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      bgClass: "from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30",
      textColor: "text-orange-700 dark:text-orange-300",
      description: "Core GCP services, computing, storage, networking, and machine learning capabilities on Google Cloud Platform.",
      skills: ["GCP Services", "Cloud Storage", "Compute Engine", "BigQuery"],
      credentialId: "GCP-FUND-2023-VTR",
      pdfUrl: "#",
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Fundamental",
      icon: <Cloud className="size-6" />,
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      bgClass: "from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30",
      textColor: "text-yellow-700 dark:text-yellow-300",
      description: "Understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["AWS Services", "EC2", "S3", "RDS", "Lambda"],
      credentialId: "AWS-CCP-2023-VTR",
      pdfUrl: "#",
    },
    {
      id: 5,
      title: "React Professional Developer",
      issuer: "Meta (Facebook)",
      date: "2024",
      level: "Professional",
      icon: <Code className="size-6" />,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      bgClass: "from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30",
      textColor: "text-purple-700 dark:text-purple-300",
      description: "Advanced React development including hooks, context, performance optimization, and modern patterns.",
      skills: ["React.js", "Hooks", "Context API", "Performance Optimization"],
      credentialId: "META-REACT-2024-VTR",
      pdfUrl: "#",
    },
    {
      id: 6,
      title: "AI & Machine Learning Fundamentals",
      issuer: "IBM",
      date: "2024",
      level: "Intermediate",
      icon: <Brain className="size-6" />,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      bgClass: "from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description: "Machine learning concepts, AI model development, and practical implementation of ML algorithms.",
      skills: ["Machine Learning", "AI Models", "Python", "Data Analysis"],
      credentialId: "IBM-AI-2024-VTR",
      pdfUrl: "#",
    }
  ];

  const handleViewCertificate = (cert: any) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  const handleViewPDF = (cert: any) => {
    // In a real application, this would open or download the actual PDF
    console.log(`Opening certificate PDF: ${cert.title}`);
    // Mock PDF viewing functionality
    window.open(cert.pdfUrl, '_blank');
  };

  const handleDownloadCertificate = (cert: any) => {
    // In a real application, this would trigger PDF download
    console.log(`Downloading certificate: ${cert.title}`);
    // Mock download functionality
    const link = document.createElement('a');
    link.href = cert.pdfUrl;
    link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`;
    link.click();
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industry <span className="text-gradient-primary">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Validated expertise across cloud platforms, databases, frameworks, and AI technologies 
            from industry-leading organizations.
          </motion.p>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl ${cert.gradient} text-white group-hover:shadow-lg transition-shadow`}>
                        {cert.icon}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${cert.bgClass} ${cert.textColor} border-0`}
                      >
                        {cert.level}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline" 
                            className="text-xs px-2 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className={`w-full ${cert.gradient} text-white hover:opacity-90 transition-opacity`}
                      onClick={() => handleViewCertificate(cert)}
                    >
                      <Award className="size-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-700/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-primary">6+</div>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-secondary">4</div>
                  <p className="text-sm text-muted-foreground">Cloud Platforms</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-tertiary">2025</div>
                  <p className="text-sm text-muted-foreground">Latest Cert</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-quaternary">100%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Certificate Modal */}
        <CertificateModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          certificate={selectedCert}
          onViewCertificate={handleViewPDF}
          onDownloadCertificate={handleDownloadCertificate}
        />
      </div>
    </section>
  );
}