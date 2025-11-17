import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Database, Layers, Globe, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" }
      ],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Angular v16", icon: "🅰️" },
        { name: "React", icon: "⚛️" }
      ],
      color: "text-secondary"
    },
    {
      icon: Server,
      title: "Backend & APIs",
      skills: [
        { name: "Django REST Framework", icon: "🎯" },
        { name: "FastAPI", icon: "⚡" },
        { name: "WebSocket", icon: "🔌" },
        { name: "API Design", icon: "🔗" }
      ],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "SQL", icon: "💾" },
        { name: "Firebase", icon: "🔥" },
        { name: "MySQL", icon: "🗄️" }
      ],
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "BitBucket", icon: "🪣" },
        { name: "Postman", icon: "📮" },
        { name: "Android Studio", icon: "📱" }
      ],
      color: "text-secondary"
    },
    {
      icon: Layers,
      title: "Additional Skills",
      skills: [
        { name: "UI Design", icon: "🎨" },
        { name: "Technical Documentation", icon: "📝" },
        { name: "Problem Solving", icon: "🧩" }
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-primary/10 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="text-sm flex items-center gap-1.5"
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
