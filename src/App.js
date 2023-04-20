
import './App.css';
import axios from "axios";
import React, { useState } from 'react'
function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [message, setMessage] = useState('');
  const handleIpAddressChange = (event) => {
      setIpAddress(event.target.value);
  };
  
  const handleMessageChange = (event) => {
      setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if(!ipAddress){
    axios.get(`http://${ipAddress}`)
          .then(response => {
              alert('client connect:',response.data);
          })
          .catch(error => {
              console.log(error);
          });}
      axios.get(`http://${ipAddress}/send?message=${message}`)
          .then(response => {
              console.log(response.data);
          })
          .catch(error => {
              console.log(error);
          });
          
  };

  return (
      <div>
          <label htmlFor="ip-address">IP Address:</label>
          <input id="ip-address" type="text" value={ipAddress} onChange={handleIpAddressChange} />

          <label htmlFor="message">Message:</label>
          <input id="message" type="text" value={message} onChange={handleMessageChange} />

          <button onClick={handleSubmit}>Send</button>
      </div>
  );
}

export default App;
