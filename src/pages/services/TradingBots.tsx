import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Shield, Clock, Settings, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const features = [
  {
    icon: Clock,
    title: '24/7 Trading',
    description: 'Never miss a trading opportunity. Our bots trade around the clock without fatigue.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Built-in stop-loss, take-profit, and position sizing rules to protect your capital.',
  },
  {
    icon: Settings,
    title: 'Fully Customizable',
    description: 'Adjust parameters to match your risk tolerance and trading style.',
  },
  {
    icon: BarChart3,
    title: 'Backtested Strategies',
    description: 'All strategies are rigorously tested on historical data before deployment.',
  },
];

export default function TradingBotsPage() {
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
              Trading Bots
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Automated Trading{' '}
              <span className="text-gradient-teal">Without Emotion</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Our custom trading bots execute strategies with precision and discipline, 
              removing emotional bias from your trading decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="teal">
                Request a Bot
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Why <span className="text-gradient-teal">Automate?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Let technology handle the execution while you focus on strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Need a Custom <span className="text-gradient-teal">Trading Bot?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Contact us to discuss your requirements and we'll build a solution tailored to your needs.
            </p>
            <Button size="lg" variant="teal">
              Request a Bot
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}