import type { ExperienceItemProps } from './ExperienceItem';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceProps {
  data: ExperienceItemProps[];
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <div>
      {data.map((item, index) => (
        <ExperienceItem key={`experience_item_${index.toString()}`} {...item} />
      ))}
    </div>
  );
};
