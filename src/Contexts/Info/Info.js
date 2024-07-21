import {React,useState, useMemo} from 'react'
import InfoContext from './InfoContext'

const Info = (props) => {
    const [info,setinfo]=useState({name:"",email:"",pic:"",_id:"",date:""})
    const getuser=async()=>{
        const response=await fetch("http://localhost:5000/api/auth/getuser",{
            method: "GET",
            headers:{
                'content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
        });
        const json=await response.json();
        if (json.success){
          setinfo({name:json.user.name,email:json.user.email,pic:json.user.pic,_id:json.user._id,date:json.user.date})
        }
        else{
            alert("LOGIN ERROR");
        }
    }
    useMemo(()=>{
        if(localStorage.getItem('token')){
            getuser();
        }
    },[])
    return (
        <InfoContext.Provider value={{info}}>
            {props.children}
        </InfoContext.Provider>
    )
}
    
export default Info