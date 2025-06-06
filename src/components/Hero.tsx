
import { useState, useEffect } from 'react';
import { ChevronDown, Code, Brain, Rocket, Sparkles, Download, ArrowRight } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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

      <div className="text-center z-10 max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="mb-12 relative">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Hello, I'm
            </span>
          </div>

          {/* Name with enhanced styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative leading-tight">
            <span className="block">
              <span className="gradient-text bg-gradient-to-r from-electric via-cyber to-neon bg-clip-text text-transparent">
                Makam
              </span>
            </span>
            <span className="block">
              <span className="gradient-text bg-gradient-to-r from-cyber via-neon to-flame bg-clip-text text-transparent">
                Devansh
              </span>
            </span>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 hidden lg:block">
              <Code className="h-6 w-6 text-electric animate-bounce" />
            </div>
            <div className="absolute -top-4 -right-4 hidden lg:block">
              <Brain className="h-6 w-6 text-cyber animate-bounce delay-500" />
            </div>
            <div className="absolute -bottom-4 left-1/4 hidden lg:block">
              <Rocket className="h-5 w-5 text-neon animate-bounce delay-1000" />
            </div>
            <div className="absolute -bottom-4 right-1/4 hidden lg:block">
              <Sparkles className="h-5 w-5 text-flame animate-bounce delay-1500" />
            </div>
          </h1>

          {/* Dynamic Title */}
          <div className="mb-8">
            <div className="text-xl md:text-3xl lg:text-4xl text-foreground/80 mb-4">
              <span>I'm a </span>
              <span className="gradient-text font-bold min-h-[1.5em] inline-block">
                {currentText}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              A <span className="text-electric font-semibold">passionate innovator</span> at CBIT with a 
              <span className="text-neon font-semibold"> 9.29 CGPA</span>, specializing in 
              <span className="text-cyber font-semibold"> Artificial Intelligence & Machine Learning</span>.
            </p>
            <p className="text-md md:text-lg text-muted-foreground/80 leading-relaxed">
              Transforming ideas into intelligent solutions through cutting-edge research, 
              dynamic leadership, and innovative problem-solving.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="glass-effect p-6 rounded-xl hover:neon-border transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">9.29</div>
            <div className="text-sm text-muted-foreground">CGPA</div>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:neon-border transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:neon-border transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">5+</div>
            <div className="text-sm text-muted-foreground">Leadership</div>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:neon-border transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">10+</div>
            <div className="text-sm text-muted-foreground">Awards</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToAbout()}
            className="bg-gradient-to-r from-electric to-cyber hover:from-cyber hover:to-neon text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-electric/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-neon text-neon hover:bg-neon hover:text-background px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer group"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm text-muted-foreground group-hover:text-electric transition-colors font-medium">
              Discover More About Me
            </span>
            <div className="w-6 h-10 border-2 border-electric/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-5 w-5 text-electric group-hover:scale-125 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
