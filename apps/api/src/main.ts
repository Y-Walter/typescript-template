import { createServer } from "@/server";

async function bootstrap() {
  const app = await createServer();

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(
    `GraphQL Playground is running on: ${await app.getUrl()}/graphql`
  );
}

export const webApp = bootstrap();
