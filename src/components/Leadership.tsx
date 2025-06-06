
import { Crown, Users, Zap, Target, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Leadership = () => {
  const roles = [
    {
      icon: Crown,
      title: "President",
      organization: "Ramanujan Math Club (RMC)",
      period: "Present",
      status: "Current",
      description: "Leading strategic initiatives and fostering mathematical innovation"
    },
    {
      icon: Zap,
      title: "Co-Convener",
      organization: "Neuroverse, Sudhee'25",
      period: "2025",
      status: "Active",
      description: "Orchestrating neural technology symposium and research"
    },
    {
      icon: Users,
      title: "General Secretary",
      organization: "Neural Nexus",
      period: "2024-25",
      status: "Active",
      description: "Managing community engagement and technical events"
    },
    {
      icon: Target,
      title: "Events Head",
      organization: "RMC",
      period: "2024-25",
      status: "Active",
      description: "Planning and executing mathematical competitions and workshops"
    },
    {
      icon: Rocket,
      title: "Team Lead",
      organization: "Intell Alpha",
      period: "2024",
      status: "Completed",
      description: "Leading AI research team for innovative projects"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current': return 'bg-neon/20 text-neon border-neon';
      case 'Active': return 'bg-electric/20 text-electric border-electric';
      case 'Completed': return 'bg-cyber/20 text-cyber border-cyber';
      default: return 'bg-gray-500/20 text-gray-500 border-gray-500';
    }
  };

  return (
    <section className="py-20 px-6" id="leadership">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Leadership & Roles</span>
          </h2>
          <p className="text-xl text-gray-400">
            Driving innovation and building communities through strategic leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-electric via-cyber to-neon opacity-50 hidden md:block" />
          
          <div className="space-y-8">
            {roles.map((role, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-6 h-6 bg-electric rounded-full border-4 border-background hidden md:block group-hover:animate-pulse" />
                
                <div className="md:ml-20 w-full">
                  <div className="glass-effect rounded-xl p-6 hover:neon-border transition-all duration-300 transform hover:scale-105">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center">
                        <role.icon className="h-8 w-8 text-electric mr-3 group-hover:animate-bounce" />
                        <div>
                          <h3 className="text-xl font-bold text-white">{role.title}</h3>
                          <p className="text-cyber font-semibold">{role.organization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(role.status)}>
                          {role.status}
                        </Badge>
                        <span className="text-gray-400 text-sm">{role.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-400">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
