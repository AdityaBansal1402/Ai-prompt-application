import React, { createContext, useEffect, useMemo, useState } from 'react'
import {marked} from 'marked';
import AiContext from './AIContext';
const { GoogleGenerativeAI } = require("@google/generative-ai");
// require('dotenv').config();
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });


const AI = (props) => {
  const genAI = new GoogleGenerativeAI("AIzaSyDktJiWpVJbEXbXSnLX4A9Ov_N4CC2bwso");
  // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
  const [prompt,setprompt]=useState();
  const [image,setimage]=useState();
  const [resp,setresp]=useState();
  
  
  // const image = {
  // inlineData: {
  //     data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
  //     mimeType: "image/png",
  // },
  // };
  useEffect(() => {
    const generateContent = async () => {
      if (prompt) {
        try {
          const result = await model.generateContent([prompt]);
          const text = await result.response.text();
          setresp(marked(text));
        } catch (error) {
          console.error('Error generating content:', error);
        }
      }
    };
    generateContent();
  }, [prompt, image]);
    return (
     
    <AiContext.Provider value={{prompt, setprompt, image, setimage,resp}}>
      {props.children}
      
    </AiContext.Provider>
  )
}

export default AI
