import { Box, Center, Flex, Heading, Image, Input, Stack, Text} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Country } from "./Country";


 
export interface Idata {
    location: String,
    confirmed: Number,
    deaths: Number,
    recovered: Number,
    active: Number

}




export const CountryCases = ({data: countries}: {data: Idata[]}   ) => {
    const [filteredCountries, setFilteredCountries] = useState("")
    const [stateCountries, setStateCountries] = useState([...countries])

    useEffect(() => {
         setStateCountries([...countries.filter(country => country.location.toLowerCase().includes(filteredCountries.toLowerCase()))])
         console.log(stateCountries)
    }, [filteredCountries])
    return(
    <Box  borderWidth="2px" borderRadius="lg">
        <Center>

        <Heading>Countries</Heading>

        </Center>
        <Input size="lg" focusBorderColor="pink.900"  onChange={(e) => setFilteredCountries(e.target.value)} placeholder="Search Country" />
        <Box p={[2,2]} mt="15px" maxW="90vw" minW={{base: "90vw", sm: "40vw", md: "80vw"}} overflowX="scroll"  minH="80px" maxH="100px">
            <Flex  flexDir="row" >
            {stateCountries.map((country, index) => 
                <Country key={index} country={country} index={index} />
            )}
            </Flex>
        
            
            
        </Box>

       


    </Box>

)}