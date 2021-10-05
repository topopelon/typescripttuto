import { titleRepository } from "../../infraestructure/repositories/title.repositories";

export const titleService = {
  getTitles: async () => {
    const titleList = await titleRepository.getTitles();
    // Proccess data

    // return it to component
    console.log(titleList);
    return titleList;
  },
};
