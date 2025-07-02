import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './form.jsx'

// function App() {
//   const items =['apple' , 'banana' , 'cherrry'];
//   return(
//     <div>
//       <h1>my fruits list</h1>
//       <ul>
//         {items.map((item ,index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
  


//   with object

  
  
// }
//  const users=[
//     {id:1,name:'abhinandan', age:30},
//     {id:2,name:'kumar',age:25},
//     {id:3,name:'pandey',age:26},
//   ];
//   const app =() => {
//     return (
//       <>
//       <h1>This is a list</h1>
//       <ul>
//         {users.map((user)=>(
//           <li key={user.id}>{user.name} is  {user.age} years old.</li>
//         ))}
//       </ul>
//       </>
//     )
//   }



// conditional rendering in lists


// const App =() =>{
//   const users =[
//      { id: 1, name: 'abhi', age: 30 },
//         { id: 2, name: 'kumar', age: 25 },
//         { id: 3, name: 'pandey', age: 35 },
//   ];
//   return (
//       <ul>
//             {users.map((user) => (
//                 user.age > 30 ? (
//                     <li key={user.id}>{user.name} is over 30 years old</li>
//                 ) : (
//                     <li key={user.id}>{user.name} is under 30 years old</li>
//                 )
//             ))}
//         </ul>
//   );
// }


//List with a click event


// const App = () => {
    // const COMPANY = ["Abhi", "kumar", "pandey"];
    // const handleClick = (COMPANY) => {
    //     alert(`You clicked on ${COMPANY}`);
    // };

    // return (
    //     <ul>
    //         {COMPANY.map((COMPANY, index) => (
    //             <button key={index} onClick={() => handleClick(COMPANY)}>
    //                 {COMPANY}
    //             </button>
    //         ))}
    //     </ul>
    // );
    const App = () => {
      return (
        <div>
          <Form />
        </div>
      );
      
    }
export default App
