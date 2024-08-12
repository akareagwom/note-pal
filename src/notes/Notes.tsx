import { Box } from "@chakra-ui/react";
import CardComp from "./components/CardComp";
import NoteCanva from "./components/noteCanva";
import ListCanva from "./components/ListCanva";

const   Notes =()=>{
    return (
        <Box  h={'100vh'}>
            {/* <NoteCanva/> */}
            <ListCanva/>
           <Box bg={'#272140'}>

             {/* <CardComp/> */}
            </Box> 
     
        </Box>
    )
}

export default  Notes;