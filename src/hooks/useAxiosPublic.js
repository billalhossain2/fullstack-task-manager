import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manager-server-beta-gilt.vercel.app",
});

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
