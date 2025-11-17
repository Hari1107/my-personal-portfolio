import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Work Experience</span>
          </h2>
          
          <div className="space-y-8">
            <Card className="p-8 shadow-elegant hover:shadow-hover transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Junior Software Engineer</h3>
                  <p className="text-lg text-primary font-semibold mb-2">CronLabs Solutions, Bengaluru</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>October 2024 - Present</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Developed scalable web applications using Django Rest Framework and Angular, reducing load times. 
                  Designed RESTful APIs and database schemas, ensuring efficient data management.
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Product Development:</h4>
                  <p>
                    Developed an Employee Portal with modules for user authentication, employee management, 
                    education details tracking, and file attachments, integrating relational database design 
                    for seamless data handling.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Development & Maintenance:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Maintained Acacia CISCO project using Angular and Django Rest Framework for manufacturing analytics</li>
                    <li>Implemented real-time notification system using Django Channels for instant trade alerts</li>
                    <li>Built logging mechanism to track user actions for better auditability</li>
                    <li>Developed reusable Advanced Table component in Angular for consistent implementations</li>
                    <li>Designed and deployed UI for Chatbot Assistant managing message flows</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Module Development:</h4>
                  <p>
                    Developed dynamic Retailer Order Modification ChatBot for Indian FMCG using Angular and DRF, 
                    enabling real-time cart updates. Designed responsive UI for laptops and mobiles using Angular Material.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-elegant hover:shadow-hover transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Java Programming Intern</h3>
                  <p className="text-lg text-secondary font-semibold mb-2">STUVALLEY TECHNOLOGY</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>May 2024 - September 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 text-foreground/90">
                <p>
                  Actively involved in learning core Java concepts including syntax, control flow, and data types 
                  through comprehensive training program.
                </p>
                <p>
                  Developed advanced skills in Object-Oriented Programming, multithreading, exception handling, 
                  debugging, and integrating Java applications with MySQL databases using JDBC.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
