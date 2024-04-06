import { Controller, Get } from "@nestjs/common";
import * as packageJson from "^/package.json";

@Controller("/")
export class AppController {
  constructor() {}

  @Get("/version")
  getVersion(): GetVersionRes {
    return {
      version: packageJson.version,
    };
  }
}

interface GetVersionRes {
  version: string;
}
