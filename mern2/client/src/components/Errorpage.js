import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
   <>
     <div id='not found'>
        <div className='not found'>
            <div className='notfound-404'>
                <h1>404</h1>

            </div>
            <h2>We are sorry, page not found</h2>

            <NavLink to="/home">Back To Homepage</NavLink>

        </div>

     </div>
   </>
  )
}

export default Errorpage