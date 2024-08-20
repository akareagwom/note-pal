import { Box } from "@chakra-ui/react";
// import Record from "./components/Record";
import CardComp from "./components/CardComp";
import NoteCanva from "./components/noteCanva";
import { useState } from 'react';
// import ListCanva from "./components/ListCanva";

const   Notes =()=>{
    const [note, setNote] = useState<string>('');
    const [cards,setCards] = useState<string[]>([])
  
    return (
        <Box  h={'100vh'}>
            {/* <NoteCanva cards={cards} setCards={setCards} note={note} setNote={setNote} /> */}
            {/* <ListCanva/> */}
           <Box>
            {/* <Record/> */}

             <CardComp cards={cards} />
            </Box> 
     
        </Box>
    )
}

export default  Notes;