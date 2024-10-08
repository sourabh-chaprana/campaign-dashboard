import axiosInstance from '../../components/utils/axiosInstance';
import { toast } from 'react-toastify';
import axios from 'axios';


export const fetchTeamsDetailsThunk = async (page, rowsPerPage) => {
    try {
        
        const token = localStorage.getItem('token'); 

        if (!token) {
            toast.error('Unauthorized access. Please log in.');
        
        }
        const response = await axios.get('http://13.232.49.252:7060/api/cm/campaign/list', {
            params: { 
                pageNumber: page?.page + 1, 
                pageSize: page?.rowsPerPage 
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
       
    }
    catch (error) {
        toast.error(error.response.data.message);
        console.log('error', error.response.data.message)

    }



}