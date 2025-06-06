
import { BookOpen, ExternalLink, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Research = () => {
  const researchProjects = [
    {
      title: "MultiHire – MambaFusionNet",
      description: "Novel neural network architecture combining Mamba state-space models with fusion networks for optimized multi-candidate hiring processes. This research introduces innovative approaches to candidate evaluation and selection automation.",
      status: "Published",
      journal: "IEEE Conference Proceedings",
      year: "2024",
      authors: ["Makam Devansh", "Dr. Research Supervisor"],
      keywords: ["Neural Networks", "State-Space Models", "HR Analytics", "Deep Learning"],
      abstract: "This paper presents a novel approach to automated hiring processes using advanced neural fusion architectures...",
      links: {
        paper: "#",
        code: "#",
        presentation: "#"
      }
    },
    {
      title: "Forest Fire Projection using Cellular Automata + MDP",
      description: "Comprehensive research on predicting forest fire patterns using hybrid computational models combining cellular automata with Markov Decision Processes for environmental conservation and disaster prevention.",
      status: "Under Review",
      journal: "Environmental AI Research",
      year: "2024",
      authors: ["Makam Devansh", "Environmental Research Team"],
      keywords: ["Environmental AI", "Cellular Automata", "MDP", "Fire Prediction"],
      abstract: "This study explores the integration of cellular automata and Markov Decision Processes for accurate forest fire prediction...",
      links: {
        preprint: "#",
        code: "#",
        dataset: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-neon/20 text-neon border-neon';
      case 'Under Review': return 'bg-flame/20 text-flame border-flame';
      case 'In Progress': return 'bg-electric/20 text-electric border-electric';
      default: return 'bg-gray-500/20 text-gray-500 border-gray-500';
    }
  };

  return (
    <section className="py-20 px-6" id="research">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Research Publications</span>
          </h2>
          <p className="text-xl text-gray-400">
            Contributing to the advancement of AI/ML through innovative research
          </p>
        </div>

        <div className="space-y-8">
          {researchProjects.map((research, index) => (
            <Card key={index} className="glass-effect hover:neon-border transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-8 w-8 text-electric mr-3" />
                      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(research.status)}`}>
                        {research.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{research.title}</h3>
                    <p className="text-gray-400 mb-4">{research.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Publication Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-300">
                        <BookOpen className="h-4 w-4 mr-2 text-cyber" />
                        <span className="font-semibold">Journal:</span>
                        <span className="ml-2">{research.journal}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-neon" />
                        <span className="font-semibold">Year:</span>
                        <span className="ml-2">{research.year}</span>
                      </div>
                      <div className="flex items-start text-gray-300">
                        <Users className="h-4 w-4 mr-2 mt-1 text-electric" />
                        <span className="font-semibold">Authors:</span>
                        <span className="ml-2">{research.authors.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {research.keywords.map((keyword, keyIndex) => (
                        <span 
                          key={keyIndex}
                          className="px-3 py-1 bg-cyber/20 text-cyber rounded-full text-xs border border-cyber/30"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
                  <p className="text-gray-400 text-sm italic">
                    {research.abstract}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {research.links.paper && (
                    <Button className="bg-electric hover:bg-electric/80 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Paper
                    </Button>
                  )}
                  {research.links.preprint && (
                    <Button variant="outline" className="glass-effect border-neon hover:bg-neon/20">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Preprint
                    </Button>
                  )}
                  {research.links.code && (
                    <Button variant="outline" className="glass-effect border-cyber hover:bg-cyber/20">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                  {research.links.presentation && (
                    <Button variant="outline" className="glass-effect border-flame hover:bg-flame/20">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Presentation
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

export default Research;
