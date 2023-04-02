import '../Extra.css'
import React,{useEffect,useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faUser } from "@fortawesome/free-solid-svg-icons";
import { getUser,getToken } from "../utils/auth";


function Profile(){
    const [user,setUser] = useState([])
    const [errors,setErrors] = useState([])
    const userId = getUser()
    const token = getToken()
    useEffect(()=>{
        fetch(`https://backend-dc1w.onrender.com/users/${userId}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res =>{
          if(res.ok){
            res.json().then((data)=>{
              setUser(data)
              
            })
          }else{
            res.json().then((err)=>setErrors([err.errors]))
          }
        },[])
})
    return(
        <div className="bg-warning"  id="VideoContainer">
             
            <div className="containera py-5">
            {errors.length > 0 && (
                <div className="text-danger">
                    {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                    ))}
                </div>
                )}
            <div className="d-flex justify-content-end align-items-center mb-5">
                    <FontAwesomeIcon icon={faUser} className="mr-2" size="lg" />
                    <strong>{user.username}</strong>
                </div>
                <center>
               <h1>Hi there {user.username}</h1>
               <p>welcome to your own personal space</p>
               </center>
            </div>
        </div>
    )
}

export default Profile