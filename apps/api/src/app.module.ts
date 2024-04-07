import { AppController } from "@/app.controller";
import { CoreModule } from "@/core/core.module";
import { RecipesModule } from "@/recipes/recipes.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    CoreModule,
    RecipesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      installSubscriptionHandlers: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
