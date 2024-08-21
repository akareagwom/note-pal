import { Box, Button} from "@chakra-ui/react";
import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  cards: string[];
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddNotes: React.FC<Props> = () => {


  return (
    <Box textAlign={'center'}>
      <Button  mt={6} mx={40} bg={'#e53756'} color={'white'}>
       <Link to='noteCanva'>+</Link> 
      </Button>
      
    </Box>
  );
};

export default AddNotes;