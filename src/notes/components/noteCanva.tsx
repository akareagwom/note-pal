import { Box, Textarea } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const NoteCanva: React.FC<Props> = ({  }) => {
  return (
    <Box>
      <Textarea variant={'none'} border={'none'} outline={'none'} fontSize={'1.5rem'} placeholder='New simple text' />
    </Box>
  );
};

export default NoteCanva;