import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Link,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';

export default function Works({ work }) {
  const features = [work.type];
  const listItems = features.map((item) =>
    <ListItem key={item} display={'block'}>{item}</ListItem>
  )
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 9, md: 12 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={work.image}  
            fit={'cover'}
            align={'center'}
			type= {'lazy'}
			boxShadow={
			'0px 1px 25px -5px rgb(97 97 97 / 48%), 0 10px 10px -5px rgb(97 97 97 / 43%)'
			}

          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {work.title}
            </Heading>
			<Link href={work.url} 
			  isExternal
			  color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
			  {work.url}
			</Link>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                {work.text}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <List spacing={2}>
				{listItems}
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}