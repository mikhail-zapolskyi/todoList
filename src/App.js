import './app.css';
import React, { useState } from 'react';

function App() {
     const [ todo, setTodo ] = useState([
          {id: 974379439, content: 'my Task One', isDone: false},
          {id: 873498348, content: 'my Task Two', isDone: false},
          {id: 873398348, content: 'my Task Three', isDone: false},
          {id: 873298348, content: 'my Task Four', isDone: false},
     ]);

     const [ value, setValue ] = useState('');

     const trackProgress = () => {
          const notDone = todo.filter(listItem => listItem.isDone !== true);
          return (
               <p>{ notDone.length} remaining of { todo.length }</p>
          )
     }

     const handleChange = (e) => {
          const newTodo = todo.map(listItem => {
               if(listItem.id ===  Number(e.target.id)){
                    return { ...listItem, isDone: !listItem.isDone }
               }
               
               return listItem; 
          });

          setTodo(newTodo);
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          if(!value) {
               return false
          };
          setTodo([...todo, { id: Math.floor(Math.random() * 1000000), content: value, isDone: false }])
          setValue('');
     } 

     const handleDelete = (e) => {
          const newTodo = todo.filter((listItem) => listItem.id !== Number(e.target.id));
          setTodo(newTodo);
     }
     
     return (
          <div className="App">
               <input 
                    value={ value }
                    name='content'
                    onChange={(e) => setValue(e.target.value)}
               />
               <button onClick={ handleSubmit }>Click</button>
               { trackProgress() }
               <ul>
                    {todo.map(listItem => 
                         <li key={ listItem.id }>
                              <span
                                   id={listItem.id} 
                                   onClick={ handleChange } 
                                   className={listItem.isDone === true ? "crossline" : ''}>
                                   { listItem.content }
                              </span>
                              <span id={ listItem.id } onClick={ handleDelete }>X</span>
                         </li>     
                    )}
               </ul>
          </div>

          
     );
}

export default App;
