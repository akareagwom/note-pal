import { Button, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoIosClose } from "react-icons/io";

interface Props {
  
}

const Save: React.FC<Props> = ({  }) => {
  return (
    <Flex>
        <Icon as={IoIosClose} />
        <Button bg={'#e53756'} color={'white'}>Save</Button>
    </Flex>
  );
};

export default Save;