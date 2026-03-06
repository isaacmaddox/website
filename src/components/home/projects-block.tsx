import { Button } from "@/components/button";
import { Card, CardContainer } from "@/components/card-container";
import { OpenInNewIcon } from "@/components/icons";

export function ProjectsBlock() {
   return (
      <CardContainer
         id="projects"
         title="Projects"
         subtitle="I have completed a number of projects, both personal and for school. Here are my three projects that I am most proud of.">
         <Card
            title="FALAFEL"
            level="3"
            text="FALAFEL is a project that I developed alongside 3 classmates for my Capstone course at UWF. It solves a problem that my professor faced frequently."
            style="count"
            ctas={[
               <Button.Link
                  href="https://falafel.isaacmaddox.dev"
                  target="_blank"
                  key={1}
                  title="Visit FALAFEL in your browser">
                  View Project
                  <OpenInNewIcon />
               </Button.Link>,
               <Button.Link variant="outline" href="#" key={2}>
                  Read More
               </Button.Link>,
            ]}
         />
         <Card
            title="TaskList"
            level="3"
            text="TaskList is a project that I developed to help a local law agency overcome an obstacle. The law office still uses this program in their day-to-day."
            style="count"
            ctas={[
               <Button.Link
                  href="https://tasklist.isaacmaddox.dev"
                  target="_blank"
                  key={1}
                  title="Visit TaskList in your browser">
                  View Project
                  <OpenInNewIcon />
               </Button.Link>,
               <Button.Link variant="outline" href="#" key={2}>
                  Read More
               </Button.Link>,
            ]}
         />
         <Card
            title="Barricade"
            level="3"
            text="Barricade Lawn and Landscape is a landscaping business in south Florida. They wanted a website and a way to receive quote requests."
            style="count"
            ctas={[
               <Button.Link
                  href="https://barricadelawnandlandscape.com"
                  target="_blank"
                  key={1}
                  title="Visit Barricade Lawn and Landscape in your browser">
                  View Project
                  <OpenInNewIcon />
               </Button.Link>,
               <Button.Link variant="outline" href="#" key={2}>
                  Read More
               </Button.Link>,
            ]}
         />
      </CardContainer>
   );
}
