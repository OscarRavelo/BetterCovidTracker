import { Box, Heading, Flex, Center} from "@chakra-ui/react";

export interface Idata {
  
    confirmed: Number,
    deaths: Number,
    recovered: Number,
    dt: Date,
    ts: Number
  
}

export  const GlobalCase = ({data}: {data: Idata}) => (
        <Center>
    <Box fontSize={{base: "20px", md:"30px"}} m="20px" minW={{base: "90vw", sm: "40vw", md: "70vw", lg: "40vw"}} maxW="sm"  borderRadius="lg">

        <Flex  flexDir="column">
            <Center bgColor="purple.900">

            <Heading  >Confirmed Global Cases</Heading>
            </Center>
            <Center>
                <Box> {data.confirmed}</Box>

            </Center>
        
        </Flex>
            

        
    </Box>
        </Center>
)
