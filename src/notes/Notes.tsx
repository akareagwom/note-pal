import { Box } from "@chakra-ui/react";
import Record from "./components/Record";
// import CardComp from "./components/CardComp";
// import NoteCanva from "./components/noteCanva";
// import ListCanva from "./components/ListCanva";

const   Notes =()=>{
    return (
        <Box  h={'100vh'}>
            {/* <NoteCanva/> */}
            {/* <ListCanva/> */}
           <Box>
            <Record/>

             {/* <CardComp/> */}
            </Box> 
     
        </Box>
    )
}

export default  Notes;