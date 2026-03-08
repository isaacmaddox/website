export async function tryCatch<T>(
  promise: Promise<T>
): Promise<SuccessResult<T> | ErrorResult> {
  try {
    const result = await promise;
    return [result, null];
  } catch (e) {
    console.error(e);

    if (isRedirectError(e)) {
      throw e;
    }

    if (
      e &&
      typeof e === "object" &&
      "message" in e &&
      typeof e.message === "string"
    ) {
      return [
        null,
        {
          message: e.message,
          cause: e instanceof Error ? e : new Error("An error occurred"),
        },
      ];
    }

    return [
      null,
      {
        message: "An error occurred",
        cause: new Error("An error occurred"),
      },
    ];
  }
}