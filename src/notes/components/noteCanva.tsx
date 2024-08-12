import { Box, Textarea } from '@chakra-ui/react';
import React from 'react';

interface Props {
  
}

const NoteCanva: React.FC<Props> = ({  }) => {
  return (
    <Box>
      <Textarea placeholder='New simple text' />
    </Box>
  );
};

export default NoteCanva;