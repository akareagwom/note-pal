import { Box,  Card, CardHeader, CardBody, Text, Flex} from "@chakra-ui/react"

const CardComp =()=>{
    return(
        <Flex gap={2} flexWrap={'wrap'}>
            <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                <CardBody >
                    <Text>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'rgba(215,238,248,255)'}>
                <CardBody>
                    <Text>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'#f8d7d7'}>
                <CardBody>
                    <Text>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                <CardBody >
                    <Text>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'rgba(215,238,248,255)'}>
                <CardBody>
                    <Text>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg={'#f8d7d7'}>
                <CardBody>
                    <Text>hola</Text>
                </CardBody>
            </Card>
            <Card borderRadius={15} w={'45%'} p={4} bg='rgba(218,187,250,255)'>
                <CardBody >
                    <Text>hola</Text>
                </CardBody>
            </Card>
           

        </Flex>
    )
}

export default CardComp;