
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-display font-black text-white group">
          <span className="text-brand-500 group-hover:text-brand-300 transition-colors">IH</span>
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform inline-block"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-500/20 active:scale-95"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
