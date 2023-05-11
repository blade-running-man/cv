import type { ReactNode } from 'react';

interface BoxSectionProps {
  title: string;
  children?: ReactNode;
}

export const BoxSection = ({ title, children }: BoxSectionProps) => {
  return (
    <section className="mb-5">
      <header className="mb-2">
        <h1 className="text-2xl uppercase">{title}</h1>
      </header>
      {children}
    </section>
  );
};
