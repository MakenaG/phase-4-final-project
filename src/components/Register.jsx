import React, {useState} from "react"
import { useNavigate,Link } from "react-router-dom";

export const Register = (props) => {
    const [formData, setFormData] = useState({
        username:'',
        email: "",
        password: "",
        
    
      });
    
      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    let navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault()
        fetch('https://backend-dc1w.onrender.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            // setIsLoggedIn(true);
            navigate("/login");
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
          <h2>Register</h2>
        <form className="register-form" onSubmit={handleSumbit}>
            <label  className="label" form="username">Username</label>
            <input className="input" value={formData.username} name="username" onChange={handleChange} id="username" placeholder="username"/>
            <label className='label' form="email">email</label>
            <input className="input" value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="label" form="pasword">password</label>
            <input className="input" value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            <button className="login" type="submit">Register</button>
        </form>
        <p id="link-btn" ><Link to="/login">Already have an account?Login here</Link></p>
        </div>
        </div>
    )
}