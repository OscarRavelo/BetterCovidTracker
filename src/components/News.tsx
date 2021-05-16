import { Box, Center, Grid, GridItem, Heading, Img, Input, Link, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import flag from './flag.json'

type Iprops = {
    news: Idata,

}

interface Idata {
    articles: Inews[],
    page: number,
    page_size: number,
    status: string,
    total_hits: number,
    total_pages: number,
    user_input: object
}

interface Inews {
    autor: string | null,
    clean_url: string,
    country: string,
    language: string,
    link: string,
    media: string,
    media_content: string,
    published_date: string,
    rank: string,
    rights: string,
    summary: string,
    title: string,
    topic: string,
    _id: string,
    _score: number
}


export const News: React.FC<Iprops> = ({news}) => {
    const [state, setState] = useState<Inews[]>([]);
    const [inputCountry, setInputCountry] = useState<string>("")

    //setting the state 
    useEffect(() => {
        setState([...news.articles])
    },  [])

    //getting the country 2 letter code
    useEffect(() => {
        


        const flagName = Object.entries(flag).filter(flags =>{
            if (flags.includes(inputCountry)){
                return flags.pop()
            } 
            
         })

         if(flagName.toString().toLowerCase() !== ""){
            const newsByCountry = async () => {
                const result: Idata = await fetch(`https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&country=${flagName.toString().toLowerCase()}&page_size=10&media=True`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "4d27b1fcdbmsh976114fea167619p199209jsn9e85abedefef",
                    "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
                }
            })
            .then(r => r.json())
                console.log("flagNamesssss", flagName)
            setState([...result.articles])
            }

            newsByCountry();
             
         } else {
            setState([...news.articles])
         }
         
       
         
            
        
   
        
        
    }, [inputCountry])

    


    return (
        <Box css={{
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
          }}   >
        <Center maxH="100%"  >
        <Box   mt="20px" paddingTop="40px"  maxW="90%"  >
            <Center>

            <Heading>Covid News</Heading>
            </Center>
            <Input onChange={e => setInputCountry(e?.target.value)}  position="sticky" placeholder=" News by Country" />
            <Box mt="15px"  >
                {
                    state.map( (article, index) => <Box paddingBottom="20px" marginBottom="15px" borderBottom="2px dashed " key={index}   m={[3,3]}  >
                       <Grid gap="1" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" >
                           
                       
                       
                       <GridItem rowStart={2} rowSpan={2}>
                           <Img  boxSize="100%" objectFit="fill" src={article.media} />
                           </GridItem>
                           <GridItem  colSpan={4} >
                               <Center>
                           <Text noOfLines={2}>
                               
                               <Link href={article.link} >{article.title}</Link></Text>
                               </Center></GridItem>
                           <GridItem colSpan={4} >
                           <Text noOfLines={2} >{article.summary}</Text>
                           </GridItem>
                       
                       </Grid>
                   </Box> ) 
                }
            </Box>
        </Box>
        </Center>
        </Box>
    )
}