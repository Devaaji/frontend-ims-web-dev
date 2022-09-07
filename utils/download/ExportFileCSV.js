import { utils, writeFileXLSX } from 'xlsx';
import { useCallback, useEffect, useState } from 'react';
import randomString from 'random-string';

const ExportFileCSV = (data, nameFile) => {
  const randomName = randomString({ lenght: 20 });
  const [pres, setPres] = useState([]);

  useEffect(() => {
    setPres(data);
  });

  const exportFileCSV = useCallback(() => {
    const ws = utils.json_to_sheet(pres);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Data');
    writeFileXLSX(wb, `Custumer.csv`);
  }, [pres]);

  return { exportFileCSV };
};

export default ExportFileCSV;
