import { CustomScalar, Scalar } from "@nestjs/graphql";
import { Kind, ValueNode } from "graphql";

@Scalar("Date", () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = "Date custom scalar type";

  parseValue(value: unknown): Date {
    if (typeof value !== "number") {
      throw new Error("DateScalar can only parse numeric values");
    }

    return new Date(value); // value from the client
  }

  serialize(value: unknown): number {
    if (!(value instanceof Date)) {
      throw new Error("DateScalar can only serialize Date values");
    }

    return value.getTime(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind !== Kind.INT) {
      throw new Error("DateScalar can only parse numeric values");
    }

    return new Date(ast.value);
  }
}
