import { Box, Drawer, DrawerBody, List, ListItem ,DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Stack
  } from "@chakra-ui/react";
 


 

const NavBar =()=>{
    return (
        <Box pl={6} h={'100vh'} bg={'#544c83'}>
            <Input placeholder="Search note" border={0} mt={4} color={'gray'} textAlign={'center'} fontSize={12} p={0} borderRadius={20} h={8} w={'44'} bg={'#272140'} />
            <Button bg={'#e53756'} color={'white'} p={0} mt={4} borderRadius={20} fontSize={12} h={8} w={'44'}>New Note</Button>

            <Stack>
                
            </Stack>
        </Box>
    )
}

export default NavBar;