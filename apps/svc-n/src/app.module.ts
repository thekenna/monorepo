import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/drizzle/database.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./users/users.module";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './.env'
        }),
        CqrsModule.forRoot(),
        DatabaseModule,
        UserModule,
    ],
    controllers:[],
    providers:[],
})
class AppModule {}

export default AppModule