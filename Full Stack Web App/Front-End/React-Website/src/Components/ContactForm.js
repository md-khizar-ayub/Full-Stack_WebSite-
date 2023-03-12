import React, { useState } from "react";
import './ContactForm.css';
import { authenticateSignup } from "./serviceAPI/api.js";
import axios from "axios";


const signupInitialValues = {
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  comment: ''
}


export default function ContactForm() {
  const [signup, setSignup] = useState(signupInitialValues)
  const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log([e.target.name] + " : "+e.target.value)
  }

  const adduser = async () => {
    console.log("I AM HERE Khizar");
    const a = await axios.post("http://localhost:8080/user/adduser", signup)
      .then((response) => {
        console.log("User is addedd");
        console.log(response.status);
      }).catch((e) => {
        console.log("Error While Adding User" + e);
      });
  };
  const signupUser = (e) => {
    e.preventDefault();
    console.log("I AM HERE");
    console.log(signup);
    console.log(e);

    const addoneUser = adduser();

    let response = authenticateSignup(signup);
    setTimeout(() => {
      e.target.submit();
    }, 25000);
  }
  return (
    <>


      <h1 className='sign-up' >CONTACT US</h1>


      <div class="row" id="contatti">
        <div class="container">

          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.669149381217!2d76.90400857407286!3d12.518597622058223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa0dafa8e534d%3A0x7d5ddda2d71b3d5f!2scoconut%20Gaurden!5e0!3m2!1sen!2sin!4v1670945260594!5m2!1sen!2sin" width="100%" height="400px" title="This is a unique title" alt="maps"  ></iframe>
            <div>
              <div>
                <div>
                  <br />
                </div>
              </div>
            </div>
            <form onSubmit={signupUser} action="/">


              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="text" className="form-control mt-2" placeholder="FIRST NAME" onChange={(e) => onInputChange(e)} name='firstname' required />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="text" className="form-control mt-2" placeholder="LAST NAME" onChange={(e) => onInputChange(e)} name='lastname' required />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="email" className="form-control mt-2" placeholder="Email" onChange={(e) => onInputChange(e)} name='email' required />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="tel" className="form-control mt-2" placeholder="PHONE NUMBER" onChange={(e) => onInputChange(e)} name='phonenumber' required />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="COMMENT HERE" rows="3" name='comment' onChange={(e) => onInputChange(e)} required></textarea>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="form-group">
                    <div class="form-check">

                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <button className="btn btn-primary btn-lg active" >SUBMIT</button>
                </div>
              </div>
            </form>
            <div class="text-black">
              <h3 class="text-uppercase mt-4 font-weight-bold">OFFICE INFO</h3>

              <i class="fas fa-phone mt-3"></i> <a href="tel:+">(+91) 9019108181</a><br />


              <i class="fa fa-envelope mt-3"></i> <a href="">kco@gmail.com</a><br />
              <i class="fas fa-globe mt-3"></i> #13th Cross HalaHalli kere , Ramanagaram<br />

              {/* <div class="my-4">
        <a href="/"><i class="fab fa-facebook fa-3x pr-4"></i></a>
        <a href="/"><i class="fab fa-linkedin fa-3x"></i></a>
        </div> */}
            </div>
          </div>

        </div>
      </div>







    </>
  )
}

