import { titleService } from "../../../../../features/sum-feature/domain/services/Title.service";
import { titleData } from "../../../../../features/sum-feature/infraestructure/data_sources/http/title.data";
import { titleRepository } from "../../../../../features/sum-feature/infraestructure/repositories/title.repositories";

describe("Title service tests", () => {
  test("should get a [Title] model from title service", async () => {
    // Given
    jest.spyOn(titleRepository, "getTitles").mockReturnValue(
      Promise.resolve({
        isError: false,
        value: [
          {
            id: 32,
            title: "",
          },
        ],
      })
    );
    // When
    const titles = await titleService.getTitles();
    // Then
    if (titles.isError) {
      throw Error();
    }
    expect(titleRepository.getTitles).toBeCalled();
    expect(titles.value.sort()).toEqual([{ id: 32, title: "" }].sort());
  });

  test("should get an [Error] from title service", async () => {
    // Given
    jest
      .spyOn(titleRepository, "getTitles")
      .mockReturnValue(
        Promise.resolve({ isError: true, error: Error("title error") })
      );
    // When
    const titles = await titleService.getTitles();
    // Then
    if (!titles.isError) {
      throw Error();
    }
    expect(titleRepository.getTitles).toBeCalled();
    expect(titles.error).toEqual(Error("title error"));
  });
});

export {};
