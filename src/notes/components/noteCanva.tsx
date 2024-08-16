import { Box, Button, Textarea, Flex, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
// import Save from '../../components/Save';
import { IoIosClose } from "react-icons/io";

interface Props {
//   handleNote: (note: string) => void;
}

const NoteCanva: React.FC<Props> = ({  }) => {
  const [note, setNote] = useState<string>('');
  const [cards,setCards] = useState<string[]>([])

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
        <Button onClick={handleNoteChange} borderRadius={20} h={6} bg={'#e53756'} color={'white'}>Save</Button>
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