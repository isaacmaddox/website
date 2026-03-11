import {
   Body,
   Column,
   Container,
   Font,
   Head,
   Heading,
   Hr,
   Html,
   Img,
   Link,
   Preview,
   Row,
   Section,
} from "@react-email/components";
import { CSSProperties } from "react";

interface ContactConfirmationEmailProps {
   message: string;
   topic: string;
}

export function ContactConfirmationEmail({ message, topic }: ContactConfirmationEmailProps) {
   return (
      <Html style={{ backgroundColor: "#0c0c0c", color: "white" }}>
         <Head>
            <Font
               fontFamily="Playfair Display"
               fallbackFontFamily="Georgia"
               webFont={{
                  url: "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2",
                  format: "woff2",
               }}
               fontWeight={600}
               fontStyle="normal"
            />
            <Font
               fontFamily="Source Serif 4"
               fallbackFontFamily="Georgia"
               webFont={{
                  url: "https://fonts.gstatic.com/s/sourceserif4/v14/vEFI2_tTDB4M7-auWDN0ahZJW1gb8tc.woff2",
                  format: "woff2",
               }}
               fontWeight={400}
               fontStyle="normal"
            />
         </Head>
         <Body style={{ backgroundColor: "#0c0c0c", color: "white", paddingBottom: "64px" }}>
            <Preview>I have received your message and will get back to you as soon as possible.</Preview>
            <Section style={{ marginTop: "40px", marginBottom: "16px", paddingLeft: "16px", paddingRight: "16px" }}>
               <Row style={{ marginBottom: "8px" }}>
                  <Column align="center">
                     <Img alt="Isaac Maddox Logo" height={60} src="https://isaacmaddox.dev/icon.png" />
                  </Column>
               </Row>
               <Row>
                  <Column align="center">
                     <table>
                        <tr>
                           <td>
                              <Link href="https://isaacmaddox.dev" style={navLink}>
                                 View Site
                              </Link>
                           </td>
                           <td>
                              <Link href="https://github.com/isaacmaddox" style={navLink}>
                                 GitHub
                              </Link>
                           </td>
                           <td>
                              <Link href="https://linkedin.com/in/isaac-maddox" style={navLink}>
                                 LinkedIn
                              </Link>
                           </td>
                        </tr>
                     </table>
                  </Column>
               </Row>
            </Section>
            <Container style={{ maxWidth: "500px" }}>
               <Heading as="h1" style={heading}>
                  Thank you for contacting me!
               </Heading>
               <p style={paragraph}>
                  I received your message that you sent through my contact form. Thank you for reaching out to me. I
                  will get in touch as soon as I am able to!
               </p>
               <Hr style={rule} />
               <Heading as="h2" style={heading}>
                  Your Message
               </Heading>
               <p style={largeParagraph}>Topic: {topic}</p>
               <div style={messageContainer}>{message}</div>
            </Container>
         </Body>
      </Html>
   );
}

const heading = {
   fontFamily: "Playfair Display, Georgia",
} as CSSProperties;

const paragraph = {
   fontFamily: "Source Serif 4, Georgia",
   color: "#a6a6a6",
   lineHeight: "170%",
   fontSize: "16px",
   whiteSpace: "pre-wrap",
} as CSSProperties;

const largeParagraph = {
   ...paragraph,
   fontSize: "18px",
} as CSSProperties;

const navLink = {
   ...paragraph,
   textDecoration: "underline",
   paddingLeft: "8px",
   paddingRight: "8px",
   textUnderlineOffset: "4px",
} as CSSProperties;

const rule = {
   borderColor: "#333",
} as CSSProperties;

const messageContainer = {
   ...paragraph,
   padding: "16px",
   borderRadius: "4px",
   border: "1px solid #333",
   backgroundColor: "#0f0f0f",
} as CSSProperties;
