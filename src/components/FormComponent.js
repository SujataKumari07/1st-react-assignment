import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './FormStyles.css'; 

const FormComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    let valid = true;
    const newErrors = { ...formErrors };

    Object.keys(formData).forEach((key) => {
      if (formData[key] === '' && key !== 'password') {
        newErrors[key] = 'This field is required';
        valid = false;
      } else {
        newErrors[key] = '';
      }
    });

    setFormErrors(newErrors);

    if (valid) {
      // Redirect to success page after successful submission
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h2>REGISTRATION FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {formErrors.phone && <span className="error">{formErrors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
          </select>
          {formErrors.country && <span className="error">{formErrors.country}</span>}
        </div>

        <div className="form-group">
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Mumbai">New York</option>
            <option value="Toronto">Toronto</option>
            <option value="Paris">Paris</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Beijing">Beijing</option>
          </select>
          {formErrors.city && <span className="error">{formErrors.city}</span>}
        </div>

        <div className="form-group">
          <label>Pan Number:</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          {formErrors.panNo && <span className="error">{formErrors.panNo}</span>}
        </div>

        <div className="form-group">
          <label>Aadhar Number:</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          {formErrors.aadharNo && <span className="error">{formErrors.aadharNo}</span>}
        </div>

        <button type="submit" disabled={!Object.values(formData).every((value) => value !== '')}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent; 

