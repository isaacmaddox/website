import { ContactForm } from "@/components/home/contact-form";
import "@/css/components/contact-block.css";

export function ContactBlock() {
   return (
      <section className="contact container lg">
         <h2>Get in Touch</h2>
         <p className="text-lg">
            You can contact me at <a href="mailto:isaac@isaacmaddox.dev">isaac@isaacmaddox.dev</a>, or by filling out
            the form below. I look forward to talking with you!
         </p>
         <ContactForm />
      </section>
   );
}
