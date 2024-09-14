import Layout from './components/Layout.tsx'
import Notes from './notes/Notes.tsx'
import List from './list/List.tsx'
import NoteCanva from './notes/components/noteCanva.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './index.tsx'
import {useState} from 'react'
import Recorder from './notes/components/Recorder.tsx'
import Sketches from './sketches/Sketches.tsx'


interface Props {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  cards: string[];
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
}

const App: React.FC<Props> = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [note, setNote] = useState<string>('');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Layout' element ={<Layout/>}>
        <Route index element ={<Notes/>}/>
        <Route path="list" element={<List />} />
        <Route path="noteCanva" element={<NoteCanva  cards={cards} setCards={setCards} note={note} setNote={setNote} />} />
        <Route path='recorder' element={<Recorder/>}/>
        {/* <Route path='sketches' element={<Sketches/>}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
