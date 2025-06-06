
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'AI/ML Innovator & Tech Leader';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.width = Math.random() * 5 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 3 + 7 + 's';
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 10000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-float">
            <span className="gradient-text">Makam</span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-float">
            <span className="gradient-text animate-glitch">Devansh</span>
          </h1>
        </div>
        
        <div className="mb-8 h-16">
          <p className="text-2xl md:text-3xl text-gray-300 font-mono">
            <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-electric animate-blink">
              {text}
            </span>
          </p>
        </div>

        <div className="mb-8">
          <p className="text-xl text-gray-400 mb-4">
            CBIT Student | CGPA: 9.29 | President @ RMC
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Persistent, high-energy innovator passionate about AI, computer vision, 
            and building the future with cutting-edge technology.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            className="bg-electric hover:bg-electric/80 text-white neon-border animate-glow"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-effect text-white border-cyber hover:bg-cyber/20"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-effect text-white border-neon hover:bg-neon/20"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-effect text-white border-flame hover:bg-flame/20"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-electric mx-auto" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-cyber/10 pointer-events-none" />
    </section>
  );
};

export default Hero;
