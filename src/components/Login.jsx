import React, {useState} from "react"
export const Login = (props) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });
      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(formData);
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
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account?Register here</button>
        </div>
        </div>
    )
}
