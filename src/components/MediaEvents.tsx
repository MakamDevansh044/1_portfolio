
import { useState } from 'react';
import { Play, Calendar, Users, Camera, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MediaEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaItems = [
    {
      type: 'image',
      title: 'Research Presentation at CBIT',
      description: 'Presenting MultiHire - MambaFusionNet research findings',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      date: '2024-03-15',
      category: 'Research'
    },
    {
      type: 'image',
      title: 'VJ Hackathon Victory',
      description: 'Team collaboration and innovation at its finest',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      date: '2024-02-20',
      category: 'Achievement'
    },
    {
      type: 'image',
      title: 'Neuroverse Project Demo',
      description: 'Showcasing AI-driven solutions at Sudhee\'25',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
      date: '2024-01-10',
      category: 'Leadership'
    },
    {
      type: 'image',
      title: 'Math Club Events',
      description: 'Leading community building activities',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      date: '2023-12-05',
      category: 'Community'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6" id="media">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Media & Events</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
            Capturing moments of innovation, learning, and community building
          </p>
          <p className="text-base md:text-lg text-electric mt-2">
            Want to see more of my work and activities?
          </p>
        </div>

        {/* Media Carousel */}
        <div className="relative mb-12 md:mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mediaItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-64 md:h-96 lg:h-[500px]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                      <div className="max-w-4xl">
                        <span className="inline-block px-3 py-1 bg-electric/20 text-electric text-xs md:text-sm rounded-full mb-2 md:mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-lg text-gray-200 mb-2 md:mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center text-xs md:text-sm text-gray-300">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 glass-effect border-white/20 hover:border-electric z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 glass-effect border-white/20 hover:border-electric z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-electric' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { icon: Camera, label: 'Events Captured', value: '50+' },
            { icon: Users, label: 'People Reached', value: '500+' },
            { icon: Play, label: 'Presentations', value: '15+' },
            { icon: Calendar, label: 'Active Years', value: '3+' }
          ].map((stat, index) => (
            <Card key={index} className="glass-effect hover:neon-border transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 md:p-6 text-center">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 text-electric" />
                <div className="text-xl md:text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow Journey CTA */}
        <div className="text-center">
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4">
                Follow My Journey
              </h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 text-sm md:text-base">
                Stay updated with my latest projects, research breakthroughs, and community initiatives
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button className="bg-electric hover:bg-electric/80 text-black font-semibold group">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber/10">
                  <Camera className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" className="border-neon text-neon hover:bg-neon/10">
                  <Users className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MediaEvents;
