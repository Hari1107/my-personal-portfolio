import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    B.Tech. Computer Science Engineering (Core)
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Vellore Institute of Technology, AP Campus
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-foreground font-medium">2020-2024</span>
                    <span className="text-primary font-semibold">CGPA: 8.34</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Higher Secondary
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Oxford Matric. Hr. Sec. School, Tenkasi, Tamil Nadu
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-foreground font-medium">2019-20</span>
                    <span className="text-secondary font-semibold">85%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
