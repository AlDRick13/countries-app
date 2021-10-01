import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

//VIEWS
import CountryDetails from "./views/CountryDetails";
import CountryPage from "./views/CountryPage";
import AllCountriesPage from "./views/AllCountriesPage";
import WeatherPage from "./views/WeatherPage";
//styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <CountryPage />
        </Route>
        <Route path="/details/:country" exact>
          <CountryDetails />
        </Route>
        <Route path="/details/:country/weather" exact>
          <WeatherPage />
        </Route>
        <Route path="/allcountries" exact>
          <AllCountriesPage />
        </Route>
      </Switch>
    </BrowserRouter>
      </header>
    </div>
    
  );
}

export default App;
