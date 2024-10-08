import axiosInstance from '../../components/utils/axiosInstance';
import { toast } from 'react-toastify';


export const fetchTeamsDetailsThunk = async (page, rowsPerPage) => {
    try {
        console.log('page',page.page)
        console.log('rowP',page.rowsPerPage)
        var response = await axiosInstance.get('http://13.232.49.252:7060/api/cm/campaign/list', {
            params: { 
                pageNumber: page?.page + 1,  // Assuming API is 1-indexed
                pageSize: page?.rowsPerPage
              }
        
        })
        return response.data
       
    }
    catch (error) {
        toast.error(error.response.data.message);
        console.log('error', error.response.data.message)

    }



}