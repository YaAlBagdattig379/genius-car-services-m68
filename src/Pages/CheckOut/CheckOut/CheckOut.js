import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import './CheckOut.css';

const CheckOut = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user,setUser] = useState({
         name: 'mui robul',
         email: 'muir@bul.com',
         phone: '10333333333',
         address: 'taz mahal',

    });
    const handleAddresChange = event =>{
    //    console.log(event.target.value)
       const {address, ...rest} = user;
       const newAddress = event.target.value;
       const newUser = {address: newAddress, ...rest}
       setUser(newUser)
    //    console.log(newUser)
    }
    return (
      <div className='w-50 mx-auto'>
            
         <h2>Please Order -"{service.name}" </h2>
         <form>
            <input value={user.name} type="text"className='mb-2 w-100'name="name"placeholder='name' required id=""/><br />
            <input value={user.email} type="text"className='mb-2 w-100'name="email"
                 placeholder='email'required id=""/><br />
            <input value={user.address} type="text"className='mb-2 w-100'  name="service"placeholder='service' required id=""/><br />
            <input onChange={handleAddresChange} value={user.address} type="text"className='mb-2 w-100' name="address"placeholder='address' required id=""/><br />
            <input value={user.phone} type="text"className='mb-2 w-100'name="phone"
             placeholder='phone'required id=""/><br />
            <input className='btn btn-primary w-100'type="submit" value="Please Submit"required/>
         </form>
        </div>
    );
};

export default CheckOut;