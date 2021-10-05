import Number from "../models/Number";

export const sumService = {
  sum: (a: Number, b: Number): Number => {
    return {
      a: a.a + b.a,
      name: "res: " + a.name + " + " + b.name + " = ",
    };
  },

  res: (a: Number, b: Number): Number => {
    return {
      a: a.a - b.a,
      name: "res: " + a.name + " - " + b.name + " = ",
    };
  },
};
