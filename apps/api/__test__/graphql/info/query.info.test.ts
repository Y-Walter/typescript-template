import { INestApplication } from "@nestjs/common";
import packageJson from "^/package.json";
import { initTestingApp } from "^test/utils/nestApplication";
import { requestGraphQL } from "^test/utils/supertest";

describe("query info", () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await initTestingApp();
  });

  afterAll(async () => {
    await app.close();
  });

  it("API実行者が、サーバ情報のサマリを取得できること", async () => {
    // given
    const schema = `
      query {
        info {
          version
        }
      }
    `;

    // when
    const response = await requestGraphQL(app, schema);

    // then
    expect(response.status).toBe(200);
    expect(response.body.data.info.version).toBe(packageJson.version);
  });
});
