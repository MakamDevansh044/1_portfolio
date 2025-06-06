
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "devansh.makam@gmail.com",
      link: "mailto:devansh.makam@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Hyderabad, India",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, link: "#", label: "GitHub" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Twitter, link: "#", label: "Twitter" }
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Let's collaborate on innovative projects and build the future together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect neon-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="mr-3 h-6 w-6 text-electric" />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-effect border-electric/30 focus:border-electric text-white"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-effect border-electric/30 focus:border-electric text-white"
                    required
                  />
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-effect border-electric/30 focus:border-electric text-white"
                  required
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="glass-effect border-electric/30 focus:border-electric text-white"
                  required
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-electric hover:bg-electric/80 text-white animate-glow"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text mb-8">Contact Information</h3>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-effect hover:neon-border transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <info.icon className="h-6 w-6 text-electric mr-4" />
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-gray-400 hover:text-electric transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="glass-effect border-cyber hover:bg-cyber/20 group"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <social.icon className="h-5 w-5 group-hover:animate-bounce" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <Card className="glass-effect bg-gradient-to-r from-electric/10 to-neon/10">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-4">Download Resume</h4>
                <Button 
                  className="bg-neon hover:bg-neon/80 text-black font-bold animate-glow"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
