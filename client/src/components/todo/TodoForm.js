import React from 'react'


const TodoForm = ({data, onClick, handleChange, reset}) => {
  return (
    <div>
        <form action="/create/todo" method="post">
            <label htmlFor="title">Title: </label>
            <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder='Title'
            value={data.title}
            onChange={ handleChange}
             />
             <div className="btn">
                <button type='reset' onClick={reset}>Cancel</button>
                <button type="submit" onClick={onClick}>Add Todo</button>
             </div>
        </form>
    </div>
  )
}

export default TodoForm
