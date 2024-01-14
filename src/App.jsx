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
    <div className="p-3">
      <h1>What do I need to do today?</h1>
      <div className="flex gap-2">
        <h4>Search: </h4>
        <input onChange={props.search} type="text" className="border rounded-3" />
        <h4>Order by: </h4>
        <select onChange={props.order} className="border rounded-3">
          <option value="newToLast">Oldest to Newest</option>
          <option value="oldToNew">Newest to Oldest</option>
        </select>
      </div>
      <p className="text-2xl my-3">
        Items I Need To Do <br /> Check off items once you have completed them
      </p>
      <hr />
      <div className="mb-2 min-h-24">
        {props.todos.map((itm,i) => (
          <div className="flex justify-between border-b-2 border-black mb-3">
            <div className="flex gap-2">
              <input type="checkbox" onChange={()=>props.check(i)} checked={itm.completed} />
              <p className="text-2xl">{itm.active?<input onChange={(e)=>props.changeE(e,i)} type="text" className="border rounded-lg p-1 border-black" value={itm.name} />:itm.name}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>props.addE(i)} className="btn btn-warning">
                {itm.active ? "Done with my edits" : "Edit"}
              </button>
              <button onClick={()=>props.deleteI(i)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
        {
          props.todos.length>0&&<button onClick={props.clear} className="btn btn-success">Clear checked items</button>
        }
      </div>
      <h4>New task</h4>
      <div className="flex gap-5">
        <input
          type="text"
          value={props.inpValue}
          onChange={props.change}
          placeholder="What do you to do next? (at least 5 characters)"
          className="form-control w-75"
        />
        <button onClick={props.add} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default connect((state) => ({ ...state.todoReducer }), actions)(App);
