import { INestApplication } from "@nestjs/common";
import request, { Response } from "supertest";

export const requestGraphQL = async (
  app: INestApplication,
  schema: string
): Promise<Response> => {
  return request(app.getHttpServer())
    .post("/graphql")
    .send({ query: schema })
    .set("Accept", "application/json");
};
