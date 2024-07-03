import React, { useContext, useEffect, useState } from 'react'
import Prompt from './Prompt'
import AiContext from '../AIContext';

const Home = () => {
  const context=useContext(AiContext);
  const {prompt, setprompt, image, setimage,resp}=context;
  const [resps,setresps]=useState([]);
  useEffect(()=>{
    if(resp) setresps([...resps,{mess:resp, domain: 'mr-[40%]'}]);
  },[resp])
  useEffect(()=>{
    if(resp) setresps([...resps,{mess:prompt, domain: 'ml-[40%]'}]);
  },[prompt])
  return (
    <div className='min-h-full overflow-y-auto max-h-screen w-screen'>
      <div className='mb-[20%] mt-[2%] w-full'>
        { 
          resps.map((res,index)=>{
            return(
              <div
                key={index}
                className={`max-w-[40%] overflow-x-auto ml-auto mr-auto bg-zinc-700 mb-8 p-3 rounded-xl ${res.domain}`}
                dangerouslySetInnerHTML={{ __html: res.mess }}
              />
            )
          })
        }
      </div>
      <Prompt/>
    </div>
  )
}

export default Home


