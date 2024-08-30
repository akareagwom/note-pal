import { Box,  Card, CardBody, Text, Flex} from "@chakra-ui/react"
import React, {Dispatch, SetStateAction  } from 'react';
import { useLocation } from 'react-router-dom';
import AddNotes from "./AddNotes";

interface Props {
    note: string;
    setNote: Dispatch<SetStateAction<string>>;
    cards: string[];
    setCards: Dispatch<SetStateAction<string[]>>;
  }

const CardComp: React.FC<Props> =({ note,setCards,setNote})=>{
    const location = useLocation();
  const { cards } = location.state as { cards: string[] };

    return(
        <Flex  gap={2} flexWrap={'wrap'}>
            {cards.map((card)=>(
                <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                    <CardBody >
                        <Text color={'#272140'}>{card}</Text>
                    </CardBody>
                </Card>
            ))}
            <Box>
                <AddNotes cards={cards} setCards={setCards} note={note} setNote={setNote}/>
            </Box>
        </Flex>
    )
}

export default CardComp;