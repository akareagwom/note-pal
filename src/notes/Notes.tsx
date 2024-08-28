import { Box } from "@chakra-ui/react";
// import Record from "./components/Record";
import CardComp from "./components/CardComp";
import NoteCanva from "./components/noteCanva";
import { useState } from 'react';
// import ListCanva from "./components/ListCanva";
import { getFromLocalStorage } from '../localStorageUtils'

const   Notes =()=>{
    const [note, setNote] = useState<string>('');
    const [cards,setCards] = useState<string[]>(()=>{
        return getFromLocalStorage('cards') || [];
    })
    // const [showCard, setShowCard] = useState(false);
    const [name, setName] = useState('');

    const handleName =()=>{
        setName(note);
    }
  
    return (
        <Box  h={'100vh'}>
            {/* <NoteCanva cards={cards} setCards={setCards} note={note} setNote={setNote} /> */}
            {/* <ListCanva/> */}
           <Box>
            {/* <Record/> */}

             <CardComp cards={cards} setCards={setCards} note={note} setNote={setNote} />
             
            </Box> 
     
        </Box>
    )
}

export default  Notes;