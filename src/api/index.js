import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user_info")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user_info")).token
    }`;
  }

  return req;
});

// const api_base = "http://localhost:5000";

// export const signIn = (data) => {
//   return axios.post(api_base + "/users/signin", data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${
//         JSON.parse(localStorage.getItem("user_info")).token
//       }`,
//     },
//   });
// };

// export const signUp = (data) => {
//   return axios.post(api_base + "/users/signup", data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${
//         JSON.parse(localStorage.getItem("user_info")).token
//       }`,
//     },
//   });
// };

export const signIn = (data) => API.post("/users/signin", data);

export const signUp = (data) => API.post("/users/signup", data);
