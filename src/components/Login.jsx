import React, {useState} from "react"
import { useNavigate,Link } from "react-router-dom";
import { saveUser,storeToken } from "./utils/auth";

export const Login = ({setIsLoggedIn}) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
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
        setLoading(true)  
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
            return response.json();
            // setIsLoggedIn(true);
            // navigate("/profile");
          } else {
            response.json().then((err)=>setErrors([err.errors]))
          }
          setLoading(false)
        })
        .then(data => {
          // Store session ID in browser storage
          saveUser(data.user.id)
          storeToken(data.token)
          //  console.log(data.user.id)
          navigate('/profile');
        })
       ;   
    }
    console.log(errors)
    return(
        <div className="form">
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSumbit}>
            <label className="label" form="email">email</label>
            <input className="input" value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="label" form="pasword">password</label>
            <input className="input" value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                        <button className="login" type="submit">Login</button>
                        )
            }
             {errors.length > 0 && (
                <div className="text-danger">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
        </form>
        <Link to="/reset"><p id="link-btn" >Forgot your password? Reset here</p></Link>
        <Link to="/register"><p id="link-btn" >Don't have an account?Register here</p></Link>
        </div>
        </div>
    )
}
