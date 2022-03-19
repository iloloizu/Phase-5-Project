import axios from "axios";

export default axios.create({
  baseURL: "/sneakers",
  headers: {
    "Content-type": "application/json"
  }
});