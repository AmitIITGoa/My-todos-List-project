import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title ,  settitle] =useState("");
  const [desc , setDesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("title or discription should not be empty") ;
    }
    props.addtodo(title , desc) ;
  }
  return (
    <div className="container my-3">
    <h4 align="center">Add a Todo</h4>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">Task Name</label>
            <input type="text" className="form-control" id="taskName" value={title} onChange={(e) => settitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="2" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-info">Add Task</button>
        </form>
      </div>
    </div>
  </div>
);
};


export default AddTodo;
