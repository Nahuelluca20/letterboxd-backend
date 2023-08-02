import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log('DATABASE_HOST:', configService.get('DATABASE_HOST'));
        console.log(
          'POSTGRES_PORT:',
          configService.get<number>('POSTGRES_PORT'),
        );
        console.log('POSTGRES_USER:', configService.get('POSTGRES_USER'));
        console.log(
          'POSTGRES_PASSWORD:',
          configService.get('POSTGRES_PASSWORD'),
        );
        console.log('POSTGRES_DB:', configService.get('POSTGRES_DB'));

        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: +configService.get<number>('POSTGRES_PORT'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DB'),
          entities: entities,
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    FilmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
