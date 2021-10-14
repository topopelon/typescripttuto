type ResultSuccess<T> = { isError: false; value: T };

type ResultError = { isError: true; error: Error };

type Result<T> = ResultSuccess<T> | ResultError;

export type { Result, ResultError, ResultSuccess };
