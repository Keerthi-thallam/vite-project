import React, { useState } from 'react';
 import {Link} from "react-router-dom";
 import style from "./Login.module.css";
 import { useNavigate} from 'react-router-dom';

const Login = () => {
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const navigate=useNavigate();
    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
            const sendSign= await fetch(`http://localhost:3000/user/login`,{
              method:"POST",
              headers:{
                'content-Type':"application/json",
              },
              body:JSON.stringify({email,password}),
      
            });
            const response =await sendSign.json();
      
            if(sendSign.ok){
              alert("Login successfull");
              localStorage.setItem("token",response.token);
              navigate("/Homepage");
            }else{     
              alert("User not found");
            }
          }catch (error){
            console.log(error);
        }
    }
  return (
    <div className={style.full}>
    <div className={style.body}> 
        <h1 className={style.hello}>Login</h1>
        <div className={style.hi}>
            <input type="email"name="email"id=""placeholder="Email" className={style.email} onChange={(e)=> setemail(e.target.value)}/><br />
            <input type="password"name="password"id=""placeholder="password" className={style.password} onChange={(e)=> setpassword(e.target.value)}/><br />
            <div className={style.submit}>
            <button onClick={onSubmit}>Submit</button>

            </div>
        </div>
        <div>
            <p>don't have an account?<Link to="/signup">Signup</Link>
            <Link to="/home">Home</Link>
             </p> 
        </div>
    </div>
  
</div>
);
};
export default Login;

    

    

    