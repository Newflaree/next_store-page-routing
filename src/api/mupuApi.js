// Axios
import axios from 'axios';


const mupuApi = axios.create({
  baseURL: '/api'
});

export default mupuApi;
