/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod";

import { ZodError } from "zod";

function formatPath(path?: Array<string | number | symbol>): string {
  if (!path || path.length === 0)
    return "";
  return path
    .map((seg, i) => {
      if (typeof seg === "number")
        return `[${seg}]`;
      // handles string or symbol safely
      const s = String(seg);
      return i === 0 ? s : `.${s}`;
    })
    .join("");
}

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";
      error.issues.forEach((issue) => {
        message += `${formatPath(issue.path)}\n`;
      });
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      console.error(error);
    }
  }
}
