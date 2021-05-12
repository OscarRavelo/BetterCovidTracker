import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Stack, Center, Flex , Box} from "@chakra-ui/react"
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { GlobalCase } from '../components/GlobalCase'
import {CountryCases} from '../components/CountryCases'
import {News} from '../components/News';

const Index = (props) => {
 
  return(
  <Container  maxW="100vw" minH="100vh" maxH="100vh">
   
    <Hero title={"Covid Tracker "} />
    <Stack  maxW="100vw"  maxH="90vh" >
    

    <GlobalCase data={props.data.globalCasess} />

    <Flex maxH="70vh" flexDir={{base: "column", sm:"row"}}>


    <CountryCases  data={props.data.countriesCases.data} />
    <Box  maxH={{base:"90%", sm:"180px", md: "90%", lg:"90%"}} overflow="auto">

    <News news={props.data.news} />
    </Box>
    </Flex>
    
    



    </Stack>
   

    <DarkModeSwitch />
    
    made  by Oscar Ravelo
    
  </Container>
)}

export default Index


export async function getStaticProps(context){
  const globalCasess = await fetch(`https://covid2019-api.herokuapp.com/total
  `).then(r => r.json());
 const news = await fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&page_size=10&media=True", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4d27b1fcdbmsh976114fea167619p199209jsn9e85abedefef",
		"x-rapidapi-host": "covid-19-news.p.rapidapi.com"
	}
})
.then(r => r.json())
const countriesCases = await fetch(`https://covid2019-api.herokuapp.com/v2/current
`).then( r => r.json())
  const data = { globalCasess, countriesCases, news }
  if (!data){
    return {
      notFound: true,
    }
  }
 

  return {
    props: {data}
  }

}