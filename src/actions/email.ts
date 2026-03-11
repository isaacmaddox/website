"use server";

import { Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactEmailFormSchema = z.object({
   email: z.email("Please enter a valid email"),
   topic: z.enum(["idea", "opportunity", "general", "other"], "Please select a topic"),
   message: z.string().trim().min(1, "Please type a message"),
});

type SendContactFormFields = {
   email?: string;
   topic?: "idea" | "opportunity" | "general" | "other";
   message?: string;
};

type SendContactEmailReturn =
   | {
        success: false;
        fields: SendContactFormFields;
        errors:
           | {
                [Key in keyof z.infer<typeof contactEmailFormSchema>]?:
                   | {
                        errors: string[];
                     }
                   | undefined;
             }
           | undefined;
        emails?: never;
     }
   | {
        success: true;
        fields: SendContactFormFields;
        errors?: never;
        emails: {
           message: boolean;
           confirmation: boolean;
        };
     };

export async function sendContactEmail(_: unknown, formData: FormData): Promise<SendContactEmailReturn> {
   const data = Object.fromEntries(formData.entries());
   const cleanedData = contactEmailFormSchema.safeParse(data);

   if (cleanedData.error) {
      return {
         fields: data,
         success: false,
         errors: z.treeifyError(cleanedData.error).properties,
      };
   }

   const { email, topic, message } = cleanedData.data;

   try {
      const { error } = await resend.emails.send({
         from: `Contact Form <contact@mail.isaacmaddox.dev>`,
         replyTo: email,
         to: [process.env.EMAIL],
         subject: topic,
         text: message,
      });

      if (error) {
         throw new Error(error.message, {
            cause: error,
         });
      }

      const confSendData = await resend.emails.send({
         from: `Isaac Maddox <${process.env.CONF_FROM_EMAIL}>`,
         to: [email],
         subject: "Thank you for reaching out",
         text: "Thank you for filling out my contact form. I will reply as soon as I am able to.",
      });

      return {
         success: true,
         fields: data,
         emails: {
            message: true,
            confirmation: confSendData.error === null,
         },
      };
   } catch (error) {
      console.error(error);
      return {
         success: false,
         fields: data,
         errors: undefined,
      };
   }
}
