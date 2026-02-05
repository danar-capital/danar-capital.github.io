import { motion } from 'framer-motion';
import { ArrowRight, LineChart, Layers, Bell, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const indicators = [
  {
    name: 'Trend Master Pro',
    description: 'Advanced trend detection with multi-timeframe analysis',
    platform: 'TradingView',
  },
  {
    name: 'Volume Profile Elite',
    description: 'Institutional-grade volume analysis tools',
    platform: 'MetaTrader 4/5',
  },
  {
    name: 'Smart Money Concept',
    description: 'Order block and liquidity zone identification',
    platform: 'TradingView',
  },
];

export default function IndicatorsPage() {
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
              Indicators
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Professional-Grade{' '}
              <span className="text-gradient-gold">Trading Indicators</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Custom technical indicators designed to give you an edge in the markets. 
              Built for TradingView and MetaTrader platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-gold">
                View Indicators
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Request Custom
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Layers, title: 'Multi-Timeframe', description: 'Analyze across multiple timeframes simultaneously' },
              { icon: Bell, title: 'Smart Alerts', description: 'Get notified when conditions are met' },
              { icon: TrendingUp, title: 'Performance Focus', description: 'Optimized for accuracy and speed' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <feature.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Indicator List */}
          <div className="space-y-4">
            {indicators.map((indicator, index) => (
              <motion.div
                key={indicator.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {indicator.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {indicator.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-xs text-muted-foreground">
                    {indicator.platform}
                  </span>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}