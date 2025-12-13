import { Module, Global } from '@nestjs/common';
import { Pool } from 'pg'

const dbProvider = {
  provide: 'DATABASE_POOL',
  useFactory: () => {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10, //  max pool clients
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  },
};

@Global()
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}