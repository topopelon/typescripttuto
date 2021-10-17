import { StringMatcher } from "cypress/types/net-stubbing";

//TODO: complete
export const mock = {
  get: (
    url: StringMatcher,
    response?: Object,
    query?: Record<string, string | number>
  ) => {
    return cy.intercept(
      {
        url: url,
        method: "GET",
      },
      (req) => {
        req.reply(response);
        req.query = query ?? {};
      }
    );
  },
};
