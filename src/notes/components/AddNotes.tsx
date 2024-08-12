import { Box, Button, useDisclosure,
    Text,
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Box  textAlign={'center'}>
            <Button onClick={onOpen} mt={6} mx={40} bg={'#e53756'} color={'white'}>+</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New</ModalHeader>
          <ModalCloseButton />
          <ModalBody lineHeight={2}>
            {/* <Lorem count={2} /> */}
            <Text>Simple note</Text>
            <Text>List</Text>
            <Text>Record note</Text>
            <Text>Sketch</Text>
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