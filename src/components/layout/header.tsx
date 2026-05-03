'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, type Easing } from 'framer-motion';

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const hasScrolledRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const next = window.scrollY > 20;
      if (next !== hasScrolledRef.current) {
        hasScrolledRef.current = next;
        setHasScrolled(next);
      }
    };
    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        prefetch={true}
        className={cn(
          'text-sm font-semibold transition-colors uppercase tracking-widest',
          isActive ? 'text-primary' : 'text-chrome hover:text-white'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        hasScrolled 
          ? 'h-20 bg-black/80 backdrop-blur-md border-[#222222]' 
          : 'h-24 bg-transparent border-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={springTransition}
    >
      <div className="container flex h-full items-center justify-between px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springTransition}
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <span className="text-2xl font-black font-heading tracking-tight text-white">Bharats<span className="text-primary">Dev</span></span>
          </Link>
        </motion.div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              <Button asChild size="default" className="bg-white text-black hover:bg-chrome font-bold rounded-md px-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Link href="/contact">Start a Project</Link>
              </Button>
            </motion.div>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-[#111111] hover:text-white border border-[#222222]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="p-0 w-full max-w-sm bg-black border-l border-[#222222]"
            >
              <div className="p-4 flex items-center justify-between h-20 border-b border-[#222222]">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-black font-heading text-white">Bharats<span className="text-primary">Dev</span></span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-chrome hover:text-white hover:bg-[#111111]">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </div>
              <div className="p-8">
                <nav className="grid gap-6 mt-4">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "transition-colors text-2xl font-bold font-heading text-white",
                        pathname === link.href ? 'text-primary' : 'hover:text-primary'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <Button asChild size="lg" className="w-full bg-primary text-black hover:bg-primary/90 font-bold rounded-md">
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
