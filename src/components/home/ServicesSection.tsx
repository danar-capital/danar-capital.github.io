import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Bot, LineChart, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Users,
    title: 'Copy Trading',
    description: 'Mirror the trades of experienced professionals. Automated execution with full transparency and risk controls.',
    href: '/services/copy-trading',
    features: ['Real-time mirroring', 'Risk management', 'Performance tracking'],
    accent: 'gold',
  },
  {
    icon: Bot,
    title: 'Trading Bots',
    description: 'Custom automated trading solutions that execute strategies 24/7 with precision and discipline.',
    href: '/services/trading-bots',
    features: ['24/7 automation', 'Custom strategies', 'Backtesting'],
    accent: 'teal',
  },
  {
    icon: LineChart,
    title: 'Indicators',
    description: 'Professional-grade technical indicators designed for TradingView and MetaTrader platforms.',
    href: '/services/indicators',
    features: ['Custom algorithms', 'Multi-timeframe', 'Alert systems'],
    accent: 'gold',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Comprehensive trading education from market fundamentals to advanced strategy development.',
    href: '/education',
    features: ['Video courses', 'Live sessions', 'Market analysis'],
    accent: 'teal',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-navy-medium relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 chart-grid opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-medium text-teal uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Comprehensive Trading{' '}
            <span className="text-gradient-teal">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From automated trading to education, we provide everything you need to succeed in the markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-elevated"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${service.accent === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center`}>
                      <service.icon className={`w-8 h-8 ${service.accent === 'gold' ? 'text-gold' : 'text-teal'}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-accent text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-border hover:bg-accent">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
