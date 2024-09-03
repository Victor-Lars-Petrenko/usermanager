import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsersRequest = async () => {
  const data = await instance.get(`/users`);
  return data;
};
