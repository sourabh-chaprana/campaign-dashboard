import axiosInstance from '../../components/utils/axiosInstance';
import { toast } from 'react-toastify';


export const authLoginThunk = async (data) => {
    try {
        const response = await axiosInstance.post("http://localhost:2000/api/login", data);
        const { token } = response.data;
        localStorage.setItem("token", token);
        return token; // You can return more data if needed
      } catch (error) {
        // Handle errors
        toast.error("Login failed: " + error.response?.data?.message || "Something went wrong!");
        // return rejectWithValue(error.response?.data?.message || "Something went wrong!");
      }

}