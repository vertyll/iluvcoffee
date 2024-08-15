import { CoffeeRefactor1723728733204 } from 'src/migrations/1723728733204-CoffeeRefactor';
import { DataSource } from 'typeorm';
import { Coffee } from './coffees/entities/coffee.entity';
import { Flavor } from './coffees/entities/flavor.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1723728733204],
});
