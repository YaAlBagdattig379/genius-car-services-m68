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
        if(user){
            const getOrders = async()=>{
                console.log(user)
                const email = user?.email;
                console.log(email)
                    const url = `https://genius-car-services-server-m68.vercel.app/order?email=${email}`;
                    try {
                        const {data}  = await axiosPrivate.get(url);
                        setOrders(data);
                    } catch (error) {
                        console.log(error.message);
                        if(error.response.status === 401 || error.response.status === 403){
                            signOut(auth);
                            navigate('/login');
                        }
                }
            }
            getOrders();
        }
    },[navigate, user])
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