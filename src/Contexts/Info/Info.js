import {React,useState, useMemo} from 'react'
import InfoContext from './InfoContext'

const Info = (props) => {
    const [credentials,setcredentials]=useState({pic:"",name:"",email:"",password:""})
    return (
        <InfoContext.Provider >
            {props.children}
        </InfoContext.Provider>
    )
}
    
export default Info