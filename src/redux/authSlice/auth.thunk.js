import axiosInstance from "../../components/utils/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";

export const authLoginThunk = async (data) => {
  try {
    const response = await axios.post("http://13.232.49.252:7070/login", data);
    console.log("response", response);
    const { accessToken, idToken } = response.data;
    localStorage.setItem("token", accessToken);
    localStorage.setItem("idToken", idToken);
    return accessToken; // You can return more data if needed
  } catch (error) {
    // Handle errors
    toast.error(
      "Login failed: " + error.response?.data?.message ||
        "Something went wrong!"
    );
    // return rejectWithValue(error.response?.data?.message || "Something went wrong!");
  }
};
