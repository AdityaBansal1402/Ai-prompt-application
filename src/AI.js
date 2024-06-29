import React, { createContext, useEffect, useMemo, useState } from 'react'

const AI = () => {
  const AiContext=createContext();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const [prompt,setprompt]=useState();
    const [image,setimage]=useState();
    
    // const image = {
    // inlineData: {
    //     data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
    //     mimeType: "image/png",
    // },
    // };
    useMemo(async()=>{
        const result = await model.generateContent([prompt, image]);
    },[prompt])

    console.log(result.response.text());
  return (
    <AiContext.Provider value={{prompt, setprompt, image, setimage}}>
      {props.children}
    </AiContext.Provider>
  )
}

export default AI
