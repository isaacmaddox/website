declare namespace NodeJS {
   interface ProcessEnv {
      RESEND_API_KEY: string;
      EMAIL: string;
      CONF_FROM_EMAIL: string;
      WEBHOOK_SECRET: string;
   }
}
