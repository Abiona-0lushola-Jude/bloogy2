import React, {useState } from 'react'
import TodoForm from './TodoForm'
import '../form.css'
import TodoList from './TodoList'
import axios from 'axios'

const Todo = () => {

  const [todoForm, setTodoForm] = useState({
    title:'',
  })

  function HnandleDelete(event){
      axios.delete(`/todo/delete/${event}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))

      window.location.reload()
  }


  function handleSubmit (event){
        event.preventDefault()
        axios.post('/post/todo', todoForm)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        window.location.reload()
    }

    function handleChange(event){
      const {name, value,type,checked} = event.target
      setTodoForm(prevState=>{
          return{
              ...prevState,
              [name]: type === "check-box" ? checked : value 
          }
      })
  }

// Reset Input Field handler
  const resetInputField = () => {
    setTodoForm("");
  };
  return (
    <div className='form-container'>
      <h1>Todo Section</h1>
      <TodoForm 
      data={todoForm}
      onClick={handleSubmit}
      handleChange={handleChange}
      reset={resetInputField}
      />
      <TodoList 
      data={todoForm}
      hnandleDelete={HnandleDelete}
      />
    </div>
  )
}

export default Todo
