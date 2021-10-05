import User from "../../../features/auth/domain/models/User";
import { userControlRoutes } from "./user-control.routes";

export const routerManager = (user?: User) => {
  if (user) {
    switch (user.privileges) {
      case "coordinator":
        return userControlRoutes.coordinatorRoutes();
      case "professor":
        return userControlRoutes.professorRoutes();
    }
  }
  return userControlRoutes.defaultRoutes();
};
