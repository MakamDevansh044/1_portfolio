
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, User, Code, Mail, ChevronDown, Award, Briefcase, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'achievements', 'experience', 'projects', 'media', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const dropdownItems = [
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'media', label: 'Media & Events', icon: Camera },
  ];

  const allNavItems = [...mainNavItems, ...dropdownItems];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-electric to-cyber rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold gradient-text hidden sm:block">Devansh</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group ${
                      activeSection === item.id
                        ? 'bg-electric/20 text-electric border border-electric/30'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}

              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group ${
                    dropdownItems.some(item => item.id === activeSection)
                      ? 'bg-electric/20 text-electric border border-electric/30'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                  }`}
                >
                  <span className="text-sm font-medium">More</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 w-48 glass-effect border border-electric/30 rounded-lg py-2 shadow-lg">
                    {dropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full px-4 py-2 text-left flex items-center space-x-3 transition-colors ${
                            activeSection === item.id
                              ? 'bg-electric/20 text-electric'
                              : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="glass-effect border-electric/30 hover:bg-electric/20 p-2"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-electric" />
                ) : (
                  <Moon className="h-4 w-4 text-electric" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden glass-effect border-electric/30 hover:bg-electric/20 p-2"
              >
                {isOpen ? (
                  <X className="h-5 w-5 text-electric" />
                ) : (
                  <Menu className="h-5 w-5 text-electric" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] glass-effect border-l border-electric/30 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-2">
              {allNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 text-left ${
                      activeSection === item.id
                        ? 'bg-electric/20 text-electric border border-electric/30'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-muted-foreground text-sm">Ready to collaborate?</p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-3 bg-gradient-to-r from-electric to-cyber hover:from-cyber hover:to-neon text-white px-6 py-2 rounded-full font-semibold"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-60 h-1 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-electric via-cyber to-neon transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        />
      </div>

      {/* Click outside to close dropdown */}
      {dropdownOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
