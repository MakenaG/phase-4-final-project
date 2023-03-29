import React, { useEffect, useState } from 'react';
import './Sign.css';

function SignUp() {
  // Initialize the form values and error messages as empty strings
  const initialValues = { firstname: "", lastname:"", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Keep track of whether the form has been submitted
  const [isSubmit, setIsSubmit] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form values and set the error messages
    setFormErrors(validate(formValues));
    // Set the "isSubmit" flag to true to indicate that the form has been submitted
    setIsSubmit(true);
  };

  // Reset the form values to their initial state when there are no errors and the form has been submitted
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
    }
  }, [formErrors]);

  // Form validation function
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 letters";
    }
    return errors;
  };

  // Handle form input changes and update the form values accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  // Styling for the form element
  const formStyles = {
    border: "1px solid skyblue",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div className='form-container'>
        
        <form style={formStyles} onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="John"
            name='firstname'
            value={formValues.firstname}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.firstname}</p>
        <div className="mb-3">
          <label>Last Name</label>
          <input 
           type="text" 
           className="form-control" 
           placeholder="Doe" 
           name='lastname'
           value={formValues.lastname}
           onChange={handleChange}
           />
        </div>
        <p>{formErrors.lastname}</p>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="johndoe@mail.com"
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*******"
            name='password'
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        
      </form>  
    </div>
  )
}

export default SignUp