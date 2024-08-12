import { Box,  Card, CardHeader, CardBody, Text, Flex} from "@chakra-ui/react"
import AddNotes from "./AddNotes";

const CardComp =()=>{
    return(
        <Flex  gap={2} flexWrap={'wrap'}>
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
           
            <Box>
                <AddNotes/>
            </Box>
        </Flex>
    )
}

export default CardComp;