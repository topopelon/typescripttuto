import { Result } from "../../../../core/config/result";
import { Title } from "../../domain/models/Title";
import { titleData } from "../data_sources/http/title.data";
import { TitleDTO } from "../dto/TitleDTO";

export const titleRepository = {
  getTitles: async (): Promise<Result<Title[]>> => {
    const res = await titleData.getTitlesList();
    if (res.isError) {
      return { isError: true, error: res.error };
    }
    // Parse to domain models, where bussines logic can understand the data
    try {
      const value = res.value.map((titleDto: TitleDTO): Title => {
        nullCheck(titleDto);
        return {
          id: titleDto.id,
          title: titleDto.title,
        };
      });
      return {
        isError: false,
        value: value,
      };
    } catch (e) {
      return {
        isError: true,
        error: Error("parse error"),
      };
    }
  },
};

// Manually check undefined xd
const nullCheck = (titleDTO: TitleDTO) => {
  if (!titleDTO.id || !titleDTO.title) throw Error();
};
