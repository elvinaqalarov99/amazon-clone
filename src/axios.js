import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-20f03.cloudfunctions.net/api",
});

export default instance;
