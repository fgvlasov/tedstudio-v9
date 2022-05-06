import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcTemplate, FcList, FcDataConfiguration } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function features() {
  return (
    <Box p={8}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcList} w={10} h={10} />}
          title={'Languages'}
          text={
            'HTML, CSS, Javascript, Php, Mysql, React'
          }
        />
        <Feature
          icon={<Icon as={FcTemplate} w={10} h={10} />}
          title={'DevTools'}
          text={
            'HTML, Github, Gitlab, Codepen, Bootstrap, Tailwind, VSCode'
          }
        />
        <Feature
          icon={<Icon as={FcDataConfiguration} w={10} h={10} />}
          title={'Frameworks'}
          text={
            'Next.js, Drupal, Wordpress, Wix, Prestashop'
          }
        />
      </SimpleGrid>
    </Box>
  );
}