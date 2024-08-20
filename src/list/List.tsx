import { Box } from '@chakra-ui/react';
import React from 'react';
import AddList from './components/AddList';

interface Props {
  
}

const List: React.FC<Props> = ({  }) => {
  return (
    <Box> 
        <AddList/>
    </Box>
  );
};

export default List;