import {
  Container,
  Heading,
  Stack,
  Link,
  Flex

} from '@chakra-ui/react'
import useSWR from 'swr'
import Features from '../components/Features.js'
import Works from '../components/Works.js'

export default function Portfolio() {
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/works', fetcher)
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
    return (

	<Container maxW={'5xl'} py={{ base: 8, md: 10 }}>
	  
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Portfolio
        </Heading>
		{data.map((p, i) => {
			
		  return (
			<Works key={i} work={p} />
		  )
			
		  }
		)}
	  </Stack>
	  <Flex h="20vh" justifyContent="center" alignItems="center">
		<Link
			href={"/"}
			p={4}
			fontSize={'md'}
			rounded={'10'}
			bg={'blue.400'}
			color={'white'}
			boxShadow={
			'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
			}
			_hover={{
			bg: 'blue.500',
			color:'white',
			}}
			_focus={{
			bg: 'blue.500',
			}}>
			Main Page
		</Link>
      </Flex>
	  <Features />
    </Container>
  )
}
