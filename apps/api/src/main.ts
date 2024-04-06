import { createServer } from "@/server";

async function bootstrap() {
  const app = await createServer();

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

export const webApp = bootstrap();
