import { Box } from "@chakra-ui/react";
// import Record from "./components/Record";
// import CardComp from "./components/CardComp";
import NoteCanva from "./components/noteCanva";
import React, { useState } from 'react';
// import ListCanva from "./components/ListCanva";

const   Notes =()=>{
    const [note, setNote] = useState<string>('');
    const [cards,setCards] = useState<string[]>([])
  
    return (
        <Box  h={'100vh'}>
            <NoteCanva cards={cards} setCards={setCards} note={note} setNote={setNote} />
            {/* <ListCanva/> */}
           <Box>
            {/* <Record/> */}

             {/* <CardComp/> */}
            </Box> 
     
        </Box>
    )
}

export default  Notes;