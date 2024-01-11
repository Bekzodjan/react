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
      <h3 className="">Simple Task Organizer System</h3>
      <div className="flex justify-between gap-2 py-4">
        <input
        value={props.taskObj.name}
          onChange={props.changeInp}
          type="text"
          className="form-control"
        />
        <button
          onClick={props.add}
          className="btn btn-primary d-flex items-center"
        >
          <span className="h-9 leading-9 text-white text-3xl block">Add</span>{" "}
          <box-icon size={"35px"} name="plus" color="#ffffff"></box-icon>
        </button>
      </div>
      <div className="flex justify-between gap-2 items-start">
        <div className="card p-2 w-8/12 min-h-40 flex flex-col justify-between">
          <h3>My Task</h3>
          {props.tasks.map((itm,i) => (
            <div className="flex justify-between p-2">
              <h3>{itm.name}</h3>
              <div className="flex gap-2">
                <button onClick={()=>props.edit(i)} className="btn border-info"><box-icon size={'30px'} name='check' color='#07d7f9' ></box-icon></button>
                <button onClick={()=>props.changeStatus(i)} className="btn border-danger"><box-icon size={'30px'} name='trash' type='solid' color='#f91c07' ></box-icon></button>
              </div>
            </div>
          ))}
          <button onClick={props.clearAll} className="btn btn-danger w-36 d-flex items-center gap-1">
            <span className="h-6 leading-6 text-white text-2xl block">
              Clear All
            </span>{" "}
            <box-icon
              size={"24px"}
              name="error"
              type="solid"
              color="#ffffff"
            ></box-icon>
          </button>
        </div>
        <div className="card w-4/12 p-2 min-h-40 flex flex-col justify-between">
          <h3>Recently Deleted</h3>
          {props.delTasks.map((itm,i) => (
            <div className="flex justify-between p-2">
              <h3>{itm.name}</h3>
              <div className="flex gap-2">
                <button onClick={()=>props.changeStatus2(i)} className="btn btn-primary">Undo</button>
              </div>
            </div>
          ))}
          <button onClick={props.deleteAll} className="btn btn-danger w-40 d-flex items-center gap-1">
            <span className="h-6 leading-6 text-white text-2xl block">
              Delete All
            </span>{" "}
            <box-icon
              size={"24px"}
              name="error"
              type="solid"
              color="#ffffff"
            ></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({ ...state }), actions)(App);
