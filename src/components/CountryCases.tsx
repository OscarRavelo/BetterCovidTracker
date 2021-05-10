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
         console.log(stateCountries)
    }, [filteredCountries])
    return(
    <Box maxW="90vw" borderWidth="2px" borderRadius="lg">
        <Center>

        <Heading>Countries {stateCountries.length}  </Heading>

        </Center>
        <Input size="lg" focusBorderColor="pink.900"  onChange={(e) => setFilteredCountries(e.target.value)} placeholder="Search Country" />
        <Box  mt="15px" minW={{base: "95%", sm: "40vw", md: "80vw"}} overflowX="scroll"  minH="80px" maxH="130px">
            <Flex  flexDir="row" >
            {stateCountries.map((country, index) => 
                {
                    const flagName = Object.entries(flag).filter(flags =>{
                        if (flags.includes(country.location)){
                            return flags.pop()
                        } 
                        
                     })
                return(
                <Box key={index} marginRight="20px" minW="100%" >
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

)}