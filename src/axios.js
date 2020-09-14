import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-89041.cloudfunctions.net/api", // the API (cloud function) URL
  // http://localhost:5001/clone-89041/us-central1/api
  // https://us-central1-clone-89041.cloudfunctions.net/api
});

export default instance;
