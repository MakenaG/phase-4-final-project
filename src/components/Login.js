import React, { useState } from "react"; // Import React and useState hook
import "./Sign.css"; // Import stylesheet

function Login() {
  // Define state variables using useState hooks
  const [email, setEmail] = useState(""); // email state variable
  const [password, setPassword] = useState(""); // password state variable
  const [error, setError] = useState(false); // error state variable

  // Redirect the user to the homepage
  const redirect = () => {
    window.location.replace("/"); // Redirect user to homepage
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!email || !password) {
      setError(true); // If either email or password is empty, set error state variable to true
      return;
    }
    try {
      const response = await fetch("https://localhost:3000/login", { // Send POST request to login endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Include email and password in request body
      });
      if (!response.ok) { // If response is not OK (status code 200-299), set error state variable to true
        setError(true);
        return;
      }
      redirect(); // If successful, redirect user to homepage
    } catch (error) { // Catch any errors
      console.error(error);
      setError(true); // Set error state variable to true
    }
  };

  // Define styles for the form
  const formStyles = {
    border: "1px solid skyblue",
    padding: "20px",
    borderRadius: "10px",
  };

  // Render the component
  return (
    <div className="form-container">
      <form style={formStyles}>
        <h3>Sign In</h3>
        {error && <p>Please fill all fields</p>} // Show error message if error state variable is true
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="johndoe@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login; // Export Login component as default export
