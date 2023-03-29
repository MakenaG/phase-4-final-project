import React, { useState } from 'react';
import './Passwordreset.css'

const PasswordReset = () => {
  // define states for email, password, error, and success
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // define async function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send POST request using fetch API
      const response = await fetch('https://backend-dc1w.onrender.com/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      // if request is successful, set success state to true and error state to null
      if (response.ok) {
        setSuccess(true);
        setError(null);
      } else {
        // if request fails, parse error message from response body and set error state
        const errorData = await response.json();
        setError(new Error(errorData.message || 'Something went wrong'));
        setSuccess(false);
      }
    } catch (error) {
      // if request throws an error, set error state and success state to false
      setError(error);
      setSuccess(false);
    }
  };

  // render password reset form, error message, and success message
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
         Password Reset
        </label>
        <label>
          Email:
          <input type="email" className='form-control' placeholder='johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          New Password:
          <input type="password" className='form-control' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {error && <p>{error.message}</p>}
      {success && <p>Password reset successful!</p>}
    </div>
  );
};

export default PasswordReset;
