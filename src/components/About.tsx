
import { Brain, Code, Trophy, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const traits = [
    {
      icon: Brain,
      title: "AI/ML Expert",
      description: "Deep learning, computer vision, and system design specialist"
    },
    {
      icon: Code,
      title: "Tech Developer",
      description: "Python, OpenCV, and cutting-edge AI frameworks"
    },
    {
      icon: Trophy,
      title: "Achiever",
      description: "Multiple hackathon wins and research publications"
    },
    {
      icon: Zap,
      title: "Leader",
      description: "President of RMC, driving innovation and growth"
    }
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate innovator with a fire for AI/ML and a drive to solve complex problems 
            through technology. Always pushing boundaries and exploring new frontiers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:neon-border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <trait.icon className="h-12 w-12 text-electric mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{trait.title}</h3>
                <p className="text-gray-400">{trait.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-effect rounded-2xl p-8 neon-border">
          <h3 className="text-3xl font-bold gradient-text mb-6">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Python & Advanced Programming</li>
                <li>• Computer Vision with OpenCV</li>
                <li>• Deep Learning & Neural Networks</li>
                <li>• Machine Learning Algorithms</li>
                <li>• System Design & Architecture</li>
                <li>• Generative AI & LLMs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Leadership & Innovation</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Strategic Problem Solving</li>
                <li>• Research & Development</li>
                <li>• Team Leadership & Management</li>
                <li>• Event Planning & Execution</li>
                <li>• Project Coordination</li>
                <li>• Technical Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
