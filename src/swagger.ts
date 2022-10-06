import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Request, Response } from "express";

//Basic Meta Informations about API
const options = {
    definition: {
      openapi: "3.0.0",
      info: { title: "CRUD Teco", version: "1.0.0" },
    },
    apis: ["src/server/routes/user.routes.ts"],
  };

//Docs in JSON format
const swaggerSpec=swaggerJSDoc(options)

// Function to setup our docs
export const swaggerDocs = (app:any, port:any) => {
    // Route-Handler to visit our docs
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Make our docs in JSON format available
    app.get("/api/v1/docs.json", (req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
    console.log(
      `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
  };
  