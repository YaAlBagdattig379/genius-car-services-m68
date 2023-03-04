import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-5 '>
              <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;