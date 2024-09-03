"use client";
import React, { useState } from "react";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import InputBox from "@/components/input/InputBox";


const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors]=useState('')
  
  const user = {
    email: email,
    password: password,
  };

  const handleLogin =()=> {

  }



  return (
    <div className="bg-gray-200 h-[80vh] flex flex-col items-center p-10">
      <h1 className="text-3xl">Please login with your account</h1>
      <div className="w-2/5">
        <p className=" h-5 mt-6 text-red-600 text-center">{errors}</p>
        <Input name = "Email" type="text" value={email} onChange={setEmail} placeholder="ktt@it.com"/>
        <Input name = "Password" type={'password'} value={password} onChange={setPassword} placeholder="less than 6 letters"/>
      </div>
      <div className="mt-10">
        <Button name ='Login' onClick={handleLogin}/>
      </div>
    </div>
  );
};

export default page;
