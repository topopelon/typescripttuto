import User from "../models/User";

export const session = {
  // TODO: just mocked the user session, you have to do it by yourself
  getUser: (): User => {
    return {
      name: "Jorge",
      privileges: "professor",
    };
  },
};
