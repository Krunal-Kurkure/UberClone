import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import {UserDataContext} from '../../src/context/UserContext';

const UserSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const navigate = useNavigate();
  const {user, setuser} = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName,
      },
      email: email,
      password: password,
    };

  try {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
  if (response.status === 201) {
    setuser(response.data.user);
    navigate('/home');
  }
} catch (err) {
  if (err.response?.status === 409) {
    alert("Email already exists");
  } else {
    console.error("Signup error:", err);
    alert("Something went wrong. Please try again.");
  }
}


    setemail("");
    setpassword("");
    setfirstName("");
    setlastName("");
  };


  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https:/upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uberlogo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >

           <h3 className="text-xl mb-3">What's your name</h3>
          <div className="flex gap-4 mb-7">
            <input
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            required
            type="text"
            value={firstName}
            onChange={(e)=>{
              setfirstName(e.target.value)
            }}
            placeholder="Firstname"
          />
           <input
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            required
            type="text"
              value={lastName}
            onChange={(e)=>{
              setlastName(e.target.value)
            }}
            placeholder="Lastname"
          />
          </div>

          <h3 className="text-xl mb-3">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            id="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-3">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            id="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="password"
                 />
          <button className="bg-[#111] mb-7 text-white  font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Create account
          </button>
        </form>
        <p className="text-center">Already have a account? <Link to="/login" className="text-[#394971] ">Login here</Link>
        </p>
      </div>

      <div>
        <p className="text-xs leading-tight">By proceeding you consent to get calls whatsapp or sms messages, including by automated means, from Uber and its affiliates to number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup;
