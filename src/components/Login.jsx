import React, {useState} from "react"
import { useNavigate,Link } from "react-router-dom";
import { saveUser,storeToken } from "./utils/auth";

export const Login = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });

      let navigate = useNavigate();


      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    const handleSumbit = (e) => {
        e.preventDefault()
          // Client-side validation
        if (!formData.email || !formData.password) {
          alert("Please enter your email and password.");
          return;}
              
        fetch('http://127.0.0.1:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            return response.json();
            // setIsLoggedIn(true);
            // navigate("/profile");
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => {
          // Store session ID in browser storage
          saveUser(data.user.id)
          storeToken(data.token)
           console.log(data.user.id)
         
  
          navigate('/profile');
        })
        .catch(error => {
          console.error(error);
        });   
    }
    return(
        <div className="form">
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSumbit}>
            <label className="label" form="email">email</label>
            <input className="input" value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="label" form="pasword">password</label>
            <input className="input" value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            <button className="login" type="submit">Login</button>
        </form>
        <p  id="link-btn" ><Link to="/register"  >Don't have an account?Register here</Link></p>
        </div>
        </div>
    )
}
