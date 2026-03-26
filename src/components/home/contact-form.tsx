"use client";

import { sendContactEmail } from "@/actions/email";
import { Button } from "@/components/button";
import { SendIcon } from "@/components/icons";
import { KeyboardEvent, useActionState } from "react";

export function ContactForm() {
   const [formState, formAction, isFormPending] = useActionState(sendContactEmail, null);

   if (formState?.success === true) {
      return (
         <div className="contact_confirmation container sm">
            <h3>Thank you for reaching out to me!</h3>
            <p>
               Your email has been sent to my inbox.
               {formState.emails.confirmation === true && " Check your inbox for a confirmation email."}
            </p>
         </div>
      );
   }

   function handleKeydown(event: KeyboardEvent<HTMLFormElement>) {
      if (event.key === "Enter" && ((event.target as HTMLElement).closest("input") || event.ctrlKey)) {
         event.currentTarget.requestSubmit();
      }
   }

   return (
      <form action={formAction} className="form-two-col" onKeyDown={handleKeydown}>
         <div className="form-field">
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" defaultValue={formState?.fields.email} />
            {formState?.errors?.email && <p className="text-sm text-error">{formState.errors.email.errors[0]}</p>}
         </div>
         <div className="form-field">
            <label htmlFor="topic">Topic</label>
            <select name="topic" id="topic" defaultValue={formState?.fields.topic || "na"}>
               <option value="na" disabled>
                  Select One
               </option>
               <option value="idea">Project Idea</option>
               <option value="opportunity">Opportunity</option>
               <option value="general">General Message</option>
               <option value="other">Other</option>
            </select>
            {formState?.errors?.topic && <p className="text-sm text-error">{formState.errors.topic.errors[0]}</p>}
         </div>
         <div className="form-field full">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" defaultValue={formState?.fields.message}></textarea>
            {formState?.errors?.message && <p className="text-sm text-error">{formState.errors.message.errors[0]}</p>}
         </div>
         <div className="form-field full actions">
            <Button type="reset" disabled={isFormPending}>
               Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isFormPending}>
               {!isFormPending ? "Send Message" : "Sending..."}
               <SendIcon />
            </Button>
         </div>
         {formState?.success === false && !formState.errors && (
            <p className="text-error">Something went wrong while sending your email. Please email me directly.</p>
         )}
      </form>
   );
}
