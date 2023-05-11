export interface EducationCoursesItemProps {
  title: string;
  issuer: string;
  issueDate: string;
}
export const EducationCoursesItem = ({
  title,
  issuer,
  issueDate,
}: EducationCoursesItemProps) => {
  return (
    <article className="mb-5 last:mb-0">
      <h1 className="mb-2 text-xl">{title}</h1>
      <h2>{issuer}</h2>
      <p>{issueDate}</p>
    </article>
  );
};
