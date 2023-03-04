import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/service")
        // fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id='services' className='container mt-4'>
            <div className='row'>
            <h1 className='services-title mb-3'>Our Services</h1>
            <div className='services-container'>
             {
                services.map(service => <Service
                key={service._id}
                service = {service}
                ></Service>)
             }
             
            </div>
            </div>
            
        </div>
    );
};

export default Services;