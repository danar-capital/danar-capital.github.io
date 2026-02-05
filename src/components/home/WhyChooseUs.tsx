import { motion } from 'framer-motion';
import { Shield, Eye, Cpu, Layers } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Protected',
    description: 'Industry-standard encryption and security protocols protect your data and trading activities.',
    color: 'gold',
  },
  {
    icon: Eye,
    title: 'Fully Transparent',
    description: 'Clear reporting, honest metrics, and no hidden fees. You always know exactly what you\'re getting.',
    color: 'teal',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven',
    description: 'Cutting-edge algorithms and automation powered by advanced trading technology.',
    color: 'gold',
  },
  {
    icon: Layers,
    title: 'Multi-Platform',
    description: 'Seamlessly works across TradingView, MetaTrader 4/5, and cTrader platforms.',
    color: 'teal',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-medium text-gold uppercase tracking-wider mb-4">
            Why Danar Capital
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Built for Traders Who{' '}
            <span className="text-gradient-gold">Demand Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to security, transparency, and innovation sets us apart in the trading industry.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-card">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${feature.color === 'gold' ? 'gold' : 'teal'}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color === 'gold' ? 'text-gold' : 'text-teal'}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${feature.color === 'gold' ? 'from-gold/5' : 'from-teal/5'} to-transparent`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
