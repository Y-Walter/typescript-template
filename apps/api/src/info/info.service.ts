import { Info } from "@/info/models/info.model";
import { Injectable } from "@nestjs/common";
import packageJson from "^/package.json";

@Injectable()
export class InfoService {
  getInfo(): Info {
    return {
      version: packageJson.version,
    };
  }
}
