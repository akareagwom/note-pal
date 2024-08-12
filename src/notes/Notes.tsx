import { Box } from "@chakra-ui/react";
import CardComp from "./components/CardComp";
import NoteCanva from "./components/noteCanva";

const   Notes =()=>{
    return (
        <Box  h={'100vh'}>
            <NoteCanva/>
            
            {/* <CardComp/> */}
     
        </Box>
    )
}

export default  Notes;