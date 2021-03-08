import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil'
import { recoilPersist } from 'recoil-persist'



const { persistAtom } = recoilPersist(

  {
    key: "recoil-persist", // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  }
);
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

