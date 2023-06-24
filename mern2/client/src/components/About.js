import React, { useEffect,useState } from 'react';
import thapapic from "../images/face.png";


import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const[userData,setUserData]=useState({});

  const callAboutPage=async ()=>{
    try{
      const res=await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

    const data=await res.json();
    console.log(data);
    setUserData(data);
    if(!res.status===200){
      const error=new Error(res.error);
      throw error;
    }
    

    }catch(err){
        console.log(err);
        navigate('/login');
    }

  }

useEffect(()=>{
  callAboutPage();
  
},[]);



  return (
    <div className="container emp-profile">
         <form method="GET">
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
              <img src={thapapic} alt="pic" />
              </div>
            </div>
          
            <div className='col-md-6'>
              <div className='profile-head'>
                    <h5>{userData.name}</h5>
                    <h5>{userData.work}</h5>
                    <p className='profile-rating mt-3 mb-5'>RANKINGS:<span>8/10</span></p>

                    <ul className='nav nav-links' role='tablist'>
                        <li className='nav-item'>
                        <a
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#home"     className="nav-link active"> About</a>
                        </li>
                        <li className='nav-item'>
                        <a className='nav-link ' id='profile-tab' data-toggle='tab' href="#profile" role='tab'>Timeline</a>
                        </li>
                    </ul>
              </div>
            </div>
            <div className='col-md-2'>
                   <input type="submit" className='profile-edit-btn' value='Edit Profile' name='btnAddMore' />
            </div>
          </div>

          <div className='row' >
            {/* {left side url} */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORK LINK</p>
                <a href="https://google.com" target='_blank'>Google</a> <br />
                <a href="https://google.com" target='_blank'>Insatagram</a> <br />
                <a href="https://google.com" target='_blank'>Youtube</a> <br />
                <a href="https://google.com" target='_blank'>Software </a> <br />
              </div>

            </div>

            {/* right side data toggle */}
              <div className='col-md-8 pl-5 about-info' id='home'>
                <div className='tab-content profile-tab' id='myTabContent'>
                  <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby="home-tab"> 
                   <div className='row'>
                    <div className='col-md-6'>
                      <label >User ID:</label>

                    </div>
                    <div className='col-md-6'>
                    <p>{userData._id}</p>

                    </div>

                   </div>

                   <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label >Name</label>

                    </div>
                    <div className='col-md-6'>
                    <p>{userData.name}</p>
           
                    </div>

                    </div>

                    <div className='row'>
                    <div className='col-md-6'>
                      <label >Email</label>

                    </div>
                    <div className='col-md-6'>
                    <p>{userData.email}</p>

                    </div>

                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                      <label >Phone</label>

                    </div>
                    <div className='col-md-6'>
                    <p>{userData.phone}</p>

                    </div>

                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                      <label >Profession</label>

                    </div>
                    <div className='col-md-6'>
                    <p>{userData.work}</p>

                    </div>

                   </div>
             
                  </div>
               <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                   <div className='row'>
                    <div className='col-md-6'>
                      <label >Experience</label>

                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>

                   </div>

                   <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label >Hourly rate</label>

                    </div>
                    <div className='col-md-6'>
                      <p>10$/hr</p>
                    </div>

                   </div>

                   <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label >Total Projects</label>

                    </div>
                    <div className='col-md-6'>
                      <p>20</p>
                    </div>

                   </div>
               </div>
                </div>

              </div>
          </div>
         </form>
    </div>
  ) 
}

export default About