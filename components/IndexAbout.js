import {
  Container,
  Heading,
  Stack,
  Text,

} from '@chakra-ui/react'

export default function indexabout() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Front-end Developer{' '}
          <Text as={'span'} color={'orange.400'}>
            Vlasov Fedor
          </Text>
        </Heading>
        <Text color={'grey.500'} maxW={'3xl'}>
          I’m a Front-End Developer located in Georgia. Also i am a full-stack developer of websites on different platforms, selecting them for customers.
        </Text>
        <Text color={'grey.500'} maxW={'3xl'}>
          Well-organised person, problem solver, independent employee with high attention to detail. 
		  Fan of Football, outdoor activities, calisthenics and construction inventions. A family person and father of two beautiful smart daughters.
        </Text>
        <Text color={'grey.500'} maxW={'3xl'}>
          Interested in the actual javascript frontend and in search of interesting modern projects.
        </Text>
      </Stack>
    </Container>
  );
}