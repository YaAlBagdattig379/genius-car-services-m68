import React,{useEffect} from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/SocialLogin/GoogleLogo.png';
import facebookLogo from '../../../images/SocialLogin/facebook.png';
import gitHubLogo from '../../../images/SocialLogin/gitHub.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    useEffect(()=>{
    if(loading){
      return <Loading></Loading>
    }
   },[])
    if (error || error1) {
        errorElement =<p className='text-danger'>Error...{error?.message}{error1?.message}</p>
      }
    useEffect(()=>{
      if (user || user1) {
        return (
          navigate('/')
        );
      }
    },[user || user1])
    return (
        <div>
            <div className='d-flex align-items-center'>
               <div className='w-50 bg-primary'style={{height:'1px'}}>
               </div>
               <p className='mx-2 mt-2'>or</p>
               <div className='w-50 bg-primary'style={{height:'1px'}}>
               </div>
            </div>
            {errorElement}
            <div className=''>
              <button onClick={()=>signInWithGoogle()}
              className='btn bg-info w-50 d-block mx-auto my-2'>  
              <img style={{width:'14%'}} src={googleLogo} alt="" />
               <span className='px-3'>Google Sign In</span>
              </button>
              <button className='btn bg-info w-50 d-block mx-auto my-2'>  
              <img style={{width:'14%'}} src={facebookLogo} alt="" />
               <span className='px-3'>Facebook Sign In</span>
              </button>
              <button onClick={()=>signInWithGithub()} 
              className='btn bg-info w-50 d-block mx-auto my-2'>  
              <img style={{width:'14%',borderRadius:'15px'}} src={gitHubLogo} alt="" />
               <span className='px-3'>GitHub Sign In</span>
              </button>
            </div>
        </div>
    );
};

export default SocialLogin;