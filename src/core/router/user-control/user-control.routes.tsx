import RouteType from "../models/RouteType";
import { routes } from "../routes";

export const userControlRoutes = {
  defaultRoutes: (): RouteType[] => {
    return [routes.index, routes.calculator, routes.error];
  },
  professorRoutes: (): RouteType[] => {
    return [routes.index, routes.calculator, routes.error];
  },
  coordinatorRoutes: (): RouteType[] => {
    return [routes.index, routes.calculator, routes.error];
  },
};
