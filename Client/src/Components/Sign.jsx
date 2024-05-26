import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Sign.css';

export const Sign = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    pfpurl: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/web_project/public/register.php', formData)
      .then(response => {
        if (response.data.success) {
          alert('Registration successful');
        } else {
          alert('Registration failed: ' + response.data.error);
        }
      })
      .catch(error => {
        console.error('There was an error registering!', error);
      });
  };

  return (
    <div className='sign'>
      <h2>Sign in Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Username:
          <input type='text' name='username' value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password' value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type='text' name='pfpurl' value={formData.pfpurl} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
