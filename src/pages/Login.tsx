import { LuEye, LuLockKeyhole, LuMail } from "react-icons/lu";
import { useState } from "react";

const Login = () => {
      const [showPassword,setPassword] =useState (false);

  return (
    <div className="min-h-screen bg-[#020617]">
      <div className="mx-auto w-[385px] pt-[168px]">

        
        <h1 className="text-[32px] font-bold leading-[38px] text-white">
          Sign In
        </h1>

      
        <p className="mt-[12px] text-[17px] leading-[24px] text-slate-400">
          Please enter email and password to access.
        </p>

        
        <div className="mt-[26px]">
          <label className="mb-[8px] block text-[16px] font-semibold text-slate-200">
            Email
          </label>

          <div className="flex h-[56px] items-center rounded-[8px] border border-slate-700 bg-slate-900/80 px-[15px]">
            <LuMail className="mr-[12px] h-[21px] w-[21px] text-slate-400" />

            <input
              type="email"
              placeholder="Please enter your email"
              className="h-full flex-1 bg-transparent text-[18px] text-white outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        
        <div className="mt-[22px]">
          <label className="mb-[8px] block text-[16px] font-semibold text-slate-200">
            Password
          </label>

          <div className="flex h-[56px] items-center rounded-[8px] border border-slate-700 bg-slate-900/80 px-[15px]">
            <LuLockKeyhole className="mr-[12px] h-[21px] w-[21px] text-slate-400" />

            <input
              type= {showPassword ? "text" : "password"}
              placeholder="Please enter your password"
              className="h-full flex-1 bg-transparent text-[18px] text-white outline-none placeholder:text-slate-400"
            />

            <LuEye onClick={()=> setPassword(!showPassword)} className="ml-[12px] h-[20px] w-[20px] text-slate-400" />
          </div>
        </div>

        
        <button className="mt-[27px] h-[48px] w-full rounded-[7px] bg-green-600 text-[16px] font-semibold text-white transition hover:bg-green-500">
          Login
        </button>

        
        <p className="mt-[29px] text-center text-[17px] text-slate-400">
          Don’t have an account?
          <span className="ml-[8px] cursor-pointer text-green-500">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;