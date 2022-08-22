import React from 'react';
import { Spacer, Box, Icon, Flex } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';

const DashboardPagination = ({ current, total, onPageClick }) => {
  return (
    <Flex>
      <Spacer />
      <Box
        sx={{
          '.pg-container': {
            listStyle: 'none',
            display: 'flex',
            gap: '4px',
          },
          '.pg-item': {
            width: '10',
            height: '10',
            lineHeight: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px',
            rounded: 'md',
            fontFamily: 'button',
            _hover: { bg: 'ims-hover-primary' },
            userSelect: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
          },
          '.pg-item-active': {
            color: 'white',
            bg: 'ims-primary',
          },
          '.pg-item-disabled': {
            color: 'grey',
            cursor: 'not-allowed',
          },
          '.pg-break': {
            py: '3',
          },
        }}
      >
        <ReactPaginate
          breakLabel="..."
          pageRangeDisplayed={3}
          pageCount={total}
          nextLabel={<Icon as={FiChevronRight} fontSize="md" />}
          previousLabel={<Icon as={FiChevronLeft} fontSize="md" />}
          renderOnZeroPageCount={null}
          containerClassName="pg-container"
          previousLinkClassName="pg-item"
          nextLinkClassName="pg-item"
          pageLinkClassName="pg-item"
          activeLinkClassName="pg-item-active"
          disabledLinkClassName="pg-item-disabled"
          breakClassName="pg-break"
          onPageChange={(page) => onPageClick(page.selected + 1)}
          forcePage={current - 1}
        />
      </Box>
    </Flex>
  );
};

export default DashboardPagination;
