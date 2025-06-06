import React, { useState } from 'react';
import axios from 'axios';

function Donate() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    quantity: '',
    expiry: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/food', formData);
      alert('Food post created successfully!');
    } catch (error) {
      console.error('Error creating food post:', error);
    }
  };

  return (
    <div>
      <h1>Donate Food</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
        <input type="datetime-local" name="expiry" value={formData.expiry} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Donate; 