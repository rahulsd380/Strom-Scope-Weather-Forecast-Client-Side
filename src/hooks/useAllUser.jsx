import { useQuery } from "@tanstack/react-query";
import useAxiosClient from "./useAxiosClient";


const useAllUser = () => {
    const axiosUser = useAxiosClient();
    const {refetch, isPending:isLoading, data: allUser = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosUser.get('/users');
            return res.data;
        }
    })
    return [allUser, isLoading, refetch];
};

export default useAllUser;