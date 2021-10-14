interface ErrorC {
  message: String;
}

class ErrorHttp500 implements ErrorC {
  message = "pepe";
}

export { ErrorHttp500 };
export type { ErrorC };
