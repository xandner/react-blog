import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";
import Home from "./components/home";
import Header from "./components/navigation/header";
import MainLayout from "./hoc/mainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
      <GoogleFontLoader
        fonts={[
          { font: "Roboto", weights: [300, 400, 900] },
          { font: "Fredoka One", weights: [300, 400, 900] },
        ]}
      />
    </BrowserRouter>
  );
};

export default AppRoutes;
