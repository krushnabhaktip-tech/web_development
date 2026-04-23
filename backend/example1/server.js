// STEP 1 : Importing the required modules
// How to import the required modules in Node.js by using the require('modules-name') function

const express = require('express')

// STEP 2 : Creating an instance of the express application
// How to create an instance of the express application by calling the express() function
const app = express()

//  STEP 3 : Defination a route handler for the root URL ('/')
// How to define a route handler for the root URL ('/') by using the app.get() method 
//Get method - It Means To Get / Retrieve Data From The Server
//When  user Make a Request To The Room URL ('Url - API') Then The Server Will Response with Data
    
app.get('/',(req,res)=>{

    res.send('Hello Backend Server in Running')

})

// 2. Defination a route /Path - API
app.get('/login',(req,res)=>{

     res.send('This is Login API  - Fill The Login Form')

})

//STEP 4: Starting the Server and listening on a specific post
// How to Start the server and listen on a soecific port by using the app.listen(port,callback) function
// The Server Will listen on Port 3000 And When The It Will Log A Massage To The Console
// What is port - It Is A Communication Endpoint That Server To Receive Request From Clients

app.listen(3000, ()=>{
    console.log('Server Is Running On Port 3000 - http://localhost:3000')
})

// example 2:

const url = require('url')

var add1 = ' https://www.youtube.com/watch?v=a6hp-mMNkR0&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&start_radio=1&rv=yALvgZi-84o '

var add2 = ' https://www.youtube.com/watch?v=yALvgZi-84o&list=RDyALvgZi-84o&start_radio=1'

// Step 2 : Parsing the URL using the url.parse() method

var parsedUrl1 = url.parse(add1)
var parsedUrl2 = url.parse(add2)

// Step 3 : Logging the parsed URL components to the console

console.log('Parsed URL 1:', parsedUrl1)
console.log('Parsed URL 2:', parsedUrl2)
