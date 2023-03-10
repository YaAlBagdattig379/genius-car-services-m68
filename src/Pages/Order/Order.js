import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React ,{useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const getOrders = async()=>{
          try {
            const email = user?.email;
            const url = `https://genius-car-services-server-m68.vercel.app/order?email=${email}`;
            try {
                const {data}  = await axiosPrivate.get(url);
                // const {data}  = await axios.get(url);
                // ,{
                //     headers : {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // }
                setOrders(data);
            } catch (error) {
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                }
            }
           
          } catch (error) {
              console.log(error) 
          }
        }
        getOrders();
    },[user])
    return (
        <div>
            <h2>Your Orders : {orders.length}</h2>
             <div>
                {
                orders.map(order=><h3 key={order._id}>email: {order.email} and service: {order.service}</h3>)
                }
             </div>
            
        </div>
    );
};

export default Order;