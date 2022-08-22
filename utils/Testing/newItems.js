import { faker } from '@faker-js/faker';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newItems = () => {
  return {
    nomor: faker.finance.bic(),
    namaBarang: faker.commerce.productName(),
    materialNam: faker.commerce.productMaterial(),
    materialCode: faker.vehicle.vin(),
    minStock: faker.datatype.number(40),
    maxStock: faker.datatype.number(1000),
    status: faker.helpers.shuffle(['active', 'non active', 'in production'])[0],
    kategori: faker.helpers.shuffle([
      'Kendaraan',
      'Senjata',
      'Item Lainnya',
    ])[0],
    masukBarang: faker.date.past(),
    keluarBarang: faker.date.past(),
  };
};

export function makeItems(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newItems(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };
  return makeDataLevel();
}
