import { useState, useEffect} from 'react';

const useServiceDetail = serviceId =>{
    const [service,setService] = useState({});
    useEffect(()=>{
        const url = `https://genius-car-services-server-m68.vercel.app/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setService(data))
    },[serviceId])
    return [service]
}
export default useServiceDetail;