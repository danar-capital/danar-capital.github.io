import { motion } from 'framer-motion';
import { Target, Eye, Users, Shield } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower traders with professional-grade tools and education, making sophisticated trading accessible to everyone.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To become the most trusted name in trading technology, known for transparency, innovation, and results.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a global community of informed traders who share knowledge and support each other\'s growth.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Operating with complete transparency, no false promises, and honest communication at every step.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 chart-grid opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-medium text-gold uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Built by Traders,{' '}
              <span className="text-gradient-gold">For Traders</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Danar Capital was founded with a simple belief: professional trading tools 
              should be accessible to everyone, not just institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-8 text-center">
              Our <span className="text-gradient-gold">Story</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Danar Capital was born from a passion for markets and technology. Our founders, 
                experienced traders themselves, recognized a gap in the market: while institutional 
                traders had access to sophisticated tools and strategies, retail traders were often 
                left with subpar solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We set out to change that. Today, we offer professional-grade trading tools, 
                automated solutions, and comprehensive education that empower traders at every level 
                to make informed decisions and trade with confidence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our commitment to transparency means we never make unrealistic promises. Trading 
                involves risk, and we believe the best way to help our clients is through education, 
                robust tools, and honest communication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}