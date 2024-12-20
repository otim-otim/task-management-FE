import axios from "axios";

const customAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});


export default customAxios