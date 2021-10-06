import { http } from "../../../../../core/backend/http";
import { config } from "../../../../../core/config/constants";
import { TitleDTO } from "../../dto/TitleDTO";

const titleListRoute = config.baseURL1 + "/todos";

export const titleData = {
  getTitlesList: async (): Promise<TitleDTO[]> => {
    const res = await http.get(titleListRoute);
    if (res.status === 200) {
      return res.data;
    } else {
      // TODO: hacer clase de errores o algo asi
      throw Error("mal");
    }
  },
};
