import { Box,  Card, CardBody, Text, Flex} from "@chakra-ui/react"
import React from 'react';
import AddNotes from "./AddNotes";

interface Props {
    // note: string;
    // setNote: Dispatch<SetStateAction<string>>;
    cards: string[];
    // setCards: Dispatch<SetStateAction<string[]>>;
  }

const CardComp: React.FC<Props> =({ cards})=>{
    return(
        <Flex  gap={2} flexWrap={'wrap'}>
            {cards.map((card)=>(
                <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                    <CardBody >
                        <Text color={'#272140'}>{card}</Text>
                    </CardBody>
                </Card>
            ))}
            {/* <Card borderRadius={15} w={'45%'} p={4} bg={'rgba(215,238,248,255)'}>
                <CardBody>
                    <Text color={'#272140'}>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'#f8d7d7'}>
                <CardBody>
                    <Text color={'#272140'}>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                <CardBody >
                    <Text color={'#272140'}>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'rgba(215,238,248,255)'}>
                <CardBody>
                    <Text color={'#272140'}>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'#f8d7d7'}>
                <CardBody>
                    <Text color={'#272140'}>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                <CardBody >
                    <Text color={'#272140'}>hola</Text>
                </CardBody>
            </Card>
            */}
            <Box>
                <AddNotes/>
            </Box>
        </Flex>
    )
}

export default CardComp;