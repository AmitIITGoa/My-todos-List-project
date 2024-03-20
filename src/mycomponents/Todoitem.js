import React from 'react';

const Todoitem = (props) => {
  return (
    <div className='container mt-3'>
      <div className="card p-3">
        <h4 className="mb-2">{props.todo.sno }. {props.todo.title}</h4>
        <p className="mb-3">{props.todo.desc}</p>
        <button className="btn btn-success" onClick={() => { props.onDelete(props.todo) }}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
