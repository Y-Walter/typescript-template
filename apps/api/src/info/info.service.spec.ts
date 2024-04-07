import { InfoService } from "@/info/info.service";
import packageJson from "^/package.json";

describe("InfoService", () => {
  it("package.jsonのバージョン情報を返すこと", () => {
    // given
    const sut = new InfoService();

    // when
    const act = sut.getInfo();

    // then
    expect(act.version).toBe(packageJson.version);
  });
});
