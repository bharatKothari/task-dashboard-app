import axios from "axios";

export const myUri = "http://localhost:5000/";

const instance = axios.create({
  baseURL: myUri,
  withCredentials: false,
});

export default instance;