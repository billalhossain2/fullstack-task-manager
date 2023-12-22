import axios from "axios";

const AxiosPublic = axios.create({
    baseURL:'http://localhost:9000'
})

export default AxiosPublic;