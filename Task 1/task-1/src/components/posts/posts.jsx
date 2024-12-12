import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Posts = () => {
    const [arrayPosts, setArrayPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setArrayPosts(data))
  }, []);  

  return (
    <div>
        <h2>Posts API</h2>
        <ul>
            {arrayPosts.map((arrayPost) => (
            <>
                <li>{arrayPost.title}</li>
                <br />
                <li>{arrayPost.body}</li>
            </>
        ))}
        </ul>
    </div>
    
  )
}

export default Posts;