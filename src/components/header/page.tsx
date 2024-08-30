"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {

  return (
    <div className="h-[100px] px-20 mt-6 text-white">
      <div className="h-12  flex justify-end items-center my-1 px-7">
        <ul className="flex justify-end items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </ul>
      </div>
      <hr className="" />
    </div>
  );
};

export default Header;
