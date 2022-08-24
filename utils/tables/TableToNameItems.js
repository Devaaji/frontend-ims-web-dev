import { Box, Flex, HStack, Text } from '@chakra-ui/react';

export const TableToNameItems = ({ item, tableName }) => {
  return (
    <HStack mt="1" w="full" align="flex-start">
      <Box w="150px">
        <Flex justify="space-between">
          <Text fontWeight="semibold">{tableName}</Text>
          <Text>:</Text>
        </Flex>
      </Box>
      <Box w="200px" wordBreak="break-word">
        <Text>{item}</Text>
      </Box>
    </HStack>
  );
};
