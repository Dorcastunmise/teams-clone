

# Real Time Chat Application
  This application built using ReactJS, Chat Engine & RESTful Web Service.
  
  ![s2](https://user-images.githubusercontent.com/17202632/26983616-1892f3c2-4d45-11e7-8027-0fb74814f770.PNG)

# Features
  <li>Uses React as the application Framework.</li> 
  <li>Real-time communication between a client and a server using Socket.io.</li>
  <li>Uses local storage  for storing messages and querying data.</li>
  <li>Uses RESTful Web Service for serve different platforms</li> 
   
# Installation

### Running Locally

Make sure you have Node.js and npm install.

  1. Clone or Download the repository 
    <pre>git clone https://github.com/Dorcastunmise/teams-clone.git
    $ cd teams-clone</pre>

  2. Install Vite
      <pre>npm create vite@latest</pre>

  3. Install Dependencies
      <pre>npm install axios react-chat-engine</pre>
      
  4. Start the Application
     <pre>npm run dev</pre>
  Application runs from localhost:http://127.0.0.1:5173/.
      
      
 ## Sockets
    
   Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using Web sockets. This is made possible by Socket.io.

   The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events. 

## RESTful

  Using HTTP requests, we can use the respective action to trigger every of these four CRUD operations.    
    <li>POST is used to send data to a server — Create</li>
    <li>GET is used to fetch data from a server — Read</li>
    <li>PUT is used to send and update data — Update</li>
    <li>DELETE is used to delete data — Delete  </li>
    
  
  

