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
        <Center mt="20px"   alignSelf={{base: "", sm:"flex-start"}} >
    <Box maxW={{base:"90vw", sm: "70vw", md:"50vw"}} maxH={{base:"90%", sm:"170px", md:"90%"}}  overflow="auto" borderWidth="2px" borderRadius="lg">
        <Center >

        <Heading>Countries {stateCountries.length}  </Heading>

        </Center>
        <Input size="lg" focusBorderColor="pink.900"  onChange={(e) => setFilteredCountries(e.target.value)} placeholder="Search Country" />
        <Box mt="15px"   maxH="300px" overflow="auto"  >

       
        
            <Flex   flexDir={{base: "row", sm: "column"}}>
                
            {stateCountries.map((country, index) => 
                {
                    const flagName = Object.entries(flag).filter(flags =>{
                        if (flags.includes(country.location)){
                            return flags.pop()
                        } 
                        
                     })
                return(
                <Box key={index} marginRight="20px" >
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