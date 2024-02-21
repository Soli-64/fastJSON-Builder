//import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import GeneratePage from "./pages/generate";
import CreatePatern from "./pages/createPatern";

function App() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index path="home" element={<HomePage/>} />
                    <Route index path="generate" element={<GeneratePage/>} />
                    <Route path="createPatern" element={<CreatePatern/>} />

                    <Route path="*" element={<NoMatch />} />
                
                </Route>
            </Routes>
        </>

    )

}

function NoMatch() {
  return (
    <>
      <div className="fx fx__ctr fx__col">
        <h1>Oh, there is an error.</h1>
        <p>not found: 404</p>
      </div>
    </>
  )
}

function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

export default App
