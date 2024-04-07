import { CoreModule } from "@/core/core.module";
import { InfoModule } from "@/info/info.module";
import { RecipesModule } from "@/recipes/recipes.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      installSubscriptionHandlers: true,
      playground: true,
    }),
    InfoModule,
    RecipesModule,
  ],
})
export class AppModule {}
