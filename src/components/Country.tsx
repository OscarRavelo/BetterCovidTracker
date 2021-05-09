import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { Idata } from "./CountryCases";

type Iprops = {
    country: Idata,
    index: number,
}

export const Country: React.FC<Iprops> = ({country, index }) => (
    <Center key={index} >
    <Flex m={[3,3]}  borderRadius="md" borderWidth="1px" 
      >
                    <Box m={[1,1]}  >
                    <Box  >location </Box>
                    <Box>{country.location.substring(0,6)}</Box>
                    </Box>

                    <Box m={[1,1]}  >
                    <Box  bgColor="purple.900">Confirmed </Box>
                    <Box>{country.confirmed}</Box>
                    </Box>

                    <Box m={[1,1]}  >
                    <Box  bgColor="pink.900">Deaths </Box>
                    <Box>{country.deaths}</Box>
                    </Box>

                    <Box m={[1,1]}  >
                    <Box  bgColor="cyan.900">Recovered </Box>
                    <Box>{country.recovered}</Box>
                    </Box>
                    
                    
                </Flex>
                </Center>
)