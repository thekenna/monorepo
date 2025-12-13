import { NestFactory } from "@nestjs/core";
import AppModule from './app.module'

async function bootstrap() {
    console.log("Starting SVC Navigator...")

    const app = await NestFactory.create(AppModule)
    const PORT = process.env.PORT || 3001

    
    app.listen(PORT)
    console.log(`SVC Navigator started on ${PORT}`)
}

bootstrap()
