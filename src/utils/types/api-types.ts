export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export interface IUser {
  email: string;
  username: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
}

export interface IResetPassword {
  password: string;
  token: string;
}

export interface IRefreshToken {
  token: string;
}

export interface IUpdateuser extends IUser {
  password?: string | null;
}

export interface IRefreshData {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  message?: string;
}

export interface IOptions {
  method?: string;
  body?: string;
  headers?: { "Content-Type": string; Authorization?: string };
}

export interface IRefreshOptions {
  method: string;
  body?: string;
  headers: { "Content-Type": string; Authorization: string | undefined };
}
