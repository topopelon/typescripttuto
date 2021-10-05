import axios from "axios";
import options from "../config/axios.config";

//
const get = async (url: string) => {
  const response = await axios.get(url, options);
  return response;
};

const post = async (url: string, body: any) => {
  const response = await axios.post(url, body, options);
  return response;
};

const put = async (url: string, body: any) => {
  const response = await axios.put(url, body, options);
  return response;
};

const _delete = async (url: string) => {
  const response = await axios.delete(url, options);
  return response;
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
