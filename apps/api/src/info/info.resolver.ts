import { InfoService } from "@/info/info.service";
import { Info } from "@/info/models/info.model";
import { Query, Resolver } from "@nestjs/graphql";

@Resolver(() => Info)
export class InfoResolver {
  constructor(private readonly infoService: InfoService) {}

  @Query(() => Info)
  info(): Info {
    const info = this.infoService.getInfo();
    return info;
  }
}
