// Example : 1 -------------------------------------------------------------------------

// import React from "react";
// import ButtonExample from "./ButtonBs";
// import  UncontrolledExample from "./Slideshow";

// function App() {

//   return(
//     <div>
//       <h1>React BootStrap</h1>
//       < UncontrolledExample />
//       <ButtonExample/>
      
//     </div>
//   )
// } export default App

// Example : 2----------------------------------------------------------------------------

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App(){

  return(
    // <Card style={{ width: '18rem' }}>
     
    //   <Card.Body>
    //     <Card.Title>Krushnabhakti Pandya</Card.Title>
    //     <Card.Text>
    //        Web Developer
    //     </Card.Text>
         
    //   </Card.Body>
    // </Card>
    
    <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.2IZbkO39_MGDB49Jpw-ChQHaE7?pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Perfume</Card.Title>
        <Card.Text>
           Rs 20$
        </Card.Text>
         <Button variant="danger">Buy Now</Button>
          
      </Card.Body>
    </Card>

     
  )
 

}export default App
