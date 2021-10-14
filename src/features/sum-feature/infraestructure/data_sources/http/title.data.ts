import { http } from "../../../../../core/backend/http";
import { config } from "../../../../../core/config/constants";
import { Result } from "../../../../../core/config/result";
import { TitleDTO } from "../../dto/TitleDTO";

const titleListRoute = config.baseURL1 + "/todos";

export const titleData = {
  getTitlesList: async (): Promise<Result<TitleDTO[]>> => {
    try {
      const res = await http.get(titleListRoute);
      if (res.status === 200) {
        return { isError: false, value: res.data };
      } else {
        // TODO: hacer clase de errores o algo asi
        return { isError: true, error: new Error("Pepe") };
      }
    } catch (e) {
      return { isError: true, error: new Error() };
    }
  },
};
