import type { EducationItemProps } from './EducationItem';
import { EducationItem } from './EducationItem';

interface EducationProps {
  data: EducationItemProps[];
}

export const Education = ({ data }: EducationProps) => {
  return (
    <div>
      {data.map((item, index) => (
        <EducationItem key={`education_item_${index.toString()}`} {...item} />
      ))}
    </div>
  );
};
