type FormErrorResult<TSchema extends z.ZodObject> = {
   success: false;
   data?: never;
   fields?: z.input<TSchema>;
   fieldErrors?: z.core.$ZodFlattenedError<z.infer<TSchema>>["fieldErrors"];
   error?: {
      message: string;
      cause: Error;
   };
};

type FormSuccessResult<TSchema extends z.ZodObject, TData> = {
   success: true;
   data: TData;
   fields?: z.input<TSchema>;
   fieldErrors?: never;
   error?: never;
};

type FormActionFn<TSchema extends z.ZodObject, TData> = (data: z.output<TSchema>) => Promise<TData>;
type FormActionHandler<TSchema extends z.ZodObject, TData> = (
   _: unknown,
   formData: FormData,
) => Promise<FormErrorResult<TSchema> | FormSuccessResult<TSchema, TData>>;

export function formAction<TSchema extends z.ZodObject, TData>(
   schema: TSchema,
   fn: FormActionFn<TSchema, TData>,
): FormActionHandler<TSchema, TData> {
   return async (_: unknown, formData: FormData) => {
      const fields = Object.fromEntries(formData.entries()) as z.input<TSchema>;

      try {
         const { data, error } = safeParse(schema, fields);
         if (error) {
            return {
               success: false,
               fieldErrors: z.flattenError(error).fieldErrors,
               fields,
            };
         }

         const result = await fn(data);

         return {
            success: true,
            data: result,
            fields,
         };
      } catch (e) {
         if (isRedirectError(e)) {
            throw e;
         }

         console.error(e);

         let message: string | null = null;

         // Get the "message" property of the Error, type-safe
         if (e && typeof e === "object" && "message" in e && typeof e["message"] === "string") {
            message = e["message"];
         }

         return {
            success: false,
            fields,
            error: {
               message: message || "An error occurred.",
               cause: e instanceof Error ? e : new Error("An error occurred"),
            },
         };
      }
   };
}
