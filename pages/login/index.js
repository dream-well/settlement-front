import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from 'axios';

export default function Home() {

  const router = useRouter(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(email, password) {
    try{
      const { data } = await axios.post('/api/auth/login', {
        email, password
      })
      console.log(data);
      localStorage.setItem('token', data.access_token);
      // localStorage.setItem('expiresAt', data.authToken.expiresAt);
      router.replace('/dashboard');
    } catch(e) {
      alert(e.message);
    }
  }

  return (
    <div className='bg-[#f5f6f8] min-h-screen	flex items-center justify-center bg-[#F0F3F4]'>
      <div className='w-full mx-[2rem] md:w-[500px] shadow-lg rounded-[10px] bg-white'>
        <div className='p-[16px] border-b border-[#e1e5eb] font-medium'>Log In</div>
        <div className='p-[16px] flex flex-col items-center'>
          <div className='flex flex-col w-full mb-[16px]'>
            <label className='mb-[8px]'>Email</label>
            <input className='border-[#e1e5eb] border rounded-[4px] px-[12px] py-[7px]' placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col w-full mb-[16px]'>
            <label className='mb-[8px]'>Password</label>
            <input className='border-[#e1e5eb] border rounded-[4px] px-[12px] py-[7px]' placeholder='Password' 
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if(e.key == "Enter") {
                  login(email, password);
                }
              }}
            />
          </div>
          <button className='bg-[#007bff] text-white rounded-[4px] px-[16px] py-[9px]'
            onClick={() => login(email, password)}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}
