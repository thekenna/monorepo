import { NestFactory } from "@nestjs/core";
import AppModule from './app.module'
import { ZodValidationPipe } from "nestjs-zod";

async function bootstrap() {
    console.log("Starting SVC Navigator...")

    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ZodValidationPipe())

    const PORT = process.env.PORT || 3001    
    app.listen(PORT)

    console.log(`SVC Navigator started on ${PORT}`)
}

bootstrap()
