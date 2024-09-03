"use client";
import React, { useState } from "react";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";




const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState();
  const router = useRouter();
  
  
  const user = {
    name: name,
    email: email,
    password: password,
    password2: password2,
  };

  const handleRegister=()=> {
    
  }

  return (
    <div className="bg-gray-200 h-[80vh] flex flex-col items-center p-10">
      <h1 className="text-3xl">Please login with your account</h1>
      <div className="w-2/5">
        <p className=" h-5 mt-6 text-red-600 text-center">{errors}</p>
        <Input name = "Name" type="text" value={name} onChange={setName} placeholder="Kim Tol Tol"/>
        <Input name = "Email" type="text" value={email} onChange={setEmail} placeholder="ktt@it.com"/>
        <Input name = "Password" type="password" value={password} onChange={setPassword} placeholder="less than 6 letters"/>
        <Input name = "Confirm Password" type="password" value={password2} onChange={setPassword2} placeholder="password must be matched"/>
      </div>
      <div className="mt-10 flex flex-col">
        <Button  name ='Register' onClick={handleRegister}/>
        {/* <Link href={{pathname: 'login', query: email}} onClick={handleRegister} className="bg-blue-500 text-white h-10 w-20 rounded-xl">Register</Link> */}
        <p className="mt-6">Already registered <Link href={{pathname: 'login', query: email}} onClick={handleRegister} className="text-blue-700">Log in</Link></p>
      </div>
    </div>
  );
};

export default page;
