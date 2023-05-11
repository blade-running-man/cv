import { BoxSection } from '@/components/BoxSection/BoxSection';
import {
  DescriptionList,
  DescriptionListItem,
} from '@/components/DescriptionList';
import { Education } from '@/components/Education';
import { EducationCourses } from '@/components/EducationCourses';
import { Experience } from '@/components/Experience';
import {
  CERTIFICATES_DATA,
  CONTACT_DATA,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PERSONAL_DATA,
  SKILLS_DATA,
} from '@/content';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="" description="" />}>
      <BoxSection title="Abstract">
        <DescriptionList>
          <DescriptionListItem title="Name">
            <span>
              {PERSONAL_DATA.firstName} {PERSONAL_DATA.lastName}
            </span>
          </DescriptionListItem>
          <DescriptionListItem title="Date of Birth">
            <span>{PERSONAL_DATA.dob}</span>
          </DescriptionListItem>
          <DescriptionListItem title="Citizenship">
            <span>{PERSONAL_DATA.citizenship}</span>
          </DescriptionListItem>
          <DescriptionListItem title="Citizenship">
            <ul className="flex flex-wrap items-center">
              {PERSONAL_DATA.languages.map((language, index) => (
                <li className="mr-1" key={`language_${index.toString()}`}>
                  {language}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
          <DescriptionListItem title="Status">
            <span>{PERSONAL_DATA.status}</span>
          </DescriptionListItem>
        </DescriptionList>
        <p className="mt-5">
          I am a highly experienced Senior Software Engineer with over 8 years
          of expertise in building web and mobile applications using
          technologies such as React, React Native, Vue, and Node.js. I have a
          strong background in delivering projects related to business corporate
          networks, event management systems, travel mobile apps, sports
          applications, and data visualization systems. My in-depth knowledge of
          web application design and development, combined with my skills as an
          architect and mentor, make me a valuable asset to any team. I have a
          proven ability to develop innovative and effective solutions, and I
          communicate effectively with both technical and non-technical
          stakeholders.
        </p>
      </BoxSection>
      <BoxSection title="Contacts">
        <DescriptionList>
          <DescriptionListItem title="Email">
            <a href={`mailto:${CONTACT_DATA.email}`}>{CONTACT_DATA.email}</a>
          </DescriptionListItem>
          <DescriptionListItem title="GitHub">
            <a href={CONTACT_DATA.gitHubProfileUrl}>
              {CONTACT_DATA.gitHubProfileUrl}
            </a>
          </DescriptionListItem>
          <DescriptionListItem title="Phone number">
            <a href={`tel:${CONTACT_DATA.phoneNumber}`}>
              {CONTACT_DATA.phoneNumber}
            </a>
          </DescriptionListItem>
          <DescriptionListItem title="LinkedIn">
            <a href={CONTACT_DATA.linkedInUrl}>{CONTACT_DATA.linkedInUrl}</a>
          </DescriptionListItem>
          <DescriptionListItem title="Twitter">
            {CONTACT_DATA.twitter}
          </DescriptionListItem>
          <DescriptionListItem title="Site">
            <a href={CONTACT_DATA.site}>{CONTACT_DATA.site}</a>
          </DescriptionListItem>
        </DescriptionList>
      </BoxSection>
      <BoxSection title="Frameworks/Tools">
        <DescriptionList>
          <DescriptionListItem title="Scripting">
            <ul className="flex flex-wrap items-center">
              {SKILLS_DATA.scripting.map((item, index) => (
                <li className="mr-1" key={`scripting_${index.toString()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
          <DescriptionListItem title="Frontend">
            <ul className="flex flex-wrap items-center">
              {SKILLS_DATA.frontend.map((item, index) => (
                <li className="mr-1" key={`frontend_${index.toString()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
          <DescriptionListItem title="Backend">
            <ul className="flex flex-wrap items-center">
              {SKILLS_DATA.backend.map((item, index) => (
                <li className="mr-1" key={`backend_${index.toString()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
          <DescriptionListItem title="Styling">
            <ul className="flex flex-wrap items-center">
              {SKILLS_DATA.styles.map((item, index) => (
                <li className="mr-1" key={`styling_${index.toString()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
          <DescriptionListItem title="Testing">
            <ul className="flex flex-wrap items-center">
              {SKILLS_DATA.testing.map((item, index) => (
                <li className="mr-1" key={`testing_${index.toString()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
          <DescriptionListItem title="VCS">
            <ul className="flex flex-wrap items-center">
              {SKILLS_DATA.vcs.map((item, index) => (
                <li className="mr-1" key={`vcs${index.toString()}`}>
                  {item}
                </li>
              ))}
            </ul>
          </DescriptionListItem>
        </DescriptionList>
      </BoxSection>
      <BoxSection title="Expereience">
        <Experience data={EXPERIENCE_DATA} />
      </BoxSection>
      <BoxSection title="Education">
        <Education data={EDUCATION_DATA} />
      </BoxSection>
      <BoxSection title="Licenses & certifications">
        <EducationCourses data={CERTIFICATES_DATA} />
      </BoxSection>
    </Main>
  );
};

export default Index;
