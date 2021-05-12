import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Idata } from "./CountryCases";

type Iprops = {
    country: Idata,
    index: number,
    flagName: string,
}

export const Country: React.FC<Iprops> = ({country, index, flagName }) => {
   

     const url = `https://www.countryflags.io/${flagName}/shiny/24.png`
     

    
    return(
    <Center key={index} >
    <Flex mb="15px"  minW={{base: "", md:"400px"}} borderRadius="md"  borderWidth="1px" 
      >
                    <Box m={[1,1]}  >
                    <Box  >{country.location.substr(0,6)}</Box>
                    <Center>

                    <Image src={url} />
                    </Center>
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
)}