import axios from "axios";


const axiosUser = axios.create({
    baseURL: 'https://strom-scope-server-side.vercel.app'
})

const useAxiosClient = () => {
    return axiosUser;
};

export default useAxiosClient;