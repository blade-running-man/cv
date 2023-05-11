import type { ReactNode } from 'react';

interface DescriptionListProps {
  children?: ReactNode;
}

export const DescriptionList = ({ children }: DescriptionListProps) => {
  return <ul>{children}</ul>;
};
