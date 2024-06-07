// import { Button } from "@mui/material";
import React from "react";
// import Input from "../../library/components/input";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SignUp = () => {

  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    appType: "ecommerce"
  })

  // console.log('signUpData name', signUpData);

  const handleChange = (e) => {
    const updatedData = { ...signUpData };
    updatedData[e.target.name] = e.target.value;
    setSignUpData(updatedData)
  }
  const handleContinue = async () => {
    const options = {
      method: 'POST',
      headers: new Headers({ projectID: 'rcetbaqftf5m', 'Content-Type': 'application/json' }),
      body: JSON.stringify(signUpData)
    }

    try {
      const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup',options);
      const resJson = await res.json();
      if(resJson.status==="success"){
        localStorage.clear();
        navigate('/login');
      }

      console.log(resJson.data);
      console.log("User Name.......", resJson.data.user.name);
      localStorage.setItem("User Name.......",resJson.data.user.name);
      localStorage.setItem("User Email.......", resJson.data.user.email);
      // localStorage.setItem('token', resJson.token)
      console.log(" sign up page resJson.token", resJson.token)
      localStorage.setItem("Sign New user Token", resJson.token)
      //store user Address in localstorage to check befor payment and order product 
      // address is pressent in localstorage than show in cart page "continue" button not show "add Address"
      localStorage.setItem("User Address",resJson.data.user.address)
      
      alert(resJson.status);
    } catch (error) {
      console.log(error);
    }

    // navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <div className="w-[350px]  xl:w-[600px] lg:w-[500px] md:w-[400px]  h-[400px] text-xl bg-gray-500 py-5 px-12 flex flex-col gap-3 rounded-md">
        <h3 className="font-bold text-black" >Sign Up...............</h3>
        
      
          <input
            onChange={handleChange}
            name='name'
            placeholder='Enter UserName'
            type='text'
            classes='login-input'
            className="rounded-md px-5 py-2  text-xl "
          />

          <input
            onChange={handleChange}
            name='email'
            placeholder='Enter Email'
            type='email'
            classes='login-input'
            className="rounded-md px-5 py-2 text-xl "
          />

          <input
            onChange={handleChange}
            name='password'
            placeholder='Enter Password'
            type='password'
            classes='login-input'
            className="rounded-md px-5 py-2 text-xl"
          />

          <button
            onClick={handleContinue}
            variant="contained"
            className="bg-blue-600 py-2 rounded-md font-bold"
          >
            Continue
          </button>
        
        <span style={{ color: 'white' }}>Already Have A Account ?</span>
        <Link to='/login'>
          <button variant="contained" className="bg-blue-600 px-5 py-2 rounded-lg cursor-pointer">Login Here</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;



// export default vs named export



// async and await