import React from "react";
import { connect } from "react-redux";
import actions from "./utils/actions";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useForm } from "react-hook-form";

export const App = (props) => {
  return (
    <>
      <div className="card w-25 mx-auto p-2">
        <div className="flex justify-between gap-2 p-2 border mb-2">
          <input
            type="text"
            onChange={props.changeInp}
            className="form-control"
          />
          <button onClick={props.addProduct} className="btn btn-success">
            ok
          </button>
        </div>
        {props.products.map((itm,i) => (
          <div className="flex justify-between mb-2 border p-2">
            <h3>{itm.name}</h3>
            <div className="flex justify-center gap-2">
              <button onClick={()=>props.changeCount('plus',i)} className="btn btn-dark">+</button>
              <h3>{itm.count}</h3>
              <button onClick={()=>props.changeCount('minus',i)} className="btn btn-dark">-</button>
            </div>
            <button onClick={()=>props.deleteItem(i)} className="btn btn-danger">X</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default connect((state) => ({ ...state }), actions)(App);
