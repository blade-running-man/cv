import type { EducationCoursesItemProps } from './EducationCoursesItem';
import { EducationCoursesItem } from './EducationCoursesItem';

interface EducationCoursesProps {
  data: EducationCoursesItemProps[];
}

export const EducationCourses = ({ data }: EducationCoursesProps) => {
  return (
    <div>
      {data.map((item, index) => (
        <EducationCoursesItem
          key={`education_item_${index.toString()}`}
          {...item}
        />
      ))}
    </div>
  );
};
