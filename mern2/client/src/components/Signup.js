import React, { useState } from 'react';
import signpic from "../images/Login.jpg";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work:"",
    password: "",
    cpassword: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData=async (e)=>{
    e.preventDefault();
    const{ name,
    email,
    phone,
    work,
    password,
    cpassword}=user;

   const res= await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      
      name,
      email,
      phone,
      work,
      password,
      cpassword
    
    })
   });

   const data=await res.json();
   if(data.status===400 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registeration");
   }else{
    window.alert(" Registration Successful");
    console.log(" Registeration Successful");

    navigate('/login');
   }

  }



  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign Up</h2>

              <form className="register-form" id="register-form" method='POST'>
                <div className='form-group'>
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id='name' autoComplete='off' placeholder='Your Name' value={user.name} onChange={handleInputs} />
                </div>
                <div className='form-group'>
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id='email' autoComplete='off' placeholder='Your Email' value={user.email} onChange={handleInputs} />
                </div>

                <div className='form-group'>
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id='phone' autoComplete='off' placeholder='Phone Number' value={user.phone} onChange={handleInputs} />
                </div>
                <div className='form-group'>
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" id='work' autoComplete='off' placeholder='Your Profession' value={user.work} onChange={handleInputs} />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Your Password' />
                </div>

                <div className='form-group'>
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Your Password' />
                </div>

                <div className='form-group form-button'>
                  <input type="submit" name="signup" id='signup' className='form-submit' value='Register' onClick={PostData} />
                  <NavLink to='/login' className='signup-image-link'>I am already registered</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;
