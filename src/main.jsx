import React from "react";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import {legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import { reducerEmployer } from "./redux/reducerEmployer";
import "./App.css";

// import App from "./GestionProduit/App";
import { BrowserRouter } from "react-router-dom";
import App from "./GestionSalleSport/App";


const root=createRoot(document.getElementById('root'));
const store=createStore(reducerEmployer)
root.render(
  
  <Provider store={store}><App /></Provider>
  
   
  
)
