import { Box, } from '@chakra-ui/react';
import React from 'react';
import Save from '../../components/Save';

interface Props {
  
}

const ListCanva: React.FC<Props> = ({  }) => {
  return (
    <Box>
       <Save/>
       <Textarea color={'#272140'} variant={'none'} border={'none'} outline={'none'} fontSize={'1.5rem'} placeholder='New simple text' />
    </Box>
  );
};

export default ListCanva;