import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/bdlogo.png"
    alt="BharatsDev Logo"
    width={48}
    height={48}
    className={cn('h-10 w-10', className)}
    priority
  />
);
