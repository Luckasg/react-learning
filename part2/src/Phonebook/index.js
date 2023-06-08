import { useEffect, useState } from 'react'
import Search from './search'
import Form from './form'
import Members from './persons'

const Persons = ({persons, setPersons}) => {
    const [foundPersons, setFoundPersons] = useState(persons);

    useEffect(() => setFoundPersons(persons), [persons])
  
    return (
      <>
        <h2>Phonebook</h2>
        
        <Search  setFoundPersons={setFoundPersons} />

        <Form persons={persons} setPersons={setPersons} />

        <h2>Numbers</h2>
        <Members foundPersons={foundPersons} persons={persons} setPersons={setPersons} />
        
      </>
    )
  }
  
export default Persons;
