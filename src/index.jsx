import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import './index.css';
import App from './App';
import { ContextProvider } from "./Components/utils/global.context";
import Layout from './Components/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="dentist/:id" element={<Detail />} />
              <Route path="contacto" element={<Contact />} />
              <Route path="favs" element={<Favs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </ContextProvider>
  </React.StrictMode>
);


