import { useState, useEffect } from 'react'
import Course from "./Course/Index"
import Phonebook from "./Phonebook/index"
import coursesService from './services/courses'
import personsService from './services/persons'

const App = () => {
  const [courses, setCourses] = useState([]) 

  useEffect(() => {
    coursesService
      .getAll()
      .then(response => {
        setCourses(response.data)
      })
  }, [])

  const updateCoursesNotes = (note, id) => {
    setCourses(prev => {
      console.log('%cApp.js line:51 object', 'color: #007acc;', prev); 
      const foundCourse = prev.map(item => {
        if (item.id === id) {
          item.parts = [...item.parts, note]
        }

        return item;
      });
      return foundCourse
    })
  }

  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <>
      { <Phonebook persons={persons} setPersons={setPersons} /> }
      <br /> <hr /> <br />
      { courses.map(course => <Course key={course.id} course={course} updateCoursesNotes={updateCoursesNotes} />) }           
    </>
  )
}

export default App;
