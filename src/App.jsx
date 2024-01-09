import React from "react";
import { connect } from "react-redux";
import actions from "./utils/actions";
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Rodal from "rodal";
import 'rodal/lib/rodal.css'
import { useForm } from "react-hook-form";

export const App = (props) => {
  const {handleSubmit, register} = useForm()
  return (
    <>
      <div className="card max-w-40 p-2 m-2 d-flex flex-row justify-content-between">
        <button onClick={props.plus} className="btn btn-dark">
          +
        </button>
        <h2>{props.count}</h2>
        <button onClick={props.minus} className="btn btn-dark">
          -
        </button>
      </div>

      <hr />

      <div className="card w-25 p-2 m-2">
        <input onChange={props.ch} value={props.h1Text} type="text" className="border rounded"/>
        <h1>{props.h1Text===""?'Empty':props.h1Text}</h1>
      </div>

      <hr />

      <div className="card max-w-96 p-2 m-2 justify-center items-center gap-1">
        <div className="flex gap-1 justify-between">
        <button onClick={props.plus2} className="btn btn-dark">
          +
        </button>
        <button onClick={props.minus2} className="btn btn-dark">
          -
        </button>
        </div>
        <h2>{props.count2===0?"Sanash boshlanmagan":props.count2}</h2>
      </div>

      <hr />

      <input className="form-control m-2 w-25" onChange={props.repeat} type="number" />
      <h3>{props.h3Text}</h3>

      <hr />

      <div>
        <button onClick={props.iso} className="btn btn-success">Add</button>
        <Rodal height={300} visible={props.isOpen} onClose={props.iso}>
          <form onSubmit={handleSubmit(props.tab)}>
            <input className="form-control mt-4 mb-2" {...register('no')} placeholder="№" type="number" />
            <input className="form-control mb-2" {...register('fName')} placeholder="full name" type="text" />
            <input className="form-control mb-2" {...register('pos')} placeholder="position" type="text" />
            <input className="form-control mb-3" {...register('salary')} placeholder="salary" type="number" />
            <button className="btn btn-success d-block w-10/12 mx-auto">save</button>
          </form>
        </Rodal>
<table className="w-75 table mx-auto">
  <thead>
    <tr>
      <th>№</th>
      <th>Full Name</th>
      <th>Position</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    {
    props.table.map(item=><tr>
      <td>{item.no}</td>
      <td>{item.fName}</td>
      <td>Founder {item.pos}</td>
      <td>{item.salary} $</td>
    </tr>
)
    }
  </tbody>
</table>
      </div>
    </>
  );
};

export default connect((state) => ({ ...state }), actions)(App);
