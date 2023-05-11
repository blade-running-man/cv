export interface ExperienceItemProps {
  jobTitle: string;
  companyName: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  responsibilities: string;
}
export const ExperienceItem = ({
  jobTitle,
  companyName,
  location,
  description,
  startDate,
  endDate,
  techStack,
  responsibilities,
}: ExperienceItemProps) => {
  return (
    <article className="mb-5 last:mb-0">
      <h1 className="mb-2 text-xl">{jobTitle}</h1>
      <div className="mb-2 flex">
        <h2 className="mr-3 text-lg">
          <span className="pr-1">🏢</span> {companyName}
        </h2>
        <div className="text-lg">
          <span>{startDate}</span> - <span>{endDate}</span>
        </div>
      </div>
      <dl>
        <div className="mb-2 flex">
          <dt className="mr-3">
            <span className="pr-1">📍</span> Location:
          </dt>
          <dd>{location}</dd>
        </div>

        <div className="mb-2 flex flex-col">
          <dt>
            <span className="pr-1">📝</span> Description:
          </dt>
          <dd>{description}</dd>
        </div>

        <div className="mb-2 flex flex-col">
          <dt>
            <span className="pr-1">💼</span> Responsibilities:
          </dt>
          <dd>{responsibilities}</dd>
        </div>

        <div className="flex flex-col">
          <dt>
            <span className="pr-1">💻</span>Tools and technologies:{' '}
          </dt>
          <dd>
            <ul className="flex flex-wrap items-center">
              {techStack.map((tech, index) => (
                <li className="mr-1 pb-0" key={`tech_${index.toString()}`}>
                  {tech}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  );
};
