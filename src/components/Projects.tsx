import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Android Application",
      description: "Designed and developed a feature-rich E-commerce Android app using Android Studio and Java. Demonstrating strong proficiency in mobile app development, focusing on critical features like smooth product listing, effective cart management, and secure user authentication for a seamless shopping experience.",
      technologies: ["XML", "Java", "Firebase", "Android Studio"],
      link: "https://github.com/hariharan1107/E-commerce-Android-App"
    },
    {
      title: "Driver Drowsiness Detection System",
      description: "Advanced drowsiness detection system that uses machine learning to analyze real-time facial expressions and eye movements, accurately assessing driver drowsiness. Detects early signs, alerts the driver, and activates safety measures, enhancing road safety.",
      technologies: ["Python", "Tkinter", "OpenCV", "Machine Learning"],
      link: "https://github.com/hariharan1107/Driver-Drowsiness-Detection"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-foreground/80 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="default"
                  className="w-full"
                  asChild
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
