import Layout from './components/Layout.tsx'
import Notes from './notes/Notes.tsx'
import List from './list/List.tsx'
import NoteCanva from './notes/components/noteCanva.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Layout' element ={<Layout/>}>
        <Route index element ={<Notes/>}/>
        <Route path="list" element={<List />} />
        {/* <Route path="noteCanva" element={<NoteCanva  cards={cards} setCards={setCards} note={note} setNote={setNote} />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
