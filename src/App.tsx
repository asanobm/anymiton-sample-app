import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios, { AxiosResponse } from 'axios';
import { API } from './config/Api';
import { ANYMOTION_CLIENT_ID, ANYMOTION_CLIENT_SECRET } from './config/Env';
import { AccessToken } from './interfaces/AccessToken';

const App:React.FC = () => {

  const [token, setToken] = useState<AccessToken>()

  useEffect(() => {
    const getToken = async () => {
      await Axios.post(API.GET_TOKEN, {
        grantType: "client_credentials",
        clientId: ANYMOTION_CLIENT_ID,
        clientSecret: ANYMOTION_CLIENT_SECRET
      }).then((res: AxiosResponse<AccessToken>) => setToken(res.data))
    }
    if(!token) {
      getToken()
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
