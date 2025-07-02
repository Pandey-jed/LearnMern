import React from 'react';
// Importing React to use JSX syntax
const card = () => {
  return (
    <div>
        <h1 id ='user-name'>Abhinandan</h1>
        <img src="./photo.jpg" alt="photo" />
        <p id='user-bio'>I am a software developer</p>
        <button id='user-button'>Follow</button>
    </div>
  )
}

export default card