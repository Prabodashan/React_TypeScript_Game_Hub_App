import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0dc28fd10e14634a2730b8e28ad33ca",
  },
});
