import { 
    Box, 
    Button,
    Flex,
    Icon,
    Input,
    Stack,
    Text,
    Avatar,
    Tabs,
    TabList,
    Tab
  } from "@chakra-ui/react";
import { FaStickyNote, FaMicrophone, FaPen, FaTrash } from "react-icons/fa";
import { LiaListAlt } from "react-icons/lia";
import { IoIosArrowDown,IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
 


 

const NavBar =()=>{
    return (
        <Box pl={6}  h={'100vh'} bg={{lg:'#544c83'}}>
            <Flex w={'200px'} justifyContent={'space-between'} pt={4} alignItems={'center'}>
                <Flex display={{base:'none'}}  alignItems={'center'}>
                    <Avatar w={7} h={7} src='https://bit.ly/dan-abramov' />
                    <Text fontSize={14} ml={2}  color={'white'}>Akare</Text>
                </Flex>
                <Flex justifyContent={'space-between'} color={'white'}>
                    <Icon as={IoIosArrowDown}/>
                    <Icon ml={2} as={IoIosSettings}/>
                </Flex>
            </Flex>

            <Box display={{base:'flex', lg:'block'}} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                <Input placeholder="Search note" border={0} mt={4} color={'gray'} textAlign={'center'} fontSize={12} p={5} borderRadius={{lg:20,base:10}} h={8} w={{lg:'52',base:'300px'}} bg={{lg:'#272140',base:'#544c83'}} />
                <Button display={{base:'none',lg:'block'}} bg={'#e53756'} color={'white'} p={0} mt={4} borderRadius={20} fontSize={12} h={8} w={'52'}>New Note</Button>
            </Box>

            <Stack display={{base:'none',md:'block'}} lineHeight={2} mt={6} color={'white'}>
                <Link to='/Layout' >
                    <Flex alignItems={'center'}  >
                    <Icon color={'white'} as={FaStickyNote}/>
                    <Text ml={4} fontSize={15}>Notes</Text>
                    </Flex>
                </Link>
                <Link to='list' >
                    <Flex alignItems={'center'}  >
                        <Icon color={'white'} as={LiaListAlt}/>
                        <Text ml={4} fontSize={15}>List</Text>
                    </Flex>
                </Link>
                <Link to='recorder'>
                    <Flex alignItems={'center'}  >
                        <Icon color={'white'} as={FaMicrophone}/>
                        <Text ml={4} fontSize={15}>Recording</Text>
                    </Flex>
                </Link>
                <Link to='sketches'>
                    <Flex alignItems={'center'}  >
                        <Icon color={'white'} as={FaPen}/>
                        <Text ml={4} fontSize={15}>Sketches</Text>
                    </Flex>
                </Link>
                <Flex mt={20} alignItems={'center'}  >
                    <Icon color={'white'} as={FaTrash}/>
                    <Text ml={4} fontSize={15}>Trash</Text>
                </Flex>
            </Stack>
            <Tabs display={{base:'',md:'none'}}>
                <TabList>
                    <Tab>Notes</Tab>
                    <Tab>List</Tab>
                    <Tab>Recording</Tab>
                    <Tab>Sketches</Tab>
                    <Tab>Trash</Tab>
                </TabList>
            </Tabs>
        </Box>
    )
}

export default NavBar;