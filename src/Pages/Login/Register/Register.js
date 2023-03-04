import './Register.css' ;
import auth from '../../../firebase.init';
import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword ,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(loading || updating){
            return <Loading></Loading>
          }
    },[])
    const navigateToLogin = ()=>{
        navigate('./login') ;
    }
    useEffect(()=>{
       if(user){
         console.log(user);
        }
    },[])
    const handleRegister =async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        // if(agree){
        await  createUserWithEmailAndPassword(email, password);
        // }
        await updateProfile({ displayName : name });
        navigate('/home')
        // alert('Updated profile');
        console.log(name)
    }
    return (
        <div className='form-register'>
            <PageTitle title={'Register'}></PageTitle>
            <h3 className='text-center'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name"required placeholder='Your Name' id="" />
                <input type="email"name="email" required placeholder='Email Address' id="" />
                <input type="Password"name="password" required placeholder='Password' id="" />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms"/>
                {/* <label className={agree?'text-primary ps-2':'ps-2 text-danger'} */}
                <label className={`ps-2 ${agree? '': 'text-danger'}`}
                 htmlFor="terms">Accept Genius Car terms and conditions</label>
                <input disabled={!agree} className='w-50 mx-auto d-block btn btn-primary mt-2' type="submit"
                value={'Register'}></input>
            </form>
            <p>Already have an account? <Link to={'/login'} onClick={navigateToLogin}  className='text-primary pe-auto text-decoration-none '>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;