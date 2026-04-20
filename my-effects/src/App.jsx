// import { useEffect } from "react";

// function App(){

//   useEffect(()=>{
//     console.log("Component Loaded")
//   },[])


//   return(
//     <div>
//       <h1>React Hooks</h1>
//     </div>
//   )
// }export default App

// import { useEffect,userState } from "react";

// function App(){

//   const [user, setusers] = userState([])

//   useEffect(()=>{


//     fetch("https://jsonplaceolder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => setUsers(data))
     
//   },[])


//   return(
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(function(xyz){

//           <p key={xyz.id}> {xyz.name}</p>

//         })}
//       </ul>
//     </div>
//   )
// }export default App

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((xyz) => (
//           <li key={xyz.id}>{xyz.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setEmployees(data));
//   }, []);

//   return (
//     <div style={{ 
//       backgroundColor: "#e3f2fd", 
//       minHeight: "100vh", 
//       padding: "20px",
//       fontFamily: "Arial, sans-serif" 
//     }}>
//       <h1 style={{ textAlign: "center", color: "#1565c0" }}>Employee Dashboard</h1>
      
//       <table style={{ 
//         width: "90%", 
//         margin: "20px auto", 
//         borderCollapse: "collapse", 
//         backgroundColor: "white",
//         boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
//       }}>
//         <thead>
//           <tr style={{ backgroundColor: "#1565c0", color: "white" }}>
//             <th style={{ padding: "12px", border: "1px solid #ddd" }}>Employee ID</th>
//             <th style={{ padding: "12px", border: "1px solid #ddd" }}>Name</th>
//             <th style={{ padding: "12px", border: "1px solid #ddd" }}>Email ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id} style={{ textAlign: "center" }}>
//               <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.id}</td>
//               <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.name}</td>
//               <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div style={{ 
      backgroundColor: "#ffeef8", 
      minHeight: "100vh", 
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ textAlign: "center", color: "#d81b60" }}>Employee Dashboard</h1>
      
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "15px", 
        alignItems: "center" 
      }}>
        {employees.map((emp) => (
          <div key={emp.id} style={{ 
            backgroundColor: "#ffffff", 
            width: "80%", 
            padding: "15px", 
            borderRadius: "10px", 
            borderLeft: "5px solid #ff80ab",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
          }}>
            <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "bold" }}>
               Name: {emp.name}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
               Email: {emp.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;