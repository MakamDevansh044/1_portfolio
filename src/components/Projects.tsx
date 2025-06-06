
import { ExternalLink, Github, Eye, Brain, Shield, Camera, Leaf, Flame, FileText, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: Search,
      title: "Alt Text to Real Context",
      description: "AI-powered system converting image alt-text to meaningful contextual descriptions using advanced NLP",
      tech: ["Python", "Computer Vision", "NLP", "Deep Learning"],
      status: "Production",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Brain,
      title: "MultiHire – MambaFusionNet",
      description: "Published research on advanced neural fusion networks for multi-candidate hiring optimization",
      tech: ["Deep Learning", "Neural Networks", "Research", "Python"],
      status: "Published",
      links: { github: "#", demo: "#", paper: "#" }
    },
    {
      icon: Camera,
      title: "Face Feature Extraction",
      description: "Advanced computer vision system for precise facial feature detection and analysis",
      tech: ["OpenCV", "Python", "Computer Vision", "ML"],
      status: "Complete",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Shield,
      title: "Verify My Certificate",
      description: "Blockchain-based certificate verification system ensuring authenticity and preventing fraud",
      tech: ["Blockchain", "Security", "Web3", "Python"],
      status: "Active",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Brain,
      title: "Dog Breed Classification",
      description: "Deep learning model for accurate dog breed identification using convolutional neural networks",
      tech: ["CNN", "TensorFlow", "Image Classification", "Python"],
      status: "Complete",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Leaf,
      title: "Soybean Classification",
      description: "Agricultural AI system for soybean variety classification and quality assessment",
      tech: ["Agriculture Tech", "Computer Vision", "ML", "Python"],
      status: "Complete",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Flame,
      title: "Forest Fire Prediction using MDP",
      description: "Markov Decision Process model for predicting and preventing forest fire outbreaks",
      tech: ["MDP", "Predictive Analytics", "Environmental AI", "Python"],
      status: "Research",
      links: { github: "#", paper: "#" }
    },
    {
      icon: FileText,
      title: "PRAVAH – Document Verifier",
      description: "Automated document verification system using AI for authenticity and compliance checking",
      tech: ["Document AI", "OCR", "Verification", "Python"],
      status: "Active",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Shield,
      title: "DIVA – Legal AI Assistant",
      description: "Comprehensive legal AI assistant providing accessible legal guidance for rural communities",
      tech: ["Legal Tech", "NLP", "AI Assistant", "Rural Innovation"],
      status: "Active",
      links: { github: "#", demo: "#" }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-neon/20 text-neon border-neon';
      case 'Published': return 'bg-cyber/20 text-cyber border-cyber';
      case 'Active': return 'bg-electric/20 text-electric border-electric';
      case 'Research': return 'bg-flame/20 text-flame border-flame';
      default: return 'bg-gray-500/20 text-gray-500 border-gray-500';
    }
  };

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Projects Gallery</span>
          </h2>
          <p className="text-xl text-gray-400">
            Innovative solutions spanning AI, ML, computer vision, and research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-effect hover:neon-border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-10 w-10 text-electric group-hover:animate-bounce" />
                  <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-cyber/20 text-cyber rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button size="sm" variant="outline" className="flex-1 glass-effect border-electric hover:bg-electric/20">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button size="sm" variant="outline" className="flex-1 glass-effect border-neon hover:bg-neon/20">
                      <Eye className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button size="sm" variant="outline" className="flex-1 glass-effect border-cyber hover:bg-cyber/20">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Paper
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
