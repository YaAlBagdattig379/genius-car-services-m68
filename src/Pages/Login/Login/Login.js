import React, { useEffect, useRef } from 'react';
import {Form ,Button} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation(auth) ;
    const from = location.state?.from?.pathname || '/';
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(user)
    const [token] = useToken(user);
    // useEffect(()=>{
    if(loading || sending){
        return <Loading></Loading>
    }
    console.log(user);
    // useEffect(()=>{
          if(token){
              navigate(from,{replace: true});
           } 
      // })
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email,password);
       
        // navigate(from,{replace: true});
        // console.log(data)
    }
    const navigateRegistered = event =>{
       navigate('/register')
    }
    const resetPassword =async()=>{
      const email = emailRef.current.value;
      if(email){
          await sendPasswordResetEmail(email);
          toast('send email');
      }else{
         toast('please enter your email address !')
      }
    }
    if (error) {
      errorElement =<p className='text-danger'>Error...{error?.message}</p>
    }
    return (
        <div className='container w-50 mx-auto'>
          <PageTitle title={'Login'}></PageTitle>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
          </Form.Group>
          <Button variant="primary"className='mx-auto w-50 d-block mb-2' type="submit">
              Login
          </Button>
        </Form>
        {errorElement}
        <small>
           <p  className='mt-2'>New to Genius car? <Link to={'/register'} onClick={navigateRegistered}  className='text-primary pe-auto text-decoration-none '>Please register</Link></p>
        </small>
        <small>
           <p  className='mt-2'>Forget Password ? <button onClick={resetPassword}  className=' btn btn-link text-primary pe-auto text-decoration-none '>Reset Password</button></p>
        </small>
        <SocialLogin></SocialLogin>

    </div>
    
  );
}

export default Login;