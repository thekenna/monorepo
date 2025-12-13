import { Module } from "@nestjs/common";
import { DatabaseModule } from "./infra/database/database.module";
import AppController from "./app.controller";

@Module({
    imports:[DatabaseModule],
    controllers:[],
    providers:[],
})
class AppModule {}

export default AppModule