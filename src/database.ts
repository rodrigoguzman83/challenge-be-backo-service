import {DataSource} from 'typeorm'
import User from './infrastructure/entities/User'
import * as dotenv from "dotenv";

dotenv.config()

export const AppDataSource=new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [User],
    logging: Boolean(process.env.TYPEORM_LOGGING),
    synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE)
})