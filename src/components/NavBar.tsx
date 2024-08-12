import { Box, Drawer, DrawerBody, List, ListItem ,DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input
  } from "@chakra-ui/react";
 


 

const NavBar =()=>{
    return (
        <Box h={'100vh'} bg={'#544c83'}>
            <Input p={0} borderRadius={20} h={8} w={'44'} bg={'#272140'} />
            <Button p={0}  borderRadius={20} h={8} w={'44'}>New Note</Button>
        </Box>
    )
}

export default NavBar;