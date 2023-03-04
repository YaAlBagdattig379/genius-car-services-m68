import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import {Navigate, useLocation} from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
// import { sendEmailVerification } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user , loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>;
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace></Navigate>
    }
    if(loading){
        return <Loading></Loading>;
        }
        console.log(user)
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div className='text-center pt-5'>
            <h3 className='text-danger'>Your Email is not Verified !</h3>
            <h5 className='text-primary'>PLease verify your Email Address</h5>
            <button className='btn btn-primary' onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent to verify link to email');
                    }
            }}>Send Verification</button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
 }
export default RequireAuth;