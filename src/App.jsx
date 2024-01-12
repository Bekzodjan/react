import React from "react";
import { connect } from "react-redux";
import actions from "./utils/actions";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useForm } from "react-hook-form";
import "boxicons";

export const App = (props) => {
  return (
    <div className="py-3 px-5">
    </div>
  );
};

export default connect((state) => ({ ...state }), actions)(App);
