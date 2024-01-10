import React from "react";
import { connect } from "react-redux";
import actions from "./utils/actions";
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Rodal from "rodal";
import 'rodal/lib/rodal.css'
import { useForm } from "react-hook-form";

export const App = (props) => {
  return (
    <>
    
    </>
  );
};

export default connect((state) => ({ ...state }), actions)(App);
