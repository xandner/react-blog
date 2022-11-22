import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader"
import Home from "./components/home"
import Header from "./components/navigation/header"

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GoogleFontLoader
        fonts={[
          { font: "Roboto", weights: [300, 400, 900] },
          { font: "Fredoka One", weights: [300, 400, 900] }
        ]}
      />
    </BrowserRouter>
  )
}

export default AppRoutes;