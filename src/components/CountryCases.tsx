import { Box, Center, Flex, Heading, Image, Input, Stack, Text} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Country } from "./Country";
import flag from './flag.json'


 
export interface Idata {
    location: string,
    confirmed: number,
    deaths: number,
    recovered: number,
    active: number

}




export const CountryCases = ({data: countries}: {data: Idata[]}   ) => {
    const [filteredCountries, setFilteredCountries] = useState("")
    const [stateCountries, setStateCountries] = useState([...countries])

    

    useEffect(() => {
         setStateCountries([...countries.filter(country => country.location.toLowerCase().includes(filteredCountries.toLowerCase()))])
    }, [filteredCountries])
    return(
        <Center css={{
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            "&::-webkit-scrollbar-track": {
              width: "0px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#4C5270",
              borderRadius: "0px",
            },
          }} mb="40px" mt="20px" w="100%"  alignSelf={{base: "", sm:"flex-start"}} >
    <Box  maxW={{base:"90vw", sm: "70vw", md:"50vw"}} maxH={{base:"90%", sm:"500px", md:"90%"}}   overflow="auto"  borderRadius="lg"  >
        <Center >

        <Heading>Countries {stateCountries.length}  </Heading>

        </Center>
        <Input size="lg" focusBorderColor="pink.900"  onChange={(e) => setFilteredCountries(e.target.value)} placeholder="Search Country" />
        <Box  css={{
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: "black",
      borderRadius: '0',
    },
  }} mt="15px"  maxH={{base:"90%", sm:"90%", md:"300px", lg: "50vh"}}  minW={{base:"90vw", sm: "70vw", md:"30vw"}} overflow="auto"  >

       
        
            <Flex   flexDir={{base: "row", md: "column"}}>
                
            {stateCountries.map((country, index) => 
                {
                    const flagName = Object.entries(flag).filter(flags =>{
                        if (flags.includes(country.location)){
                            return flags.pop()
                        } 
                        
                     })
                return(
                <Box paddingTop="20px" paddingBottom="20px" key={index} marginRight="20px" >
                    <Center w="100%">

                <Country flagName={flagName.toString().toLowerCase()} key={index} country={country} index={index} />
                    </Center>
                </Box>
                )
            }
            )}
            </Flex>
        
            
            
        </Box>

       


    </Box>
    </Center>

)}