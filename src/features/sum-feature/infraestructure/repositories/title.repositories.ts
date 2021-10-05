import { Title } from "../../domain/models/Title";
import { titleData } from "../data_sources/http/title.data";

export const titleRepository = {
  getTitles: async () => {
    try {
      const titleList = await titleData.getTitlesList();
      // Parse to domain models, where bussines logic can understand the data
      return titleList.map(
        (titleDto): Title => ({
          id: titleDto.id,
          title: titleDto.title,
        })
      );
    } catch (e) {
      // TODO: Devolver tipo error
      return [];
    }
  },
};
