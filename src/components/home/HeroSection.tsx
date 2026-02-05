import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 chart-grid opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Subtle chart lines animation */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <motion.path
          d="M0,400 Q200,300 400,350 T800,280 T1200,320 T1600,250 T2000,300"
          fill="none"
          stroke="url(#gold-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,500 Q300,420 600,480 T1200,400 T1800,450"
          fill="none"
          stroke="url(#teal-gradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(42, 70%, 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(42, 70%, 55%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(42, 70%, 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="teal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(172, 66%, 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(172, 66%, 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(172, 66%, 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by Professional Traders</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Smart Trading Solutions{' '}
            <span className="text-gradient-gold">Built on Trust</span>{' '}
            <span className="text-foreground">&</span>{' '}
            <span className="text-gradient-teal">Performance</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Professional copy trading, automated bots, custom indicators, and comprehensive 
            education—all designed for traders who demand excellence.
          </motion.p>

          {/* Service Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {['Copy Trading', 'Trading Bots', 'Indicators', 'Education'].map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg bg-muted/50 text-sm text-muted-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="glow-gold text-base px-8 group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border hover:bg-accent">
              <Play className="w-4 h-4 mr-2" />
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {[
              { icon: Shield, label: 'Secure', value: '256-bit' },
              { icon: TrendingUp, label: 'Platforms', value: '4+' },
              { icon: Zap, label: 'Real-time', value: 'Data' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent mb-3">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-lg font-semibold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
