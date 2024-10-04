import axios from 'axios'
import { toast } from 'react-toastify';


export const addJobThunk = async (data) => {
    try {
        var response = await axios.post('http://localhost:2000/api/addjob', data)
        console.log('return response.data', response.data)
        toast.success('job added successfully!');
    }
    catch (error) {
        toast.error(error.response.data.message);
        console.log('error', error.response.data.message)

    }

}