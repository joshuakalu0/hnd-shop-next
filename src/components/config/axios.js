import axios from "axios";

export const apiInstance = axios.create({
  // baseURL: "https://realprjbend.vercel.app/",
  baseURL: "http://127.0.0.1:8000/",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
