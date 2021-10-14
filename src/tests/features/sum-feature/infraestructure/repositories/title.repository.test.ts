import { titleData } from "../../../../../features/sum-feature/infraestructure/data_sources/http/title.data";
import { titleRepository } from "../../../../../features/sum-feature/infraestructure/repositories/title.repositories";

describe("Title repository tests", () => {
  test("should get a [Title] model from title repo", async () => {
    // Given
    jest.spyOn(titleData, "getTitlesList").mockReturnValue(
      Promise.resolve({
        isError: false,
        value: [
          {
            userId: 23,
            id: 32,
            title: "",
            completed: true,
          },
        ],
      })
    );
    // When
    const titles = await titleRepository.getTitles();
    // Then
    if (titles.isError) {
      throw Error();
    }
    expect(titleData.getTitlesList).toBeCalled();
    expect(titles.value.sort()).toEqual([{ id: 32, title: "" }].sort());
  });

  test("should get an [Error] from title repo", async () => {
    // Given
    jest
      .spyOn(titleData, "getTitlesList")
      .mockReturnValue(
        Promise.resolve({ isError: true, error: Error("title error") })
      );
    // When
    const titles = await titleRepository.getTitles();
    // Then
    if (!titles.isError) {
      throw Error();
    }
    expect(titleData.getTitlesList).toBeCalled();
    expect(titles.error).toEqual(Error("title error"));
  });
});

export {};
