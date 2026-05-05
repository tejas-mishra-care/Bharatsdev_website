'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
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
          'text-[10px] xl:text-xs font-bold transition-colors uppercase tracking-[0.15em] whitespace-nowrap',
          isActive ? 'text-primary' : 'text-chrome hover:text-white'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <motion.header
        className={cn(
          "pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between px-4 md:px-6 w-full max-w-7xl",
          hasScrolled 
            ? 'h-16 bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'h-16 bg-[#111113]/40 backdrop-blur-lg border border-white/5 shadow-xl'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={springTransition}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springTransition}
          className="flex-shrink-0"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <span className="text-xl md:text-2xl font-black font-heading tracking-tight text-white">Bharats<span className="text-primary">Dev</span></span>
          </Link>
        </motion.div>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-8 px-4 overflow-hidden">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:gap-4 flex-shrink-0">
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0px 0px 0px rgba(37,99,235,0.2)",
                "0px 0px 20px rgba(249,115,22,0.4)",
                "0px 0px 0px rgba(37,99,235,0.2)"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="rounded-full"
          >
            <Button asChild size="sm" className="bg-gradient-to-r from-[#2563EB] to-[#F97316] hover:from-[#1D4ED8] hover:to-[#EA580C] text-white font-bold rounded-full px-4 md:px-6 border border-white/20 h-8 md:h-10 text-xs md:text-sm transition-all duration-300">
              <Link href="/contact" aria-label="Start Project">
                <span className="hidden sm:inline">Initialize Project</span>
                <span className="sm:hidden">Start</span>
              </Link>
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10 rounded-full h-8 w-8 md:h-10 md:w-10 flex-shrink-0 ml-1">
                <Menu className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="p-0 w-full max-w-sm bg-black/90 backdrop-blur-2xl border-l border-[#222222]"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation links for BharatsDev</SheetDescription>
              <div className="p-4 flex items-center justify-between h-20 border-b border-[#222222]">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-black font-heading text-white">Bharats<span className="text-primary">Dev</span></span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-chrome hover:text-white hover:bg-[#111111] rounded-full">
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
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-[#2563EB] to-[#F97316] text-white font-bold rounded-full border border-white/20 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  <Link href="/contact">Initialize Project</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </div>
  );
}
