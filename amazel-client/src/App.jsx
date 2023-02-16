import React from "react";
import { Route, Routes } from "react-router-dom";
import Config from "./components/config";
import MainUI from "./components/mainui";
import Summary from "./components/summary";

function App() {
    return <Routes>
        <Route path="/" element={<MainUI/>}>
            <Route index element={<Summary/>}/>
            <Route path="config" element={<Config/>}/>
        </Route>
    </Routes>
}

export default App;