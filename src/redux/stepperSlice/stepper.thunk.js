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
        return { attributeCode, data }; 
    } catch (error) {
        console.error(`Error fetching options for ${attributeCode}:`, error);
        throw error; 
    }
}

export const fetchSecondarySelectThunk = async () => {
    try {
        const response = await fetch('http://13.232.49.252:7010/api/dxe/discovery/attributeMapping/SECONDARY/list');
        const data = await response.json();
       return data
    } catch (error) {
        console.error('Error fetching attributes:', error);
    }


}


export const fetchSecondaryOptionsThunk = async (attributeCode) => {
    try {
        const response = await fetch(`http://13.232.49.252:7010/api/dxe/discovery/attribute/${attributeCode}/possibleValues`);
        const data = await response.json();
        return { attributeCode, data }; 
    } catch (error) {
        console.error(`Error fetching options for ${attributeCode}:`, error);
        throw error; 
    }

}



export const fetchDiscoverIdThunk = async (data) => {
    try {
        const response = await axios.post(`http://13.232.49.252:7010/api/dxe/discovery/discover`,data);
        const data = await response.json();
        return data
    } catch (error) {
      
        throw error; 
    }

}
