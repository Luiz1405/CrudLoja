import 'dotenv/config';
import { DataSourceOptions, DataSource } from "typeorm";

const dataSourceOption: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['./src/Entities/**/*.entity.{ts,js}'],
    migrations: ['./src/db/migrations/*.{js,ts}'],
}

const dataSource = new DataSource(dataSourceOption);

export default dataSource;