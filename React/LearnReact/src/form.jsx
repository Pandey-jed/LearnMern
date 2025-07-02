import React from 'react';



const Form = () => {
  return (
   <>
   <div>
   <form >
    <label htmlFor="name">name :</label>
     <input type="text" id="name" /><br /> <br />
      <label htmlFor="email">email :</label>
      <input type="email" id="email" /><br /> <br />      
      <label htmlFor="password">password :</label>
      <input type="password" id="password" /><br /> <br />
      <label htmlFor="age">age :</label>
      <input type="number" id="age" /><br /> <br />
      <button onClick={() => {alert("Form submitted");}}>Submit</button>

   </form>
   </div>
   </>
  );
};




export default Form;
