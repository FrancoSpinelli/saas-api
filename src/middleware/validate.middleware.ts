import { ZodObject, ZodRawShape, flattenError } from "zod";

import { NextFunction, Request, Response } from "express";
import { toJSONSchema } from "zod/v4/core";
import { Res } from "../utils/Response";

export const validate =
  (schema: ZodObject<ZodRawShape>) => (req: Request, res: Response, next: NextFunction) => {
    toJSONSchema(schema);

    const result = schema.safeParse(req.body, {
      error: (iss) => {
        if (iss.code === "invalid_type") {
          return `Tipo de dato inválido`;
        }
        if (iss.code === "invalid_format") {
          return `Formato inválido`;
        }
        return iss.message;
      },
    });

    if (!result.success) {
      const formatted = flattenError(result.error);
      const errors = formatted.fieldErrors as unknown;

      return res.status(400).json(new Res(errors, "Error de validación", false));
    }

    req.body = result.data;
    next();
  };
