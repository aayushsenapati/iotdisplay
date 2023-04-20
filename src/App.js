
import './App.css';
import axios from "axios";
import React, { useState } from 'react'
import '@fontsource/roboto/500.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



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
        if (!ipAddress) {
            axios.get(`http://${ipAddress}`)
                .then(response => {
                    alert('client connect:', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axios.get(`http://${ipAddress}/send?message=${message}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    };

    return (
        <ThemeProvider theme={darkTheme} id='app'>
            <div className="form">
                <div className="inputDiv">
                    <CssBaseline/>
                        {/* <label htmlFor="ip-address">IP Address:</label> */}
                        <TextField InputLabelProps={{ shrink:'true' }} id="outlined-basic" label="IP Address" variant="outlined" value={ipAddress} onChange={handleIpAddressChange} />
                        {/* <input id="ip-address" type="text" value={ipAddress} onChange={handleIpAddressChange} /> */}
                        {/* <label htmlFor="message">Message:</label> */}
                        <TextField InputLabelProps={{ shrink:'true' }} id="outlined-basic" label="PRN" variant="outlined" value={message} onChange={handleMessageChange}/>
                        {/* <input id="message" type="text" value={message} onChange={handleMessageChange} /> */}
                </div>
                <Button variant="outlined" id='send' onClick={handleSubmit}>Send</Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
