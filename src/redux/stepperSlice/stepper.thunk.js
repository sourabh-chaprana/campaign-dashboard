import axiosInstance from '../../components/utils/axiosInstance';
import { toast } from 'react-toastify';
import axios from 'axios';


export const fetchPrimarySelectThunk = async ( ) => {
    try {
        const response = await fetch('http://13.232.49.252:7010/api/dxe/discovery/attributeMapping/PRIMARY/list');
        const data = await response.json();
       return data
    } catch (error) {
        console.error('Error fetching attributes:', error);
    }

}


export const fetchPrimaryhOptionsThunk = async (attributeCode) => {
    try {
        const response = await fetch(`http://13.232.49.252:7010/api/dxe/discovery/attribute/${attributeCode}/possibleValues`);
        const data = await response.json();
        return { attributeCode, data }; // Return both attributeCode and data
    } catch (error) {
        console.error(`Error fetching options for ${attributeCode}:`, error);
        throw error; // Rethrow the error to be handled in async action
    }
}

// export const fetchSecondarySelectThunk = async (page, rowsPerPage) => {
//     try {
    
//         return response.data
       
//     }
//     catch (error) {
//         toast.error(error.response.data.message);
//         console.log('error', error.response.data.message)

//     }

// }


// export const fetchSecondaryOptionsThunk = async (page, rowsPerPage) => {
//     try {
    
//         return response.data
       
//     }
//     catch (error) {
//         toast.error(error.response.data.message);
//         console.log('error', error.response.data.message)

//     }

// }
