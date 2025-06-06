
import { Trophy, Award, Star, Brain, Presentation, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "VJ Hackathon 1st Runner-Up",
      description: "Outstanding performance in competitive hackathon",
      color: "text-flame",
      link: "#"
    },
    {
      icon: Brain,
      title: "GNTS Arani",
      description: "Recognition in neural technology symposium",
      color: "text-cyber",
      link: "#"
    },
    {
      icon: Presentation,
      title: "CBIT Research Day",
      description: "Excellence in research presentation",
      color: "text-electric",
      link: "#"
    },
    {
      icon: Star,
      title: "Neuroverse Project 1st Prize",
      description: "Innovative AI project recognition",
      color: "text-neon",
      link: "#"
    },
    {
      icon: Award,
      title: "RMC Paper Presentation - 2nd Prize",
      description: "Academic excellence in mathematics",
      color: "text-flame",
      link: "#"
    },
    {
      icon: Target,
      title: "E-Quiz Perfect Score",
      description: "100% accuracy in technical quiz",
      color: "text-cyber",
      link: "#"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6" id="achievements">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600">
            Recognition and awards that showcase excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="glass-effect hover:neon-border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              onClick={() => window.open(achievement.link, '_blank')}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <achievement.icon className={`h-6 w-6 md:h-8 md:w-8 ${achievement.color} mr-3 group-hover:animate-bounce`} />
                  <div className="h-2 w-2 rounded-full bg-electric animate-pulse" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">{achievement.description}</p>
                <div className="mt-4 text-xs text-electric group-hover:text-neon transition-colors">
                  View Certificate →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
