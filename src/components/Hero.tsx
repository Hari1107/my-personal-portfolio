import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-primary shadow-elegant">
                <AvatarImage src={profilePhoto} alt="Hariharan K" />
                <AvatarFallback>HK</AvatarFallback>
              </Avatar>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                HARIHARAN K
              </h1>
              <p className="text-xl md:text-2xl text-primary mb-3">
                Software Engineer @ CronLabs Solutions
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Crafting meaningful products through clean code and smart design.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/K_HARIHARAN_Jr_SWE_@cronLabs_resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center md:justify-start">
            <a 
              href="https://github.com/Hari1107" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/hariharan-k-developer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://leetcode.com/u/Harik1107/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              <Code className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
