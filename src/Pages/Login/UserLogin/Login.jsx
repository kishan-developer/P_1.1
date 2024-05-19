// import { Button } from "@mui/material";
import React from "react";
// import Input from "../../library/components/input";
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useThemeContextValue } from "../../../Utils/context/ThemeContext";
// show password icons
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { IoLogOut } from "react-icons/io5";
// react toastify 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);




    const navigate = useNavigate();

    const { setAuth, adminData, setAdminData } = useThemeContextValue();
    // localStorage.setItem("account", adminData.email);
    // console.log('adminData', adminData.email);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        appType: "ecommerce"
    })




    console.log(loginData.email);

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name] : e.target.value })
        // console.log('loginData',loginData);
        setAdminData(loginData);
    
    }

    // this funtion use to show and hide password 
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }


    // login api calling
    const handleContinue = async () => {
        console.log("handle function ")
        const options = {
            method: 'POST',
            headers: new Headers({ projectID:'rcetbaqftf5m','Content-Type':'application/json'}),
            body: JSON.stringify(loginData)
        }
        try {
            const res = await fetch('https://academics.newtonschool.co/api/v1/user/login',options);
            const resJson = await res.json();
            console.log('resJson', resJson);
            // localStorage.setItem("my account", resJson);
            if (resJson.status === 'success') {
                // localStorage.clear();
                localStorage.setItem('token', resJson.token)
                // setAuth(true);
                navigate('/')
                // notify()
            } else {
                console.log(resJson.message);
            }
            alert(resJson.status);

            console.log("login User Name.......", resJson.data.name);
            localStorage.setItem("login User Name.......", resJson.data.name);
            localStorage.setItem("login User Email.......", resJson.data.email);
            // localStorage.setItem('token', resJson.token)
            console.log("login sign up page resJson.token", resJson.token)
            localStorage.setItem("login Sign New user Token", resJson.token)
            //store user Address in localstorage to check befor payment and order product 
            // address is pressent in localstorage than show in cart page "continue" button not show "add Address"
            localStorage.setItem("login User Address", resJson.data.address)
        } catch (error) {
            console.log(error);
        }
        
        // setLoginData('');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log(token);
        if (token) {
            navigate('/');
        }else{
            navigate('/login')
        }
    }, [])

    const notify = () => {
        toast.success('User Login Succesfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className="flex items-center  login h-screen w-full">
            <div
                // onClick={handleFormSubmit }
                className="w-[600px] h-[400px] text-xl bg-gray-500 py-5 px-12 flex flex-col gap-3 rounded-md">
                <div className="text-2xl font-bold">Login</div>
                <input
                    onChange={handleChange}
                    value={loginData.email}
                    name='email'
                    placeholder='Enter Email'
                    type='email'
                    classes='login-input'
                    className="rounded-md px-5 py-2 text-xl w-[100%]"

                />
                <div className="w-[600px] flex ">
                    <input
                        onChange={handleChange}
                        value={loginData.password}
                        name='password'
                        placeholder='Enter Password'
                        type={type}
                        classes='login-input'
                        className="rounded-md px-5 py-2 w-[84%]"
                    />
                    <span className="flex justify-around items-center" onClick={handleToggle}>
                        <Icon className="absolute mr-10" icon={icon} size={20} />
                    </span>
                </div>

                <button
                    type="submit"
                    onClick={handleContinue}
                    variant="contained"
                    className="bg-blue-600 py-2 rounded-md font-bold"
                >
                    Login
                </button>
                <span className="text-red-400 text-sm mt-5 ">You Don't Have Account ?</span>
                <Link to='/signup'>
                    <button
                        variant="contained"
                        className="w-fit px-3 py-2 rounded-md font-bold bg-blue-600 text-sm"
                    >
                        Sign Up here
                    </button>
                </Link>
            </div>
            {/* <ToastContainer></ToastContainer> */}
                
            {/* Same as */}
           
        </div>
    );
};

export default Login;



// export default vs named export 

