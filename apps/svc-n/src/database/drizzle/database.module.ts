import { Module, Global } from '@nestjs/common';
import { drizzleProvider } from './database.provider';

@Global()
@Module({
  providers: [drizzleProvider],
  exports: [drizzleProvider],
})

export class DatabaseModule {}
