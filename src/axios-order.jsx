import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-builder-app-40f9e.firebaseio.com/",
});

export default instance;
