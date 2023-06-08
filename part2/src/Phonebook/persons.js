import personsService from '../services/persons'

const Members = ({foundPersons, persons, setPersons}) => {
   const deletePerson = (member) => {
      if (window.confirm(`Do you really want to delete ${member.name}?`)) {
         personsService.del(member.id).then(() => {
            setPersons(persons.filter(function(person) { return person.id !== member.id }))
         })
       }
   }

   return foundPersons.map(person => <div><p key={person.id}>{person.name}: {person.phone}</p><button onClick={() => deletePerson(person)}>delete</button></div> )
}

export default Members;