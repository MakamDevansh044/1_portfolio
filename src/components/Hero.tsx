
import { useState, useEffect } from 'react';
import { ChevronDown, Code, Brain, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'AI/ML Engineer',
    'Research Contributor', 
    'Tech Innovator',
    'Creative Leader',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-electric to-cyber rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto">
        {/* Name with enhanced styling */}
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="gradient-text bg-gradient-to-r from-electric via-cyber to-neon bg-clip-text text-transparent animate-pulse">
              Makam Devansh
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-electric via-cyber to-neon rounded-full"></div>
          </h1>
          
          {/* Floating Icons */}
          <div className="absolute -top-8 -left-8 hidden md:block">
            <Code className="h-8 w-8 text-electric animate-bounce" />
          </div>
          <div className="absolute -top-8 -right-8 hidden md:block">
            <Brain className="h-8 w-8 text-cyber animate-bounce delay-500" />
          </div>
          <div className="absolute -bottom-8 left-1/4 hidden md:block">
            <Rocket className="h-6 w-6 text-neon animate-bounce delay-1000" />
          </div>
          <div className="absolute -bottom-8 right-1/4 hidden md:block">
            <Sparkles className="h-6 w-6 text-flame animate-bounce delay-1500" />
          </div>
        </div>

        {/* Dynamic Title */}
        <div className="mb-8">
          <div className="text-2xl md:text-4xl text-gray-300 mb-2">
            <span>I'm a </span>
            <span className="gradient-text font-bold min-h-[1.5em] inline-block">
              {currentText}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
            A <span className="text-electric font-semibold">passionate innovator</span> at CBIT with a 
            <span className="text-neon font-semibold"> 9.29 CGPA</span>, specializing in 
            <span className="text-cyber font-semibold"> Artificial Intelligence & Machine Learning</span>.
          </p>
          <p className="text-md md:text-lg text-gray-500 leading-relaxed">
            Transforming ideas into intelligent solutions through cutting-edge research, 
            dynamic leadership, and innovative problem-solving.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="glass-effect p-4 rounded-lg hover:neon-border transition-all duration-300 group">
            <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">9.29</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </div>
          <div className="glass-effect p-4 rounded-lg hover:neon-border transition-all duration-300 group">
            <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">15+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="glass-effect p-4 rounded-lg hover:neon-border transition-all duration-300 group">
            <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">5+</div>
            <div className="text-sm text-gray-400">Leadership Roles</div>
          </div>
          <div className="glass-effect p-4 rounded-lg hover:neon-border transition-all duration-300 group">
            <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">10+</div>
            <div className="text-sm text-gray-400">Achievements</div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-electric to-cyber hover:from-cyber hover:to-neon text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-electric/20 transition-all duration-300 transform hover:scale-105"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Explore My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-neon text-neon hover:bg-neon hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Brain className="mr-2 h-5 w-5" />
            View Research
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400 group-hover:text-electric transition-colors">Discover More</span>
            <ChevronDown className="h-6 w-6 text-electric group-hover:scale-125 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
