import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../src/context/UserContext";

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
    const { user, setuser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

       const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );
      if (response.status === 200) {
        const data = response.data
        setuser(data.user);
        localStorage.setItem('token',data.token)
        navigate("/home");
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
          <h3 className="text-xl mb-3">What's your emaill</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
           
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
            name=""
             id="email"
          />
          <h3 className="text-xl mb-3">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="password"
           id="password"
          />
          <button className="bg-[#111] mb-7 text-white  font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-[#394971] ">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#394971] mb-6 flex items-center justify-center text-white  font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;