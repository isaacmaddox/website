import { Button } from "@/components/button";
import "@/css/components/contact-block.css";

export function ContactBlock() {
   return (
      <section className="contact container lg">
         <h2>Get in Touch</h2>
         <p className="text-lg">
            You can contact me at <a href="mailto:isaac@isaacmaddox.dev">isaac@isaacmaddox.dev</a>, or by filling out
            the form below. I look forward to talking with you!
         </p>
         <form action="" method="post" className="form-two-col">
            <div className="form-field">
               <label htmlFor="email">Your Email</label>
               <input type="email" name="email" id="email" />
            </div>
            <div className="form-field">
               <label htmlFor="topic">Topic</label>
               <select name="topic" id="topic">
                  <option value="idea">Project Idea</option>
                  <option value="opportunity">Opportunity</option>
                  <option value="general">General Message</option>
                  <option value="other">Other</option>
               </select>
            </div>
            <div className="form-field full">
               <label htmlFor="message">Message</label>
               <textarea name="message" id="message"></textarea>
            </div>
            <div className="form-field full actions">
               <Button type="reset">Cancel</Button>
               <Button type="submit" variant="primary">
                  Send Message
                  <SendIcon />
               </Button>
            </div>
         </form>
      </section>
   );
}

function SendIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
         <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
      </svg>
   );
}
