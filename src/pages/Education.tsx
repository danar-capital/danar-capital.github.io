import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Video, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const courses = [
  {
    title: 'Trading Fundamentals',
    description: 'Learn the basics of financial markets and trading principles',
    level: 'Beginner',
    duration: '8 hours',
  },
  {
    title: 'Technical Analysis Mastery',
    description: 'Advanced chart patterns, indicators, and price action',
    level: 'Intermediate',
    duration: '12 hours',
  },
  {
    title: 'Risk Management Strategies',
    description: 'Protect your capital with professional risk management',
    level: 'All Levels',
    duration: '6 hours',
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 chart-grid opacity-20" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-medium text-teal uppercase tracking-wider mb-4">
              Education
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Learn to Trade{' '}
              <span className="text-gradient-teal">With Confidence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Comprehensive trading education from market fundamentals to advanced strategies. 
              Learn at your own pace with our structured courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="teal">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Free Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Video, value: '50+', label: 'Video Lessons' },
              { icon: BookOpen, value: '200+', label: 'Articles' },
              { icon: Users, value: 'Live', label: 'Sessions' },
              { icon: Award, value: 'Cert', label: 'Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <stat.icon className="w-10 h-10 text-teal mx-auto mb-4" />
                <div className="text-3xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Featured <span className="text-gradient-teal">Courses</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-md bg-teal/10 text-xs text-teal">
                    {course.level}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-accent text-xs text-muted-foreground">
                    {course.duration}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {course.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}