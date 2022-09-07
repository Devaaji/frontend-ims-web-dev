import { useEffect, useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemoteMasterMaterial = (limit) => {
  const uri = '/material/list';

  const { data, ...others } = useQuery(['materialList', limit, 1], () =>
    postFetcher(uri, {
      limit: limit,
      page: 1,
      order: 'master_material_code',
      sort: 'ASC',
    })
  );

  return { data, ...others };
};

export default useRemoteMasterMaterial;
