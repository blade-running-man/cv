export interface EducationItemProps {
  degree: string;
  schoolName: string;
  location: string;
  startDate: string;
  endDate: string;
}
export const EducationItem = ({
  degree,
  schoolName,
  location,
  startDate,
  endDate,
}: EducationItemProps) => {
  return (
    <article className="mb-5 last:mb-0">
      <h1 className="mb-2 text-xl">{schoolName}</h1>
      <h2>{degree}</h2>
      <p>{location}</p>
      <p>
        {startDate} - {endDate}
      </p>
    </article>
  );
};
