import { useEffect, useState } from 'react'

const Search = ({persons, setFoundPersons}) => {
    const [searchName, setSearchName] = useState('');

    const handleSearchName = (event) => {
        setSearchName(event.target.value)
      }

    useEffect(() => {
        if (searchName.length > 0) {
            const found = persons.filter(person => {
            return person.name.includes(searchName)
            })
            setFoundPersons(found)
        } else {
            setFoundPersons(persons);
        }
    }, [searchName]);
    
    return (
        <>
            <p>
                filter shown with: <input value={searchName} 
                onChange={handleSearchName} />
            </p>
            <br />
          <hr />
        </>
    )
  }
  
  export default Search;
