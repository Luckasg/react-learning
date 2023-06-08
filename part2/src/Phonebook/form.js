import { useState } from 'react'
import personsService from '../services/persons'

const Form = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    }
    
    const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
    }
    
    const addPerson = (event) => {
    event.preventDefault();
    
    const personObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
    }

    if (newName === '' || newPhone === '') {
        alert ('Please, enter name and phone')
    } else if (persons.find(person => person.name === personObject.name)) {
        alert(`This person already exist: ${newName}` )
    } else {
        personsService.add(personObject).then(response => {
            setPersons(persons.concat(response))
        })
    }
    
    setNewName('')
    setNewPhone('')
    }

    return (
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} 
                        onChange={handleNameChange} /> <br />
            phone: <input value={newPhone} 
                        onChange={handlePhoneChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default Form;
