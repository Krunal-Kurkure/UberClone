import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [captaindata, setcaptaindata] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      setcaptaindata({
        email: email,
        password: password,
      });
  
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
          <h3 className="text-xl mb-3">What's your email</h3>
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
            id=""
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
            name=""
            id=""
          />
          <button className="bg-[#111] mb-7 text-white  font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          join a fleet <Link to="/captain-signup" className="text-[#85002a] ">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#85002a] mb-6 flex items-center justify-center text-white  font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
