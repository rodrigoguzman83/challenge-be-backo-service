import "reflect-metadata"

import app from "./app";
import { AppDataSource } from "../database";
import {swaggerDocs} from "../swagger"
import * as dotenv from "dotenv";

dotenv.config ()

const PORT=process.env.SERVER_PORT || 3000

//hago la conexion a la BD
async function main(){
    try {
        await AppDataSource.initialize()
        console.log('database connection')
        app.listen(PORT)
        console.log('server is running 🚀') 
        swaggerDocs(app,PORT)       
    } catch (error) {
        console.error(error)
    }
}

main()


