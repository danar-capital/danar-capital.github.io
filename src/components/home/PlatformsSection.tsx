import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'TradingView',
    description: 'Custom indicators, strategies, and alerts for the most popular charting platform.',
    href: '/platforms/tradingview',
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <path fill="currentColor" d="M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16zm13-8a2 2 0 100 4 2 2 0 000-4zm-6 6a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4zm-6 6a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    features: ['Indicators', 'Strategies', 'Alerts'],
  },
  {
    name: 'MetaTrader 4',
    description: 'Expert Advisors and custom indicators for the industry-standard forex platform.',
    href: '/platforms/mt4',
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <text fill="currentColor" fontSize="12" fontWeight="bold" x="4" y="22">MT4</text>
      </svg>
    ),
    features: ['Expert Advisors', 'Indicators', 'Scripts'],
  },
  {
    name: 'MetaTrader 5',
    description: 'Advanced multi-asset trading with powerful EA capabilities and market depth.',
    href: '/platforms/mt5',
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <text fill="currentColor" fontSize="12" fontWeight="bold" x="4" y="22">MT5</text>
      </svg>
    ),
    features: ['Multi-asset', 'EAs', 'Advanced tools'],
  },
  {
    name: 'cTrader',
    description: 'Modern interface with cBots and advanced algorithmic trading capabilities.',
    href: '/platforms/ctrader',
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text fill="currentColor" fontSize="10" fontWeight="bold" x="9" y="20">cT</text>
      </svg>
    ),
    features: ['cBots', 'Modern UI', 'Algo trading'],
  },
];

export function PlatformsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-medium text-gold uppercase tracking-wider mb-4">
            Platforms
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Trade on Your{' '}
            <span className="text-gradient-gold">Favorite Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our solutions are compatible with the world's leading trading platforms.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={platform.href}
                className="group block h-full p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-card"
              >
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center text-gold mb-4 group-hover:bg-gold/10 transition-colors">
                  {platform.logo}
                </div>

                {/* Content */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {platform.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5">
                  {platform.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 rounded-md bg-accent text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
