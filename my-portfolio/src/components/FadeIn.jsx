import { useInView } from '../hooks/useInView';

export default function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView();

  const hidden = {
    up: 'opacity-0 translate-y-10',
    left: 'opacity-0 -translate-x-10',
    right: 'opacity-0 translate-x-10',
    none: 'opacity-0',
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0 translate-y-0' : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
