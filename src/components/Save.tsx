import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoIosClose } from "react-icons/io";

interface Props {
  
}

const Save: React.FC<Props> = ({  }) => {
  return (
    <Box>
        <Icon as={IoIosClose} />
    </Box>
  );
};

export default Save;