import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const NewNote = () => {
    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)
    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch({
          type: 'NEW_NOTE',
          payload: {
            content,
            id: getId(),
            votes: 0
          }
        })
      }

    return (
        <>
          <h2>create new</h2>
          <form onSubmit={addNote}>
              <div><input name="note" /></div>
              <button type="submit">create</button>
          </form>
        </>
        )
  }
  
export default NewNote;