import React, { useEffect, useMemo, useState } from 'react'

const AI = () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const [promt,setprompt]=useState();
    
    const image = {
    inlineData: {
        data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
        mimeType: "image/png",
    },
    };
    useMemo(async()=>{
        const result = await model.generateContent([prompt, image]);
    },[prompt])

    console.log(result.response.text());
  return (
    <div>
      
    </div>
  )
}

export default AI
