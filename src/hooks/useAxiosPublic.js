import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'http://localhost:9000'
})

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic