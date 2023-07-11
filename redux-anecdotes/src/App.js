import NewNote from './components/creationgANote'
import Noteslist from './components/notesList'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Noteslist />
      <NewNote />
    </div>
  )
}

export default App