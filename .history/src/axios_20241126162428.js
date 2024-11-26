import axios from "axios";
const instance = axios.create({
  baseURL: "https://crudcrud.com/api/1626cf354b6540388febe76333bda850",
});

export default instance;