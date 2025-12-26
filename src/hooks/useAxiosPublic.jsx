import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://final-project-bistro-boss-sever-1.onrender.com'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
