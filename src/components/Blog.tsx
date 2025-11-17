import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable REST APIs with Django",
      excerpt: "Learn how to design and implement efficient REST APIs using Django Rest Framework with best practices for authentication and permissions.",
      date: "2024-11-15",
      readTime: "8 min read",
      tags: ["Django", "Python", "API"],
      featured: true
    },
    {
      title: "Real-time Communication with WebSockets",
      excerpt: "Explore the power of WebSocket technology for building real-time features in web applications, from chat systems to live notifications.",
      date: "2024-11-10",
      readTime: "6 min read",
      tags: ["WebSocket", "JavaScript", "Real-time"],
      featured: true
    },
    {
      title: "Angular Best Practices for Enterprise Applications",
      excerpt: "Discover essential patterns and practices for building maintainable and scalable Angular applications in enterprise environments.",
      date: "2024-11-05",
      readTime: "10 min read",
      tags: ["Angular", "TypeScript", "Best Practices"],
      featured: false
    },
    {
      title: "Machine Learning in Production: Drowsiness Detection",
      excerpt: "A deep dive into implementing and deploying a real-time drowsiness detection system using computer vision and machine learning.",
      date: "2024-10-28",
      readTime: "12 min read",
      tags: ["Machine Learning", "Python", "Computer Vision"],
      featured: false
    },
    {
      title: "Modern Android Development with Kotlin",
      excerpt: "From Java to Kotlin: Understanding the benefits and modern approaches to Android development with practical examples.",
      date: "2024-10-20",
      readTime: "7 min read",
      tags: ["Android", "Kotlin", "Mobile"],
      featured: false
    },
    {
      title: "Database Optimization Techniques",
      excerpt: "Essential SQL optimization strategies and indexing techniques to improve query performance in production databases.",
      date: "2024-10-15",
      readTime: "9 min read",
      tags: ["SQL", "Database", "Performance"],
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Tech Blog & Insights</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sharing knowledge and experiences in software development, web technologies, and modern engineering practices.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className={`p-6 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                  post.featured ? 'border-primary' : ''
                }`}
              >
                {post.featured && (
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                )}
                
                <h3 className="font-bold text-xl mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
