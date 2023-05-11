import type { ReactNode } from 'react';

export interface DescriptionListItemProps {
  title: string;
  children: ReactNode;
}
export const DescriptionListItem = ({
  title,
  children,
}: DescriptionListItemProps) => (
  <li className="flex">
    <div className="mr-1">{title}:</div>
    <div>{children}</div>
  </li>
);
