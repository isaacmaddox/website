export function HomePageSkills({ skills }: { skills: string[] }) {
   return (
      <section aria-labelledby="skills">
         <h2 id="skills" className="typo-h2 mb-2">
            My Skills
         </h2>
         <p className="paragraph">
            I focus primarily on web development and relevant technologies, but I enjoy learning more about other areas
            of computing and find them all equally fascinating. I have had the privilege to work on teams doing web
            development work and low-level computing and communication, giving me a wide range of experience.
         </p>
         <ul role="list" className="flex flex-wrap gap-x-1 gap-y-2 mt-3">
            {skills.map((skill, idx) => {
               return (
                  <li
                     key={idx}
                     className="p-3 cursor-default paragraph text-sm rounded-full bg-gray-100 dark:bg-gray-800 leading-none">
                     {skill}
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
