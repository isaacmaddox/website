import { resend } from "@/lib/resend";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
   const verifyRequest = request.clone();

   try {
      const payload = await verifyRequest.text();

      resend.webhooks.verify({
         payload,
         headers: {
            id: verifyRequest.headers.get("svix-id")!,
            timestamp: verifyRequest.headers.get("svix-timestamp")!,
            signature: verifyRequest.headers.get("svix-signature")!,
         },
         webhookSecret: process.env.WEBHOOK_SECRET,
      });
   } catch (error) {
      console.error(error);
      return new Response("Invalid webhook", { status: 400 });
   }

   const event = await request.json();

   if (event.type === "email.received") {
      const { data, error } = await resend.emails.receiving.forward({
         emailId: event.data.email_id,
         to: process.env.EMAIL,
         from: process.env.CONF_FROM_EMAIL,
      });

      if (error) {
         return new Response(`Error ${error.message}`, { status: 500 });
      }

      return Response.json(data);
   }

   return Response.json({});
};
