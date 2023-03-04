import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

import './Home.css';

const Home = () => {
    return (
        <>
          <PageTitle title={'Home'}></PageTitle>
          {/* <Helmet>
               <title>home - genius car services m-63</title>
          </Helmet> */}
          <Banner></Banner>
          <Services></Services>
          <Experts ></Experts>
        </>
    );
};

export default Home;