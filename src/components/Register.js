function SignUp() {
    // Initialize the form values and error messages as empty strings
    const initialValues = {username:"", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
  
    // Keep track of whether the form has been submitted
    const [isSubmit, setIsSubmit] = useState(false);
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Validate the form values and set the error messages
      setFormErrors(validate(formValues));
      // Set the "isSubmit" flag to true to indicate that the form has been submitted
      setIsSubmit(true);
  
      // If there are no errors, submit the form data to the server
      if (Object.keys(formErrors).length === 0) {
        try {
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
          });
          const data = await response.json();
          console.log(data);
          // Optionally, reset the form to its initial state after the request has completed
          setFormValues(initialValues);
        } catch (error) {
          console.error(error);
        }
      }
    };
  
  return (
    <div className='form-container'>
        
        <form style={formStyles} onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>User Name</label>
          <input 
           type="text" 
           className="form-control" 
           placeholder="Doe" 
           name='username'
           value={formValues.username}
           onChange={handleChange}
           />
        </div>
        <p>{formErrors.username}</p>
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