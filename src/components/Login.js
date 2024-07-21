import React, { useContext, useState } from 'react';
import InfoContext from '../Contexts/Info/InfoContext';
import { useNavigate } from 'react-router-dom';
import avatar from "../assets/image/profile-circle.png"
import imageCompression from 'browser-image-compression';

const Login = () => {
  // const info=useContext(InfoContext);
  let history=useNavigate();
  // const {setlogg,setcreate,logging}=info;
  const [credentials,setcredentials]=useState({email:"",password:""});
  const [create,setcreate]=useState({pic:"",name:"",email:"",password:""})
  const[logg,setlogg]=useState("true")
  const logging=async()=>{
      const response=await fetch("http://localhost:5000/api/auth/login",{
          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json= await response.json();
      if(json.success){
        localStorage.setItem('token',json.authtoken);
        return true;
      }else{
        alert("INVALID CREDENTIALS");
      }
      console.log(json);
  }
  const signing=async()=>{
    const response=await fetch("http://localhost:5000/api/auth/createuser",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({email:create.email,password:create.password,name:create.name,pic:create.pic})
    });
    const json= await response.json();
    if(json.success){
      localStorage.setItem('token',json.authtoken);
      return true;
    }else{
        alert("INVALID CREDENTIALS");
    }
    console.log(json);
}
  const onchangey=(e)=>{
    e.preventDefault();
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  const onchangeyy=(e)=>{
    e.preventDefault();
    setcreate({...create,[e.target.name]:e.target.value})
  }
  const loggings=async(e)=>{
    e.preventDefault();
    const h=await(logging());
    if(h){
      history('/')
    }
  }
  const signups=async(e)=>{
    e.preventDefault();
    const h=await(signing());
    if(h){
      history('/')
    }
  }
  // const handleFileUpload=async(e)=>{
  //   const file=e.target.files[0]
  //   const base64 =await converToBase64(file);
  //   setcreate({...create,pic:base64});
  //   console.log(base64)
  // }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    
    const options = {
      maxSizeMB: 0.1, // Maximum file size in MB
      maxWidthOrHeight: 100, // Maximum width or height
      useWebWorker: true,
    };
    
    try {
      const compressedFile = await imageCompression(file, options);
      const base64 = await convertToBase64(compressedFile);
      setcreate({ ...create, pic: base64 });
      console.log(base64);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='w-full min-h-screen !max-h-none h-fit !overflow-auto'>
        {(logg)?
        <div className='flex justify-center items-center min-h-screen w-full !overflow-y-auto'>
          <div className='relative w-[50%] p-2 max-w-[500px] min-w-[400px] h-[50%] min-h-[400px] max-h-[100px] m-auto'>
            <div className='absolute inset-0 bg-zinc-950 opacity-30 rounded-xl backdrop-blur-xl'></div>
            <div className='relative z-10 p-4'>
              
              <div className='flex justify-center text-2xl mb-[10%]'>Login</div>
              <form className="space-y-6" action="#" method="POST" onSubmit={(e)=>{e.preventDefault()}}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                    <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" value={credentials.email} onChange={(e)=>onchangey(e)} required className="block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-zinc-600 hover:text-white">Forgot password?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required value={credentials.password} onChange={(e)=>onchangey(e)} className="p-2 block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button type="submit" onClick={(e)=>loggings(e)} className="flex w-2/4 justify-center rounded-md bg-zinc-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
                <div className='flex justify-center'>
                    <button type="button" className="flex !justify-center rounded-md bg-zinc-700 w-2/4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>setlogg(!logg)} >Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
            :
        <div className='flex justify-center items-center min-h-screen h-fit w-full !overflow-y-auto p-10'>
            <div className='relative w-[50%] max-w-[500px] min-w-[400px] h-[50%] min-h-[720px] max-h-[100px] m-auto p-5'>
              <div className='absolute inset-0 bg-zinc-950 opacity-30 rounded-xl backdrop-blur-xl'></div>
              <div className='relative z-10'>
                
              <div className='flex justify-center text-2xl mb-[10%]'>Create Account</div>
              <form className="space-y-6" action="#" method="POST" onSubmit={(e)=>e.preventDefault()} >
                          <div>
                              <label htmlFor="file_upload" className="flex justify-center text-sm font-medium leading-6 text-white"><img className='w-1/4' src={(create.pic==="")?avatar:create.pic}  alt=" "></img></label>
                              <div className="mt-2">
                              <input id="file_upload" label='Image' name="pic" type="file" autoComplete="pic" required onChange={(e)=>handleFileUpload(e)} className="p-2 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hidden" accept='.jpeg, .png, .jpg'  />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">name</label>
                              <div className="mt-2">
                              <input id="name" name="name" type="name" value={create.name} onChange={(e)=>onchangeyy(e)} autoComplete="name" required className="p-2 block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                              <div className="mt-2">
                              <input id="email" name="email" type="email" autoComplete="email" required value={create.email} onChange={(e)=>onchangeyy(e)} className="p-2 block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                              </div>
                          </div>
              
                          <div>
                              <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Set Password</label>
              
                              </div>
                              <div className="mt-2">
                              <input id="password" name="password" type="password" autoComplete="current-password" required value={create.password} onChange={(e)=>onchangeyy(e)} className="p-2 block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                              </div>
                          </div>
                          <div>
                              <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Confirm Password</label>
              
                              </div>
                              <div className="mt-2">
                              <input id="cpassword" name="password" type="password" autoComplete="current-password" required className="block w-full p-2 rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                          </div>
              
                          <div className='flex justify-center'>
                              <button type="submit" onClick={(e)=>signups(e)} className="flex w-2/4 !justify-center rounded-md bg-zinc-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Create Account</button>
                          </div>
                          <div className='flex justify-center'>
                              <button type="button" className="flex w-2/4 !justify-center rounded-md bg-zinc-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>setlogg(!logg)}>Already a user?</button>
                          </div>
                          </form>
            </div>
          </div>
        </div>
            }
        </div>
  );
};

export default Login;

function convertToBase64(file){
  return new Promise((resolve, reject)=>{
      const fileReader= new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
          resolve(fileReader.result)
      }
      fileReader.onerror=(error)=>{
          reject(error);
      }
  })
}