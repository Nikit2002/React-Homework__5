import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Comments = () => {
    const [arrayComments, setArrayComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setArrayComments(data))
  }, []);  

  return (
    <div>
        <h2>Comments API</h2>
        <ul>
            {arrayComments.map((arrayComment) => (
            <>
                <li>{arrayComment.name}</li>
                <br />
                <li>{arrayComment.email}</li>
                <br />
                <li>{arrayComment.body}</li>
            </>
        ))}
        </ul>
    </div>
    
  )
}

export default Comments;