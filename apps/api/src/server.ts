import { AppModule } from "@/app.module";
import { NestApplication, NestFactory } from "@nestjs/core";

export const createServer = async (): Promise<NestApplication> => {
  const app: NestApplication = await NestFactory.create(AppModule);

  // Uncomment these lines to use the Redis adapter:
  // const redisIoAdapter = new RedisIoAdapter(app);
  // await redisIoAdapter.connectToRedis();
  // app.useWebSocketAdapter(redisIoAdapter);
  return app;
};
