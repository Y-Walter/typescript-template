import { DateScalar } from "@/common/scalars/date.scalar";
import { RecipesResolver } from "@/recipes/recipes.resolver";
import { RecipesService } from "@/recipes/recipes.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar],
})
export class RecipesModule {}
