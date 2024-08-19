import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout.tsx'
import Notes from './notes/Notes.tsx'
import List from './list/List.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/Layout' element ={<Layout/>}>
            <Route index element ={<Notes/>}/>
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </ChakraProvider>
  </StrictMode>,
)
