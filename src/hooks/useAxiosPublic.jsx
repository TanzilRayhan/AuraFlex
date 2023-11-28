import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://aura-flex-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;