import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Scale, FileCheck } from 'lucide-react';
import { TradingViewTicker } from '@/components/ui/TradingViewWidget';

export function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-navy-medium relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

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
            Trust & Transparency
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Your Trust is Our{' '}
            <span className="text-gradient-gold">Foundation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in complete transparency and responsible trading practices.
          </p>
        </motion.div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: 'Secure Infrastructure',
              description: 'Bank-grade encryption protects all data and communications.',
            },
            {
              icon: Scale,
              title: 'Regulatory Awareness',
              description: 'We operate with full respect for financial regulations.',
            },
            {
              icon: FileCheck,
              title: 'Verified Performance',
              description: 'All metrics are auditable and based on real trading data.',
            },
            {
              icon: AlertTriangle,
              title: 'Risk Disclosure',
              description: 'Clear communication about the risks involved in trading.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Risk Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-card border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Important Risk Disclosure
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trading in financial markets carries a high level of risk and may not be suitable for all investors. 
                The high degree of leverage can work against you as well as for you. Before deciding to trade, 
                you should carefully consider your investment objectives, level of experience, and risk appetite. 
                The possibility exists that you could sustain a loss of some or all of your initial investment. 
                You should be aware of all the risks associated with trading and seek advice from an independent 
                financial advisor if you have any doubts. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="text-center mb-4">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Live Market Overview
            </span>
          </div>
          <TradingViewTicker />
        </motion.div>
      </div>
    </section>
  );
}
