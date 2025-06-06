
import { Building, GraduationCap, Code, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      icon: Building,
      company: "Infosys Springboard",
      role: "AI Development Intern",
      project: "Alt Text to Real Context",
      period: "2024",
      description: "Developed innovative AI solution for converting image alt-text to meaningful contextual descriptions using advanced NLP and computer vision techniques.",
      technologies: ["Python", "Computer Vision", "NLP", "Deep Learning"]
    },
    {
      icon: GraduationCap,
      company: "AICTE IDEA Lab",
      role: "Rural Entrepreneurship Intern",
      project: "DIVA - Legal AI Assistant",
      period: "2024",
      description: "Created comprehensive legal AI assistant for rural communities, providing accessible legal guidance and document processing capabilities.",
      technologies: ["AI/ML", "Legal Tech", "Rural Innovation", "System Design"]
    }
  ];

  const certifications = [
    "Oracle Certified",
    "Data Science Foundation",
    "Machine Learning Specialist",
    "Generative AI Expert",
    "Winter School on Emerging Tech"
  ];

  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Certifications</span>
          </h2>
          <p className="text-xl text-gray-400">
            Professional experience and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-8 flex items-center">
              <Briefcase className="mr-3 h-8 w-8" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass-effect hover:neon-border transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <exp.icon className="h-12 w-12 text-electric mr-4 mt-1" />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-cyber font-semibold">{exp.company}</p>
                        <p className="text-neon text-sm">{exp.project}</p>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-electric/20 text-electric rounded-full text-xs border border-electric/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-8 flex items-center">
              <Code className="mr-3 h-8 w-8" />
              Certifications
            </h3>
            <div className="glass-effect rounded-xl p-6 neon-border">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-gradient-to-r from-electric/10 to-cyber/10 rounded-lg hover:from-electric/20 hover:to-cyber/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-3 h-3 bg-neon rounded-full mr-4 group-hover:animate-pulse" />
                    <span className="text-white font-semibold group-hover:gradient-text transition-all">
                      {cert}
                    </span>
                    <div className="ml-auto text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
