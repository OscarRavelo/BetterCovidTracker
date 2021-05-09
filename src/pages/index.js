import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Stack } from "@chakra-ui/react"
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { GlobalCase } from '../components/GlobalCase'
import {CountryCases} from '../components/CountryCases'

const Index = (props) => {
  return(
  <Container  maxW="100vw" minH="100vh">
   
    <Hero title={"Covid Tracker "} />
    <Stack >
    
    <GlobalCase data={props.data.globalCasess} />
    <CountryCases  data={props.data.countriesCases.data} />



    </Stack>
   

    <DarkModeSwitch />
    <Footer>
    made it by Oscar Ravelo
    </Footer>
  </Container>
)}

export default Index


export async function getStaticProps(context){
  const globalCasess = await fetch(`https://covid2019-api.herokuapp.com/total
  `).then(r => r.json());
const countriesCases = await fetch(`https://covid2019-api.herokuapp.com/v2/current
`).then( r => r.json())
  const data = { globalCasess, countriesCases }
  if (!data){
    return {
      notFound: true,
    }
  }
 

  return {
    props: {data}
  }

}