import { Box } from "@chakra-ui/react";
import CardComp from "./components/CardComp";
import NoteCanva from "./components/noteCanva";

const   Notes =()=>{
    return (
        <Box  h={'100vh'}>
            <NoteCanva/>
           <Box bg={'#272140'}>
            
             {/* <CardComp/> */}
            </Box> 
     
        </Box>
    )
}

export default  Notes;