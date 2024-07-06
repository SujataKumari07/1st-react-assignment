
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessComponent = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h2>Registration Successful!</h2>
      <h3>Details Submitted:</h3>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>Phone Number: {formData.phone}</li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>Pan Number: {formData.panNo}</li>
        <li>Aadhar Number: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default SuccessComponent;
