import { QueryClient, useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
export const queryClient = new QueryClient();


const useLoadAllTasksByEmail = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {isLoading, error, data, refetch} = useQuery({
    queryKey:["GET_ALL_TASKS", user?.email],
    queryFn:async()=>{
       const res = await axiosPublic.get(`/tasks?email=${user?.email}`)
       return res.data;
    }
  })

  return {isLoading, error, data, refetch};
}

export default useLoadAllTasksByEmail