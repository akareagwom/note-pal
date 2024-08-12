import { Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoIosClose } from "react-icons/io";

interface Props {
  
}

const Save: React.FC<Props> = ({  }) => {
  return (
    <Box>
        <Icon as={IoIosClose} />
        <Button>Save</Button>
    </Box>
  );
};

export default Save;