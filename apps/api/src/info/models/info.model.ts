import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "info " })
export class Info {
  @Field()
  version!: string;
}
