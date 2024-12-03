import express from "express";
import type { Request, Response, Router } from "express";
import swaggerUi from "swagger-ui-express";
import { generateOpenAPIDocument } from "~/api-docs/openApiDocumentGenerator";

export const openAPIRouter: Router = express.Router();
const openAPIDocument = generateOpenAPIDocument();

openAPIRouter.get("/swagger.json", (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(openAPIDocument);
});

openAPIRouter.use("/", swaggerUi.serve, swaggerUi.setup(openAPIDocument));
