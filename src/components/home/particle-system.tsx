'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const runningRef = useRef(true);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (typeof window === 'undefined') return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeCanvas);
    }

    // Initialize particles - reduced count for performance
    const particleCount = 24;
    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * (canvas.clientWidth || 1920),
        y: Math.random() * (canvas.clientHeight || 1080),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
      }));
    };
    initParticles();

    const io = new IntersectionObserver(
      ([entry]) => {
        runningRef.current = entry.isIntersecting;
      },
      { root: null, threshold: 0 }
    );
    io.observe(canvas);

    const animate = (t: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (!runningRef.current) return;

      // Cap FPS (~30) to reduce CPU on scroll
      if (t - lastFrameTimeRef.current < 33) return;
      lastFrameTimeRef.current = t;

      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (particle.x < 0 || particle.x > w) particle.vx *= -1;
        if (particle.y < 0 || particle.y > h) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(74, 144, 226, 0.42)';
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 90) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(74, 144, 226, ${0.08 * (1 - distance / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas);
      }
      io.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
