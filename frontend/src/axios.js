import axios from "axios";

const instance = axios.create({
    baseURL: "https://mern-ecommerce-bas.onrender.com",
});

export default instance;
