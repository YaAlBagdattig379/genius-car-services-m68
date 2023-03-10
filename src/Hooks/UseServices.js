 import {useEffect,useState} from 'react';
 
 const UseServices = () =>{
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("https://genius-car-services-server-m68.vercel.app/service")
        // fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return[services,setServices]
 }
 export default UseServices;
    