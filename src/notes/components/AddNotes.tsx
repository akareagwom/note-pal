import { Box, Button, useDisclosure,
    // Text,
     Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Icon,
} from "@chakra-ui/react"

import { FaArrowRight } from "react-icons/fa";

const AddNotes =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Box  textAlign={'center'}>
            <Button onClick={onOpen} mt={6} mx={40} bg={'#e53756'} color={'white'}>+</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'inline-block'} justifyContent={'start'} textAlign={'left'} alignItems={''} lineHeight={2}>
            <Button variant={'none'}>Simple note</Button>
            <Button variant={'none'}>List</Button>
            <Button variant={'none'}>Record note</Button>
            <Button variant={'none'}>Sketch</Button>
          </ModalBody>

          <ModalFooter>
            <Button bg={'#e53756'} color={'white'} mr={3} onClick={onClose}>
             <Icon as={FaArrowRight}/>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
    )
}

export default AddNotes;