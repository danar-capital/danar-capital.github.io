import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const steps = [
  {
    number: '01',
    title: 'Choose a Strategy',
    description: 'Browse our selection of verified trading strategies and select one that matches your risk profile.',
  },
  {
    number: '02',
    title: 'Connect Your Account',
    description: 'Link your trading account through a secure connection. Your credentials are never shared.',
  },
  {
    number: '03',
    title: 'Start Copying',
    description: 'Trades are automatically mirrored to your account in real-time with your defined risk settings.',
  },
];

const benefits = [
  'Real-time trade execution',
  'Adjustable risk settings',
  'Full transparency on performance',
  'Stop at any time',
  'Professional risk management',
  'Multiple platforms supported',
];

export default function CopyTradingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 chart-grid opacity-20" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-medium text-gold uppercase tracking-wider mb-4">
              Copy Trading
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Mirror Expert Trades{' '}
              <span className="text-gradient-gold">Automatically</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Follow professional traders and automatically replicate their strategies on your own account. 
              No experience required—let the experts do the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-gold">
                Start Copy Trading
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Strategies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              How It <span className="text-gradient-teal">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-card border border-border/50"
              >
                <span className="text-6xl font-heading font-bold text-gold/20">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-xl text-foreground mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
                Why Choose Our{' '}
                <span className="text-gradient-gold">Copy Trading</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our copy trading service is designed with security and transparency at its core. 
                You maintain full control over your funds while benefiting from professional strategies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: TrendingUp, label: 'Performance', value: 'Verified' },
                { icon: Shield, label: 'Security', value: '256-bit' },
                { icon: Users, label: 'Traders', value: 'Professional' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-gradient-card border border-border/50">
                  <stat.icon className="w-8 h-8 text-gold mb-4" />
                  <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Ready to Start <span className="text-gradient-gold">Copy Trading?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join our platform and start following professional traders today.
            </p>
            <Button size="lg" className="glow-gold">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}