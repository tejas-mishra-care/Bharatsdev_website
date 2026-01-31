
'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        prefetch={true}
        className={cn(
          'text-base font-semibold transition-colors relative',
          isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary',
          'after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:rounded-full',
          isActive && 'after:scale-x-100',
          'hover:after:scale-x-100'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 border-b",
        hasScrolled 
          ? 'h-20 bg-background/95 backdrop-blur-xl shadow-xl shadow-black/5 border-border/50' 
          : 'h-24 bg-background/80 backdrop-blur-sm border-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container flex h-full items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Back to homepage">
            <Logo className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Bharats<span className="text-primary">Dev</span></span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <NavLink {...link} />
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <motion.div
            className="hidden md:flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="default" className="relative overflow-hidden group">
              <Link href="/contact">
                <span className="relative z-10">Start a Project</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-11 w-11">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="p-0 w-full max-w-sm bg-foreground/95 backdrop-blur-lg border-l-0"
            >
                <div className="p-4 flex items-center justify-between h-24 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo className="h-8 w-8" />
                         <span className="text-lg font-bold text-white">Bharats<span className="text-primary">Dev</span></span>
                    </Link>
                    <SheetTrigger asChild>
                         <Button variant="ghost" size="icon" className="h-11 w-11 text-white hover:bg-white/10 hover:text-white">
                            <X className="h-7 w-7" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
              <div className="p-8">
                <nav className="grid gap-8 mt-8">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                          "transition-colors text-3xl font-semibold relative text-white",
                          pathname === link.href ? 'text-primary' : 'hover:text-primary'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                 <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
