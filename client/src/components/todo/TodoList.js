import React,{useState, useEffect} from 'react'
import axios from 'axios'
import AllTodo from './AllTodo'

const TodoList = ({data, hnandleDelete}) => {
  const [allTodo, setAllTodo] = useState([])
  useEffect(()=>{
    axios.get('/get/todo')
    .then(res => setAllTodo(res.data))
    .catch(err => console.log(err))
  }, [])

  // function handleChange(){
  //   setAllTodo(prev=> {
  //     return{
  //       ...prev,
  //       checked: !prev.checked
  //     }
  //   })
  // }
  return (
    <div>
      {allTodo.map(element => {
        return(
           <AllTodo 
           todo={element} 
           key={element.title} 
           data={data} 
           hnandleDelete={hnandleDelete}
           />
        )
      })}
    </div>
  )
}

export default TodoList
