import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VectorBackgroundProps {
  variant?: 'hero' | 'services' | 'dark';
}

const VectorBackground = ({ variant = 'hero' }: VectorBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray<SVGElement>('.vector-shape');

      shapes.forEach((shape, index) => {
        // Slow infinite rotation
        gsap.to(shape, {
          rotation: 360,
          duration: 30 + index * 6,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%',
        });

        // Parallax on scroll
        gsap.to(shape, {
          y: -80,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const colors = {
    hero: {
      stroke: 'stroke-primary/20',
      fill: 'fill-primary/5',
    },
    services: {
      stroke: 'stroke-accent/30',
      fill: 'fill-accent/10',
    },
    dark: {
      stroke: 'stroke-white/15',
      fill: 'fill-white/5',
    },
  }[variant];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* CIRCLE ORBITS */}
      <svg
        className="vector-shape absolute -top-40 -right-40 w-[600px] h-[600px] opacity-50"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          className={`${colors.stroke} ${colors.fill}`}
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="55"
          className={colors.stroke}
          strokeWidth="0.4"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="35"
          className={colors.stroke}
          strokeWidth="0.3"
          fill="none"
        />
      </svg>

      {/* GRID PATTERN */}
      <svg
        className="vector-shape absolute top-1/4 left-10 w-[320px] h-[320px] opacity-30"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              className={colors.stroke}
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#gridPattern)" />
      </svg>

      {/* HEXAGON */}
      <svg
        className="vector-shape absolute bottom-24 right-1/4 w-[220px] h-[220px] opacity-40"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          className={`${colors.stroke} ${colors.fill}`}
          strokeWidth="0.6"
        />
      </svg>

      {/* DOT MATRIX */}
      <svg
        className="vector-shape absolute top-1/2 -left-20 w-[420px] h-[420px] opacity-25"
        viewBox="0 0 100 100"
      >
        {[...Array(10)].map((_, i) =>
          [...Array(10)].map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={5 + i * 10}
              cy={5 + j * 10}
              r="1.2"
              className={colors.fill.replace('/5', '/30')}
            />
          ))
        )}
      </svg>

      {/* TRIANGLE */}
      <svg
        className="vector-shape absolute bottom-1/3 left-1/3 w-[160px] h-[160px] opacity-30"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,10 90,90 10,90"
          className={colors.stroke}
          strokeWidth="0.6"
          fill="none"
        />
      </svg>

      {/* WAVY LINES */}
      <svg
        className="vector-shape absolute top-10 left-1/2 w-[520px] h-[200px] opacity-20"
        viewBox="0 0 200 80"
      >
        <path
          d="M0,40 Q25,20 50,40 T100,40 T150,40 T200,40"
          className={colors.stroke}
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d="M0,55 Q25,35 50,55 T100,55 T150,55 T200,55"
          className={colors.stroke}
          strokeWidth="0.4"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default VectorBackground;
