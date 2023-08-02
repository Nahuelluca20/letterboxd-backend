import { Module } from '@nestjs/common';
import { FilmsController } from './controllers/films/films.controller';
import { FilmsService } from './services/films/films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Film]),],
  controllers: [FilmsController],
  providers: [FilmsService]
})
export class FilmsModule {}
