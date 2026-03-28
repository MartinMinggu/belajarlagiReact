import axios from "axios";
export default function configure(){
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
}