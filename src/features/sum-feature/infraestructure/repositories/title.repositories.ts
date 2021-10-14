import { Result } from "../../../../core/config/result";
import { Title } from "../../domain/models/Title";
import { titleData } from "../data_sources/http/title.data";

export const titleRepository = {
  getTitles: async (): Promise<Result<Title[]>> => {
    const res = await titleData.getTitlesList();
    if (res.isError) {
      return { isError: true, error: res.error };
    }
    // Parse to domain models, where bussines logic can understand the data
    return {
      isError: false,
      value: res.value.map(
        (titleDto): Title => ({
          id: titleDto.id,
          title: titleDto.title,
        })
      ),
    };
  },
};
