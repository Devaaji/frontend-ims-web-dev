import { Box, Icon, Skeleton, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const DasboardCardMeta = ({ icon, children, metaName }) => {
  const isLoading = false;
  return (
    <>
      <Box
        py="8"
        borderWidth="1px"
        bg="white"
        cursor="pointer"
        rounded="xl"
        shadow="0px 0px 1px 1px rgba(0, 0, 0, 0.25)"
        overflow="hidden"
        _hover={{ bg: 'gray.100' }}
      >
        <VStack>
          {isLoading ? (
            <>
              <Skeleton width="16" h="9" />
              <Skeleton width="16" h="9" />
              <Skeleton width="50%" h="21px" />
            </>
          ) : (
            <>
              <Icon as={icon} fontSize="4xl" />
              <Text fontSize="xl">{children}</Text>
              <Text fontSize="md" color="black">
                {metaName}
              </Text>
            </>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default DasboardCardMeta;
