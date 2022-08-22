import { useMemo } from 'react';
import { makeItems } from '../../../utils/Testing/newItems';

const useRemoteCheckItems = (page) => {
  const data = makeItems(page);

  const newData = useMemo(
    () =>
      data
        ? {
            ...data,
            data: data,
          }
        : data,
    [data]
  );

  return { data: newData };
};

export default useRemoteCheckItems;
