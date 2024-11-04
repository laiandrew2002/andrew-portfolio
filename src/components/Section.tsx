'use client';
import useSectionStore from '@/lib/store/useSectionStore';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Section = ({ children, id, className }: { children: React.ReactNode; id: string; className?: string }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const { setVisible, setHidden } = useSectionStore();

  useEffect(() => {
    if (!ref.current) return;
    if (isInView) {
      setVisible(ref.current.id);
    } else {
      setHidden(ref.current.id);
    }
  }, [ref, isInView, setVisible, setHidden]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}

export default Section;
