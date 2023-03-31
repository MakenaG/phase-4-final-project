import React, {useState} from "react"
import { useNavigate,Link } from "react-router-dom";

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
        
        fetch('https://backend-dc1w.onrender.com/users/login', {
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
            setIsLoggedIn(true);
            navigate("/profile");
          } else {
            throw new Error('Something went wrong');
          }
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
            <label form="email">email</label>
            <input value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label form="pasword">password</label>
            <input value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            <button type="submit">Login</button>
        </form>
        <button className="link-btn"><Link to="/register" >Don't have an account?Register here</Link></button>
        </div>
        </div>
    )
}
