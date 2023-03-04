import React from 'react';
import UseServices from '../../Hooks/UseServices';

const ManageServices = () => {
    const [services,setServices] = UseServices();
    const handleDelete = (id) =>{
          const proceed = window.confirm('Are you sure ?')
          if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
          }
    }
    return (
        <div className='mx-auto w-50'>
           <h1 className='pb-5'>Welcome to Manage Services</h1>
           {
            services.map(service=><div key={service._id}>
                <ul className='border border-warning'>
                    <h5>{service.name}<button onClick={()=>handleDelete(service._id)} className='text-danger m-3 p-1'>X</button></h5>
                    <li>{service.description}</li>
                    <li>{service.price}</li>

                </ul>
            </div>)
           } 
        </div>
    );
};

export default ManageServices;