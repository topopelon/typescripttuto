import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../../../../../../core/config/constants";
import { titleData } from "../../../../../../features/sum-feature/infraestructure/data_sources/http/title.data";

describe("title http api tests", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test("should get remote data and transform to [TitleDTO[]]", async () => {
    // Given
    mock.onGet(config.baseURL1 + "/todos").reply(200, [{}]);
    // When
    const res = await titleData.getTitlesList();
    // Then
    if (res.isError) {
      throw Error();
    }
    expect(res.value.sort()).toEqual([{}]);
  });

  test("should fail when trying to get remote data - Network Error", async () => {
    // Given
    mock.onGet(config.baseURL1 + "/todos").networkErrorOnce();
    // When
    const res = await titleData.getTitlesList();
    // Then
    if (!res.isError) {
      throw Error();
    }
    expect(res.error).toEqual(Error());
  });

  test("should fail when traying to get remote data - timeout", async () => {
    // Given
    mock.onGet(config.baseURL1 + "/todos").timeoutOnce();
    // When
    const res = await titleData.getTitlesList();
    // Then
    if (!res.isError) {
      throw Error();
    }
    expect(res.error).toEqual(Error());
  });
});

export {};
