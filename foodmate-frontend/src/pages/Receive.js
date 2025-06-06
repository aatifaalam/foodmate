import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Receive() {
  const [foodPosts, setFoodPosts] = useState([]);

  useEffect(() => {
    const fetchFoodPosts = async () => {
      try {
        const response = await axios.get('/api/food');
        setFoodPosts(response.data);
      } catch (error) {
        console.error('Error fetching food posts:', error);
      }
    };

    fetchFoodPosts();
  }, []);

  return (
    <div>
      <h1>Available Food Posts</h1>
      <ul>
        {foodPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Location: {post.location}</p>
            <p>Quantity: {post.quantity}</p>
            <p>Expiry: {new Date(post.expiryTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Receive; 