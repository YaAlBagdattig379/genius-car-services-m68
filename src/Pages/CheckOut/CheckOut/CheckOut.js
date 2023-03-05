import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import './CheckOut.css';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user,setUser] = useState({
    //      name: 'mui robul',
    //      email: 'muir@bul.com',
    //      phone: '10333333333',
    //      address: 'taz mahal',

    // });
    // const handleAddresChange = event =>{
    // //    console.log(event.target.value)
    //    const {address, ...rest} = user;
    //    const newAddress = event.target.value;
    //    const newUser = {address: newAddress, ...rest}
    //    setUser(newUser)
    // //    console.log(newUser)
    // }
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order ={
            email : user.email,
            service : service.name,
            serviceId : serviceId,
            address : event.target.address.value,
            phone : event.target.phone.value,
        }
        axios.post('http://localhost:5000/order',order)
        .then(response=>{
            console.log(response)
            const {data} = response;
            if(data.insertedId){
                toast('your order is booked !!!!!  Hey are you')
                event.target.reset();
            }
            console.log(response)
        })
    }
    return (
      <div className='w-50 mx-auto'>
            
         <h2>Please Order -"{service.name}" </h2>
         <form onSubmit={handlePlaceOrder}>
            <input value={user.displayName} type="text"className='mb-2 w-100'name="name"placeholder='name'disabled readOnly required id=""/><br />
            <input value={user.email}  type="text" readOnly disabled  className='mb-2 w-100'name="email"
                 placeholder='email'required id=""/><br />
            <input value={service.name} type="text"readOnly className='mb-2 w-100'  name="service"placeholder='service' required id=""/><br />

            <input  type="text"className='mb-2 w-100' name="address"placeholder='address' required id=""/><br />
            <input value={user.phone} type="text"className='mb-2 w-100'name="phone"
             placeholder='phone'required id=""/><br />
            <input className='btn btn-primary w-100'type="submit" value="Place Order"required/>
         </form>
        </div>
    );
};

export default CheckOut;