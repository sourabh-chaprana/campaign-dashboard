import axiosInstance from "../../components/utils/axiosInstance";
import { toast } from "react-toastify";
import axios from "axios";

export const fetchTeamsDetailsThunk = async (page, rowsPerPage) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Unauthorized access. Please log in.");
    }
    const response = await axios.get(
      "http://13.232.49.252:7060/api/cm/campaign/list",
      {
        params: {
          pageNumber: page?.page + 1,
          pageSize: page?.rowsPerPage,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("error", error.response.data.message);
  }
};

export const fetchTeamMemberListThunk = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Unauthorized access. Please log in.");
    }

    const response = await fetch(
      "http://13.232.49.252:7070/user/organization",
      {
        method: "GET", // method
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          "Content-Type": "application/json", // Optional
        },
      }
    );
    const data = await response.json();
    console.log(data, "thunkdata");
    return data;
  } catch (error) {
    console.error("Error fetching team member list:", error);
  }
};
