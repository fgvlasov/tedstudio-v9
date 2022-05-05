import { useRouter } from "next/router"
import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon, CloseIcon  } from '@chakra-ui/icons';

const navLinks = [
	{ title: 'Home', path: '/'},
	{ title: 'Portfolio', path: '/portfolio'}
]

const dfLink = ({children}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      //bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter(); 
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
			<Link href="/" fontSize={'24'}>TED-Studio {' '}
				<Text as={'span'} color={'orange.400'}>of websites</Text>
			</Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
				{navLinks.map((link) => (
                  <Link     
				    key={link.title}
				    px={2}
					py={1}
					rounded={'md'}
					_hover={{
					textDecoration: 'none',
					//bg: useColorModeValue('gray.200', 'gray.700'),
					}}
					{...router.pathname === link.path ? {textDecoration: 'none',
						//bg: useColorModeValue('gray.200', 'gray.700')
					} : " "}
					
					href={link.path}>{link.title}</Link>
				))}
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}