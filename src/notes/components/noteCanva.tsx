import { Box, Button, Textarea, Flex, Icon } from '@chakra-ui/react';
import React, {Dispatch, SetStateAction  } from 'react';
import { IoIosClose } from "react-icons/io";
// import {saveToLocalStorage,getFromLocalStorage} from '../../localStorageUtils'
import { Link } from 'react-router-dom';

interface Props {
    note: string;
    setNote: Dispatch<SetStateAction<string>>;
    cards: string[];
    setCards: Dispatch<SetStateAction<string[]>>;
  }

const NoteCanva: React.FC<Props> = ({ note, setNote,cards, setCards }) => {

  const handleNoteChange = () => {
    if (note.trim()) { 
        setCards([...cards, note]); 
        setNote('');
    }
  };

  return (
    <Box>
      <Flex pr={4} justifyContent={'space-between'}>
        <Icon color={'#272140'} fontSize={20} fontWeight={300} as={IoIosClose} />
        <Button onClick={handleNoteChange} borderRadius={20} h={6} bg={'#e53756'} color={'white'}>
          <Link to='/Layout'>
            Save
          </Link>
          </Button>
    </Flex>
      <Textarea
        color={'#272140'}
        variant={'none'}
        border={'none'}
        outline={'none'}
        fontSize={'1.5rem'}
        placeholder='New simple text'
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </Box>
  );
};

export default NoteCanva;