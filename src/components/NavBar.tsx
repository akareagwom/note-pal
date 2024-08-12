import { 
    Box, 
    Button,
    Icon,
    Input,
    Stack
  } from "@chakra-ui/react";
import { FaStickyNote, FaMicrophone, FaPen, FaTrash } from "react-icons/fa";
import { LiaListAlt } from "react-icons/lia";
 


 

const NavBar =()=>{
    return (
        <Box pl={6} h={'100vh'} bg={'#544c83'}>
            <Input placeholder="Search note" border={0} mt={4} color={'gray'} textAlign={'center'} fontSize={12} p={0} borderRadius={20} h={8} w={'44'} bg={'#272140'} />
            <Button bg={'#e53756'} color={'white'} p={0} mt={4} borderRadius={20} fontSize={12} h={8} w={'44'}>New Note</Button>

            <Stack>
                {/* <FaStickyNote/> */}
                <Icon color={'white'} as={FaStickyNote}/>
                <Icon color={'white'} as={LiaListAlt}/>
                <Icon color={'white'} as={FaMicrophone}/>
                <Icon color={'white'} as={FaPen}/>
                <Icon color={'white'} as={FaTrash}/>
            </Stack>
        </Box>
    )
}

export default NavBar;