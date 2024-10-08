import axiosInstance from '../../components/utils/axiosInstance';
import { toast } from 'react-toastify';


export const fetchTeamsDetailsThunk = async (data) => {
    try {
        var response = await axiosInstance.get('http://localhost:2000/api/alljobs', data)
        return response.data
       
    }
    catch (error) {
        toast.error(error.response.data.message);
        console.log('error', error.response.data.message)

    }



}