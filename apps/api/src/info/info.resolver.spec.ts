import { InfoResolver } from "@/info/info.resolver";
import { InfoService } from "@/info/info.service";

describe("InfoResolver", () => {
  it("API実行者が、サーバ情報のサマリを取得できること", () => {
    // given
    const infoServiceMock: InfoService = {
      getInfo: jest.fn().mockReturnValue({ version: "1.2.3" }),
    };
    const sut = new InfoResolver(infoServiceMock);

    // when
    const act = sut.info();

    // then
    expect(act.version).toBe("1.2.3");
  });
});
