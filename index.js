
 //const fs = require('fs');

//rest api ..........
//app.get('/', (req, res) => {
  //res.send('Hello World!');

//});
// 👉 Contact route
//app.get('/contact', (req, res) => {
 // res.send('Contact us at contact@example.com 📧');
//});

// 👉 Custom API route
///app.get('/api/info', (req, res) => {
  //res.json({
   // appName: 'My First Express App',
   // version: '1.0.0',
   // author: 'Amna'
  //});

//});

//fs module .......

//......//syncblocking code.......................................................  imp may be usefull but not give benfit to  more user fast

// 1.........fs.writeFileSync('message.txt', 'Hello from Node.js');....file create and write data

//........//Async non blocking code................................................imp usefull and give benfit give response to user fast

//1.........fs.readFile('message.txt', 'utf8', (err, data) => {
//   if (err) throw err;

//2.........const data = fs.readFileSync('message.txt', 'utf8');...........read file data 
//console.log(data);

//3..........fs.appendFileSync('message.txt', ' hiiii\n');............append data to file

//4..........fs.copyFileSync('message.txt', 'message2.txt');

//5..........fs.unlinkSync('message2.txt');


//app.listen(5000, () => {
 // console.log('Server is running on http://localhost:5000');
//});




//HTTP MODULE............                                         ... HTTPS full form Hyper Text Transfer Protocol Secure...

//const http = require ('http');
//const server = http.createServer((req, res) => {
  //console.log (req.headers);
   // res.end('Hello, World! This is the home page.')});


   // server.listen(3000, () => { console.log('Server started'); });


//HttP methods......................
//Get, Post, Put, Delete, Patch
//GET - to get data from server
//POST - to send data to server
//PUT - to update data
//DELETE - to delete data
//PATCH - to update partial data





  

   //express........... 

const express = require('express');
const app = express();

function myHandler(req, res) {
}

//MIDDLEWARE.........
app.use((req, res, next) => {
  console.log('Hello from middleware 1');
  next();
});

//app.use((req, res, next) => {
  //console.log('Hello from middleware 2');
  //return res.end('Hey');
//});

//ROUTES...........
app.get('/', (req,res) => {
  res.send(`Hello ${req.query.name}`);
})

app.get('/about', (req,res) => {
  res.send('i am amna shaban.i am a full stack web developer.');
})


app.listen(5000, () => {
 console.log('Server is running on http://localhost:5000');
});