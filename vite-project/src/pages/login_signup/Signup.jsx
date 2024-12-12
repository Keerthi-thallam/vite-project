import {React,  useState } from 'react';
import {Link} from "react-router-dom";
import style from "./Signup.module.css";
import { useNavigate} from 'react-router-dom';


const Signup = () => {
  const[name, setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
  const navigate=useNavigate();

  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const sendSign= await fetch(`http://localhost:3000/user/signup`,{
        method:"POST",
        headers:{
          "content-Type":"application/json",
        },
        body:JSON.stringify({name,email,password}),

      });
      const response =await sendSign.json();

      if(sendSign.ok){
        alert("registration successfull");
        navigate("/");
      }else{
        alert("registration failed");
      }
    }catch (error){
      console.log(error);
  }
};
  return (
    <div className={style.full}>
      <div className={style.body}>
        <h1 className={style.main}>Signup</h1>
        <div classname={style.letters}> 
          <input type="text" name="name" id="" placeholder="userName" onChange={(e)=>setname(e.target.value)}/>
          <input type="email" name="email" id="" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
          <input type="password" name="password" id="" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
          <div className={style.submit}>
          <button onClick={onSubmit}>Submit</button>
          </div>
          </div>
        <div>
          <p>already an user?<Link to ="/">Login</Link></p>

        </div>
      </div>
      
    </div>
  );
};

export default Signup;
