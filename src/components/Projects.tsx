
import { ExternalLink, Github, Eye, Brain, Shield, Camera, Leaf, Flame, FileText, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Search,
      title: "Alt Text to Real Context",
      description: "AI-powered system converting image alt-text to meaningful contextual descriptions using advanced NLP and computer vision techniques. Features real-time processing and multi-language support.",
      tech: ["Python", "Computer Vision", "NLP", "Deep Learning", "TensorFlow", "OpenCV", "FastAPI", "Docker"],
      status: "Production",
      featured: true,
      links: { github: "#", demo: "#" }
    },
    {
      icon: Brain,
      title: "MultiHire – MambaFusionNet",
      description: "Published research on advanced neural fusion networks for multi-candidate hiring optimization using state-of-the-art machine learning architectures.",
      tech: ["Deep Learning", "Neural Networks", "Research", "Python", "PyTorch", "MLOps", "Data Science"],
      status: "Published",
      featured: true,
      links: { github: "#", demo: "#", paper: "#" }
    },
    {
      icon: Camera,
      title: "Face Feature Extraction",
      description: "Advanced computer vision system for precise facial feature detection and analysis with real-time processing capabilities and high accuracy metrics.",
      tech: ["OpenCV", "Python", "Computer Vision", "ML", "NumPy", "Scikit-learn", "MediaPipe"],
      status: "Complete",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Shield,
      title: "Verify My Certificate",
      description: "Blockchain-based certificate verification system ensuring authenticity and preventing fraud using distributed ledger technology.",
      tech: ["Blockchain", "Security", "Web3", "Python", "Solidity", "Ethereum", "React", "Node.js"],
      status: "Active",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Brain,
      title: "Dog Breed Classification",
      description: "Deep learning model for accurate dog breed identification using convolutional neural networks with 95%+ accuracy on validation dataset.",
      tech: ["CNN", "TensorFlow", "Image Classification", "Python", "Keras", "Data Augmentation"],
      status: "Complete",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Leaf,
      title: "Soybean Classification",
      description: "Agricultural AI system for soybean variety classification and quality assessment helping farmers optimize crop yield and quality.",
      tech: ["Agriculture Tech", "Computer Vision", "ML", "Python", "OpenCV", "Flask", "IoT"],
      status: "Complete",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Flame,
      title: "Forest Fire Prediction using MDP",
      description: "Markov Decision Process model for predicting and preventing forest fire outbreaks with environmental factor analysis and risk assessment.",
      tech: ["MDP", "Predictive Analytics", "Environmental AI", "Python", "Reinforcement Learning", "GIS"],
      status: "Research",
      links: { github: "#", paper: "#" }
    },
    {
      icon: FileText,
      title: "PRAVAH – Document Verifier",
      description: "Automated document verification system using AI for authenticity and compliance checking with OCR and pattern recognition capabilities.",
      tech: ["Document AI", "OCR", "Verification", "Python", "Tesseract", "Deep Learning", "API"],
      status: "Active",
      links: { github: "#", demo: "#" }
    },
    {
      icon: Shield,
      title: "DIVA – Legal AI Assistant",
      description: "Comprehensive legal AI assistant providing accessible legal guidance for rural communities with multilingual support and document analysis.",
      tech: ["Legal Tech", "NLP", "AI Assistant", "Rural Innovation", "Chatbot", "MongoDB", "Express"],
      status: "Active",
      featured: true,
      links: { github: "#", demo: "#" }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-neon/20 text-neon border-neon shadow-neon/20';
      case 'Published': return 'bg-cyber/20 text-cyber border-cyber shadow-cyber/20';
      case 'Active': return 'bg-electric/20 text-electric border-electric shadow-electric/20';
      case 'Research': return 'bg-flame/20 text-flame border-flame shadow-flame/20';
      default: return 'bg-gray-500/20 text-gray-500 border-gray-500';
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyber/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-flame/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="gradient-text">Projects Gallery</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-electric via-cyber to-neon rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Innovative solutions spanning AI, ML, computer vision, and research with real-world impact
          </p>
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-electric rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyber rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-neon rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.filter(project => project.featured).map((project, index) => {
              const actualIndex = projects.findIndex(p => p === project);
              const isExpanded = expandedProject === actualIndex;
              
              return (
                <Card 
                  key={actualIndex}
                  className="glass-effect hover:neon-border transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <project.icon className="h-12 w-12 text-electric group-hover:animate-pulse transition-all duration-300" />
                        <div className="absolute -inset-2 bg-electric/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs border font-medium shadow-lg ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, isExpanded ? project.tech.length : 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-cyber/20 text-cyber rounded text-xs font-medium hover:bg-cyber/30 transition-colors border border-cyber/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <button 
                          onClick={() => toggleExpanded(actualIndex)}
                          className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs hover:bg-gray-500/30 transition-colors flex items-center gap-1 border border-gray-500/30"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-3 w-3" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3 w-3" />
                              +{project.tech.length - 3} more
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="flex-1 glass-effect border-electric hover:bg-electric/20 hover:shadow-electric/20 hover:shadow-lg transition-all duration-300">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button size="sm" variant="outline" className="flex-1 glass-effect border-neon hover:bg-neon/20 hover:shadow-neon/20 hover:shadow-lg transition-all duration-300">
                          <Eye className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button size="sm" variant="outline" className="flex-1 glass-effect border-cyber hover:bg-cyber/20 hover:shadow-cyber/20 hover:shadow-lg transition-all duration-300">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Paper
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const isExpanded = expandedProject === index;
              
              return (
                <Card 
                  key={index}
                  className={`glass-effect hover:neon-border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden ${project.featured ? 'ring-2 ring-electric/20' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <project.icon className="h-10 w-10 text-electric group-hover:animate-bounce transition-all duration-300" />
                        <div className="absolute -inset-1 bg-electric/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs border font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, isExpanded ? project.tech.length : 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-cyber/20 text-cyber rounded text-xs font-medium hover:bg-cyber/30 transition-colors border border-cyber/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <button 
                          onClick={() => toggleExpanded(index)}
                          className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs hover:bg-gray-500/30 transition-colors flex items-center gap-1 border border-gray-500/30"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-3 w-3" />
                              Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3 w-3" />
                              +{project.tech.length - 3}
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="flex-1 glass-effect border-electric hover:bg-electric/20 hover:shadow-electric/20 hover:shadow-lg transition-all duration-300">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button size="sm" variant="outline" className="flex-1 glass-effect border-neon hover:bg-neon/20 hover:shadow-neon/20 hover:shadow-lg transition-all duration-300">
                          <Eye className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button size="sm" variant="outline" className="flex-1 glass-effect border-cyber hover:bg-cyber/20 hover:shadow-cyber/20 hover:shadow-lg transition-all duration-300">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Paper
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center glass-effect p-6 rounded-lg hover:neon-border transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">9+</div>
            <div className="text-gray-400 text-sm">Active Projects</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-lg hover:neon-border transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">20+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-lg hover:neon-border transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-400 text-sm">Published Papers</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-lg hover:neon-border transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">95%+</div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
