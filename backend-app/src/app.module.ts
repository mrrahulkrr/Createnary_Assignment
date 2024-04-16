import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'sqlite',
//       database: 'path/to/your/database.sqlite', // Specify the path to your .sqlite file
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true, // Use only in development
//     }),
//     // ... other modules
//   ],
//   // ... controllers, providers
// })
// export class AppModule {}

