import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import FetchData from "./Component/FetchData";
import NoPage from './Component/NoPage';
import Forms from './Component/Forms';

const App = () => {
    
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="FetchData"element={<FetchData/>} />
                    <Route path="Forms" element={<Forms/>}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;