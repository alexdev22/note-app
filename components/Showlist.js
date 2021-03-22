import Createnote from './Createnote'

import {useState, useEffect} from 'react'

const Showlist = () => {

    const [task, setTask] = useState([])
    

useEffect(async () => {

  const data =  await fetch('http://localhost:3001/create/note')
  const notes =  await data.json()
  setTask(notes)
  
}, [])

const deleteNote = (e) => {
  console.log(e.target)
}

    return ( 

      <div className="task-container">
        <h1>Tasks</h1>
          <ul>
        
            {
              task.map( note => (
                <li className="task-list" key={note._id}>{note.title} <button onClick={deleteNote} className="delete-note">X</button></li>
              ))
            }
        </ul>

        <Createnote/>

      </div>
     );
}
 
export default Showlist;