import { Factory } from "fishery";
import { FiguresDataStructures } from "../../types";
import { faker } from "@faker-js/faker";

const figureFactory = Factory.define<FiguresDataStructures>(() => ({
  character: faker.person.firstName(),
  id: faker.database.mongodbObjectId().toString(),
  franchise: faker.company.name(),
  image: faker.image.url(),
  manufacturer: faker.company.name(),
  material: faker.commerce.productMaterial(),
  price: faker.number.int(),
  purchased: faker.datatype.boolean(),
  size: faker.number.int(),
  title: faker.commerce.product(),
  weight: faker.number.int(),
  user: "123456",
}));

export const figureMockFactory = (data?: FiguresDataStructures) =>
  figureFactory.build(data);

export const figuresMocksFactory = (
  totalMocks: number,
  data?: FiguresDataStructures
) => figureFactory.buildList(totalMocks, data);
