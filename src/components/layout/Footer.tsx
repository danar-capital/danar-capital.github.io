import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Copy Trading', href: '/services/copy-trading' },
    { name: 'Trading Bots', href: '/services/trading-bots' },
    { name: 'Indicators', href: '/services/indicators' },
    { name: 'Education', href: '/education' },
  ],
  platforms: [
    { name: 'TradingView', href: '/platforms/tradingview' },
    { name: 'MetaTrader 4', href: '/platforms/mt4' },
    { name: 'MetaTrader 5', href: '/platforms/mt5' },
    { name: 'cTrader', href: '/platforms/ctrader' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-primary-foreground">D</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Danar<span className="text-gold">Capital</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Smart trading solutions built on trust and performance. We provide professional 
              tools and education for traders at every level.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-accent/80 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-accent/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-accent/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@danarcapital.com"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-accent/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Platforms</h4>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-accent/50 rounded-xl p-4 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-gold">Risk Disclaimer:</strong> Trading in financial markets 
              involves substantial risk of loss and is not suitable for all investors. Past performance 
              is not indicative of future results. The content provided is for educational purposes only 
              and should not be considered as financial advice. Always conduct your own research and 
              consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Danar Capital. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
